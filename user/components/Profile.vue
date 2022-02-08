<template>
  <div class="profile-outer">
    <div class="row">
      <div class="col-lg-3">
        <div class="profile-section">
          <div class="avatar-profile">
            <div class="img">
              <img :src="player.profile_picture" alt="" />
            </div>
            <div v-bind:class="{ 'lable-no': true, 'online': status, 'offline': !status }">
            </div>
          </div>
        </div>

        <div class="setting-lable" v-if="type=='guest'">
          <h5 class="add-friend" @click="addFriend()">Add as friend </h5>
          <span class="mdi mdi-settings"></span>
        </div>

        <div class="setting-lable friends-list" v-if="type=='owner'">
          <h5>Friends list <span v-b-modal.request_lists class="request-alarm" v-if="requestLength>0">+{{requestLength}}!</span></h5>
          <p class="support" @click="openSupport()">Support</p>
          <hr>
          <p class="online">Friends</p>
          <p class="friends"  v-for="(friend, index) in friendsShow" :key="index"  @click="openChat(friend)">{{friend.profileable.full_name}}</p>

          <p class="more" v-b-modal.friend_lists>more...</p>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="profile-content">
          <h3>{{ player.full_name }}</h3>
          <br />
          <!--<p>
            {{
              player.biography && player.biography == "null"
                ? ""
                : player.biography
            }}
          </p>-->
        </div>
        <div class="row">
          <div class="col-3">
            <div class="profile-content-bottom">
              <h4>Verein</h4>
              <img
                v-if="player.membership"
                class="rounded-circle"
                :src="player.membership.club.profile_picture"
                alt=""
              />
              <h5 v-else>Kein Verein</h5>
            </div>
          </div>
          <div class="col-3">
            <div class="profile-content-bottom">
              <h4>Spiele</h4>
              <h2>{{ player.played_games }}</h2>
            </div>
          </div>
          <div class="col-3">
            <div class="profile-content-bottom">
              <h4>Tore</h4>
              <h2>{{ player.goals }}</h2>
            </div>
          </div>
          <div class="col-3">
            <div class="profile-content-bottom">
              <h4>Siege</h4>
              <h2>{{ player.win_games }}</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="row right-badges">
          <div class="col-4">
            <div class="right-badge-img">
              <img style="width: 50px; height: 50px;" src="/images/icons/Liga-sh-Tag-1.png" alt="Liga.sh - Einer der 1. 200" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="matches">
      <hr class="m-0" />
      <div v-if="player.matches.length > 0" class="row">
        <ProfileMatchBox
          v-for="(match, index) in player.matches"
          :key="index"
          :match="match"
        />
      </div>
      <h4 v-else class="mt-3 text-center">Keine Spiele geplant</h4>
      <hr />
      <div class="row">
        <div class="col-12">
          <b-table
            responsive
            thead-class="text-center"
            tbody-class="text-center"
            head-variant="dark"
            striped
            hover
            :items="player.tournaments"
            :fields="tournament_fields"
            show-empty
          >
            <template #empty>
              <h4>Keine Spiele gewertet</h4>
            </template>
          </b-table>
        </div>
      </div>
    </div>
    <b-modal
      id="friend_lists"
      title="Friends Lists"
      hide-footer
    >
      <b-form class="w-100" >
        <b-form class="friend-list">
          <p class="support" @click="openSupport()">Support</p>
          <hr>
          <p class="online">Friends</p>
          <p class="friends" v-for="(friend, index) in friendsData" :key="index"  @click="openChat(friend)">{{friend.profileable.full_name}}</p>
        </b-form>
      </b-form>
    </b-modal>

    <b-modal
      id="request_lists"
      title="Friend Requests"
      hide-footer
    >
      <b-form class="w-100" >
        <b-form class="requests-list">
          <b-form-row v-for="(request, index) in requests_data" :key="index" style="padding: 5px">
            <div class="w-60">
              <p class="request-name">Request from {{request.profileable.full_name}}</p>
            </div>
            <div class="w-20">
              <b-button @click="decline(request.profileable_id)">Decline</b-button>
            </div>
            <div class="w-20">
              <b-button variant="success" @click="accept(request.profileable_id)">Accept</b-button>
            </div>
          </b-form-row>
        </b-form>
      </b-form>
    </b-modal>

    <b-modal
      id="chat_thread"
      v-bind:title="selectedFriend"
      hide-footer
    >

    <div class="message-box" style="height: 70vh; position: relative; overflow-y:auto; padding-bottom: 20px" >
      <messages
          id="messages"
          :fromName="selectedFriend"
          :toName="player.full_name"
          :selectedFriendID="selectedFriendID"
          :messages="messages"
      ></messages>
    </div>
     
        <b-input-group>
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
    </b-modal>
  </div>
</template>

<script>
 import TextareaEmojiPicker from './TextareaEmojiPicker'
 import Messages from './messages.vue';
 import { mapGetters } from 'vuex'

export default {
  props: {
    player: {
      type: Object,
      required: true,
    },
    friends: {
      type: Array,
    },
    requests: {
      type: Array,
    },
    type: {
      type: String,
      required: true,
    },
  },
  components: { TextareaEmojiPicker, Messages },
  data: function () {
    return {
      matches: [
      ],
      message: '',
      messages: [],
      selectedFriend: '',
      selectedFriendID: 0,
      selectedThreadID: 0,
      requests_data: this.requests,
      friendsData: [],
      friendsShow: [],
      requestLength: 0,
      status: true,
      tournament_fields: [
        {
          key: "name",
          label: "Turniere",
          sortable: false,
        },
        {
          key: "played_games",
          label: "Spiele",
          sortable: false,
        },
        {
          key: "win_games",
          label: "Siege",
          sortable: false,
        },
        {
          key: "draw_games",
          label: "Unentschieden",
          sortable: false,
        },
        {
          key: "lost_games",
          label: "Verloren",
          sortable: false,
        },
        {
          key: "points",
          label: "Wertung",
          sortable: false,
        },
      ],
    };
  },

  computed: {
    ss() {
      return this.$store.state.message.message;
    },
    // ...mapGetters({
    //   sss: "message/sss"
    // })
  },

  watch: {
      // sss(next) {
      //   console.log(next, '-----');
      // },
      ss(next) {
        if(next && this.selectedFriendID == next.from){
          this.messages.push(next);
          this.$axios.$get(`approvemessage/${next.id}`).then(res => {
            if(res.data){
              this.$axios.$get(`getnotification/${this.$auth.user.profile.id}`).then(res => {
                if(res.data){
                  this.$store.commit('message/setNotification', res.data);
                }
              })
            }
          });
        }
      }
  },

  mounted() {
    var $socket = this.$nuxtSocket({
      channel: '/'
    })
    /* Listen for events: */
    $socket
    .on('connect', (msg, cb) => {
    })

    var my_id = this.$auth.user.profile.id

    // $socket.emit('register', my_id);

    // $socket.on('message_profile', (data)=>{
    //   console.log("Message profile");
    //   if(data && this.selectedFriendID == data.from){
    //     this.messages.push(data);
    //     console.log("Messages:----------",messages);
    //     this.$axios.$get(`approvemessage/${data.id}`).then(res => {
    //     });
    //   }
    // })

    this.requestLength = (this.requests || []).length

    this.friendsData = this.friends

    $socket.emit('online', {
      username: this.player.id,
      to: my_id
    });
    $socket.on('online', (data)=>{
          this.status = data;
    })
    if(this.friendsData && this.friendsData.length > 0){
      this.friendsShow = this.friendsData.slice(0,2);
    }

  },
  methods: {
    keypress(){
        this.$nextTick(() => {
            this.sendMessage();
        });
    },

    onEnterKey(e) {
        console.log("ClickedEnter", e);
        console.log(this.message);
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
    openChat(friend){
      console.log('friend----------------------------------',friend);
      this.messages = [];
      this.selectedFriend = friend.profileable.full_name;
      this.selectedFriendID = friend.profileable_id;
      this.$axios.$get(`createthread/${this.$auth.user.profile.id}/${friend.profileable.id}`).then(res => {
        this.selectedThreadID = res.data;
        this.$axios.$get(`openchat/${res.data}`).then(res => {
          if(res.data){
            this.messages = res.data;
          }
          this.$bvModal.show('chat_thread');
        });
      });      
    },
    openSupport(){
      this.messages = [];
      this.selectedFriend = "Support";
      this.selectedFriendID = -1;
      this.$axios.$get(`supportrequests/${this.$auth.user.profile.id}`).then(res => {
        this.selectedThreadID = res.data;
        this.$axios.$get(`openchat/${res.data}`).then(res => {
          if(res.data){
            this.messages = res.data;
          }
          this.$bvModal.show('chat_thread');
        });
      });  
    },
    addFriend(){
      this.$axios.$get(`friendrequests/${this.$auth.user.profile.id}/${this.player.id}`).then(res => {
        console.log(res);
      });
    },
    decline(id){
      this.$axios.$get(`cancelrequests/${id}/${this.$auth.user.profile.id}`).then(res => {
        this.requests_data = this.requests_data.filter(function(value, index, arr){
          return value.profileable_id != id;
        })
        this.requestLength--;
      });
    },
    accept(id){
      this.$axios.$get(`approverequests/${id}/${this.$auth.user.profile.id}`).then(res => {
        if(res.status.success){
          this.$axios.$get(`friendlist/${this.$auth.user.profile.id}`).then(res => {
            this.friendsData = res.data;
            if(this.friendsData && this.friendsData.length > 0){
              this.friendsShow = this.friendsData.slice(0,2);
            }
          });
          this.requests_data = this.requests_data.filter(function(value, index, arr){
            return value.profileable_id != id;
          })
          this.requestLength--;
        }
        
      });
    }
  },
};
</script>
