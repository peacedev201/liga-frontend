<template>
    <div class="p-dashboard-body">
        <div class="container admin-dashboard">
        <div class="heading">
            <h3 class="d-inline-block">Support</h3>
        </div>
        <hr />
        <div>
            <h5 style="margin-bottom: 20px">Support Requests</h5>
            <b-list-group>
                <b-list-group-item button v-for="(ticket, index) in tickets" :key="index" @click="openChat(ticket)">{{ticket.user.profileable.full_name}}</b-list-group-item>
            </b-list-group>
        </div>
        </div>

        <b-modal
        id="chat_thread"
        v-bind:title="title"
        hide-footer
        >
            <p class="close-ticket" @click="closeTicket">Close ticket</p>
            <!-- <div class="chat-box" id="chat_box">
                <ul>
                    <li v-for="(message, index) in messages" :key="index">
                    <b v-if="message.from == -1">Admin : </b>
                    <b v-else>{{title}} : </b> <br>
                    <p style="padding-left: 30px; white-space: pre-wrap"  v-html="parseMessage(message.message)"></p> 
                    </li>
                </ul>                
            </div> -->

            <messages
                id="messages"
                :title="title"
                :messages="messages"
            ></messages>
            
            <b-input-group>
                <textarea-emoji-picker
                    id="messagebox"
                    placeholder="Message..."
                    rows="1"
                    max-rows="2"
                    :keypress = "keypress"
                    v-model="message">
                </textarea-emoji-picker>
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

export default {
    layout: "auth",
    components: { TextareaEmojiPicker, Messages },
    async asyncData({ $axios }) {
        const { data } = await $axios.get("ticketlist");
        if (data.status.success) {
            return { tickets: data.data };
        }
    },

    data() {
        return {
            tickets: [],
            ticket: [],
            title: '',
            messages: [],
            message: '',
            selectedThreadID: 0,
        }
    },

    mounted() {
        var $socket = this.$nuxtSocket({
        channel: '/'
        })
        /* Listen for events: */
        $socket.on('connect', (msg, cb) => {
        })

        $socket.emit('register', -1);

        $socket.on('message', (data)=>{
        if(data){
            if(data.from == this.ticket.player || this.ticket==[]){
                this.messages.push(data);
                this.$axios.$get(`approvemessage/${data.id}`).then(res => {
                });
            }
            if(this.tickets.some(el => el.player == data.from)==[]){
                this.$axios.get("ticketlist").then(res => {
                    this.tickets = res.data.data
                })
            }       
        }
        })

    },

    methods: {
        keypress(){
            this.$nextTick(() => {
                this.sendMessage();
            });
        },
        
        async sendMessage(){
            let form = new FormData();
            form.append('message', this.message);
            form.append('from', -1);
            form.append('to', this.ticket.user.profileable.id);
            form.append('thread_id', this.selectedThreadID);

            this.messages.push({
                message: this.message,
                from: -1,
                to: this.ticket.user.profileable.id,
            });

            const { data } = await this.$axios.post(
                "addmessage",
                form
            );
            var $socket = this.$nuxtSocket({
            channel: '/'
            })

            $socket.emit('message', data.data
            , (resp) => {
            })
            this.message = '';
        },
        openChat(ticket){
            this.ticket = ticket;
            this.selectedThreadID = this.ticket.thread_id;
            this.title = this.ticket.user.profileable.full_name || "";
            this.$axios.$get(`openchat/${ticket.thread_id}`).then(res => {
                if(res.data){
                    this.messages = res.data;
                } else {
                    this.messages = [];
                }
                this.$bvModal.show('chat_thread');
            });
        },
        closeTicket(){
            this.$axios.$get(`closeticket/${this.ticket.id}`).then(res => {
                if(res.data){
                    this.$bvModal.hide('chat_thread');
                    this.messages = [];
                    this.$axios.get("ticketlist").then(res => {
                        this.tickets = res.data.data
                        this.ticket = []
                    })
                }
                
            });
        }
    },
}
</script>