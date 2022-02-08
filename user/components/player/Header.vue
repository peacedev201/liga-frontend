<template>
  <header class="lsh_header lsh_header--secondary-bg lsh_header--secondary-fixed">
    <div class="container py-0">
      <b-navbar toggleable="lg" class="py-0">
        <b-navbar-brand :to="{ name: 'index' }" class="lsh_header__brand_link">
          <img src="~/assets/images/logo/main.png" alt="liga-sh-logo" />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="lsh_header__main_menu">
            <b-nav-item class="nav-middle-link" :to="{ name: 'index' }">Startseite</b-nav-item>
            <b-nav-item class="nav-middle-link" :to="{ name: 'member-player' }">Spieler</b-nav-item>
            <b-nav-item class="nav-middle-link" :to="{ name: 'member-club' }">Vereine</b-nav-item>
            <b-nav-item class="nav-middle-link" :to="{ name: 'tournament' }">Turniere</b-nav-item>
            <b-nav-item class="nav-middle-link" :to="{ name: 'roadmap' }">Roadmap</b-nav-item>
            <b-nav-item class="nav-middle-link-end" :to="{ name: 'faq' }">FAQ</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="lsh_header__login_container">
            <b-dropdown
              variant="link"
              class="lsh_header__login_container__profile_dropdown"
              toggle-class="text-decoration-none"
              no-caret
              right
            >
              <template #button-content>
                <div class="lsh_header__login_container__account">
                  <span class="text--white" style="padding-right: 8px">
                    {{ user.profile.nick_name }}
                  </span>
                  <i class="mdi mdi-chevron-down mr-1 text--white"></i>
                  <img
                    style="
                      max-height: 52px;
                      min-height: 52px;
                      border-radius: 50%;
                      border:2px solid #015fff;
                    "
                    :src="user.profile.profile_picture"
                    alt="profile-picture"
                  />
                  <span v-if="notification.total!=0" class="badge badge--notification" style="top:17px; padding: initial; margin-left: -10px;">{{notification.total}}</span>
                </div>
              </template>
              <b-dropdown-item
                :to="{ name: `${user.type}-profile` }"
                variant="white"
              >Profil</b-dropdown-item
              >
              <b-dropdown-item v-b-toggle.sidebar-message variant="white"> Messages </b-dropdown-item>
              <b-dropdown-item @click="$auth.logout()" variant="white"
              >Abmelden</b-dropdown-item
              >
            </b-dropdown>

            <b-sidebar id="sidebar-message" title="Messages" right shadow bg-variant="dark" text-variant="light">
              <div class="px-3 py-2">
                <b-list-group>
                  <b-list-group-item href="#" v-for="(thread, index) in threads" :key="index" @click="openChat(thread)" v-b-toggle.sidebar-chat>{{thread.user_info[0] ? thread.user_info[0]['full_name'] : "Admin"}} 
                    <span class="badge badge--notification" style="padding: initial; top: initial; right: 10px" v-if="notification[thread.id] && notification[thread.id] != 0"> {{notification[thread.id]}}</span>
                  </b-list-group-item>
                </b-list-group>
              </div>
            </b-sidebar>

            <b-sidebar id="sidebar-chat" v-bind:title="selectedFriend" right shadow width="500px" style="overflow-y: scroll;">
              <template #footer="{ }">
                <div class="d-flex align-items-center px-3 py-2">
                  <b-input-group style="display:contents">
                    <textarea-emoji-picker
                      id="messagebox"
                      placeholder="Message..."
                      rows="1"
                      max-rows="2"
                      :keypress = "keypress"
                      v-model="message"></textarea-emoji-picker>
                      
                      
                    <b-input-group-append>
                      <span style="height: max-content; margin: auto; cursor: pointer;" @click="sendMessage()">
                        <svg class="svg-icon" viewBox="0 0 20 20" style="width:40px;height:30px">
                          <path d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"></path>
                        </svg>
                      </span>
                    </b-input-group-append>
                  </b-input-group>
                </div>
              </template>
              <div class="p-l-20" style="height: 100%">
                <messages
                  id="messages"
                  :fromName="selectedFriend"
                  :toName="user.profile.full_name"
                  :selectedFriendID="selectedFriendID"
                  :messages="messages"
                ></messages>      
              </div>
            </b-sidebar>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>

<script>
import TextareaEmojiPicker from '../TextareaEmojiPicker'
import Messages from '../messages.vue';
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  components: { TextareaEmojiPicker, Messages },
  data() {
    return {
      notification: [],
      threads: [],
      message: '',
      messages: [],
      selectedFriend: '',
      selectedFriendID: 0,
      selectedThreadID: 0,
    }
  },
  computed: {
    ss() {
      return this.$store.state.message.notification;
    },
  },

  watch: {
      ss(next) {
        if(next){
          this.notification = next;
        }
      }
  },
  mounted() {
    var my_id = this.$auth.user.profile.id

    this.$axios.$get(`getthreads/${my_id}`).then(res => {
      if(res.data){
        this.threads = res.data;
      }
    })

    this.$axios.$get(`getnotification/${my_id}`).then(res => {
      if(res.data){
        this.notification = res.data;
      }
    })

    var $socket = this.$nuxtSocket({
      channel: '/'
    })
    $socket.emit('register', my_id);
    $socket.on('message', (data) => {
      this.$store.commit('message/add', data);

      if(data && this.selectedFriendID == data.from){
        this.messages.push(data);
        this.$axios.$get(`approvemessage/${data.id}`).then(res => {
        });
      } else {
        this.$axios.$get(`getnotification/${my_id}`).then(res => {
          if(res.data){
            this.notification = res.data;
          }
        })
      }
    })
  },
  methods: {
    keypress(){
        this.$nextTick(() => {
            this.sendMessage();
        });
    },
    openChat(friend){
      this.$root.$emit('bv::toggle::collapse', 'sidebar-message')

      this.selectedFriend = friend['connection1'] == -1 ? "Admin" : friend.user_info[0].full_name;
      this.selectedFriendID = friend['connection1'] == -1 ? -1 : friend.user_info[0].id;
        this.selectedThreadID = friend.id;
        this.$axios.$get(`openchat/${this.selectedThreadID}`).then(res => {
          if(res.data){
            this.messages = res.data;
            this.$axios.$get(`getnotification/${this.$auth.user.profile.id}`).then(res => {
              if(res.data){
                this.notification = res.data;
              }
            })
          }
          // this.$root.$emit('bv::toggle::collapse', 'sidebar-chat')
        });
    },

    async sendMessage(){
      let form = new FormData();
      form.append('message', this.message);
      form.append('from', this.$auth.user.profile.id);
      form.append('to',  this.selectedFriendID);
      form.append('thread_id', this.selectedThreadID);

      // this.messages.push({
      //   message: this.message,
      //   from: this.$auth.user.profile.id,
      //   to: this.selectedFriendID,
      // });

      const { data } = await this.$axios.post(
        "addmessage",
        form
      );

      this.messages.push(data.data);

      var $socket = this.$nuxtSocket({
        channel: '/'
      })

      $socket.emit('message', data.data
      , (resp) => {
      })

      $socket.emit('message_profile', data.data
      , (resp) => {
      })

      this.message = '';
    },
    
  },

};
</script>
