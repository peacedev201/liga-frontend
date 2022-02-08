<template>
    <div class="chat-box" id="chat_box">
        <ul>
            <li v-for="(message, index) in messages" :key="index" style="display: flex" :class="message.from == selectedFriendID?' left-li':'right-li'">
            <!-- <b v-if="message.from == selectedFriendID">{{fromName}} : </b>
            <b v-else>{{toName}} : </b> <br> -->
            <p style="padding-left: 30px; white-space: pre-wrap" :class="message.from == selectedFriendID?' left':'right'"  v-html="parseMessage(message.message)"></p> 
            </li>
        </ul>                
    </div>
</template>

<script>
import emojiOne from 'emojione';

export default {
    name: 'messages',
    props: {
        messages: {
            type: Array,
            default: []
        },
        selectedFriendID: {
            type: Number,
        },
        fromName: {
            type: String,
            default: ''
        },
        toName: {
            type: String,
            default: ''
        }
    },
    updated() {
        // whenever data changes and the component re-renders, this is called.
        this.$nextTick(() => this.scrollToEnd());
    },
    mounted() {
        this.$nextTick(() => this.scrollToEnd());
    },
    methods: {
        urlify(text) {
            var urlRegex = /(https?:\/\/[^\s]+)/g;
            return text.replace(urlRegex, function(url) {
                return '<a href="' + url + '">' + url + '</a>';
            })
        },
        parseMessage(message) {
            return emojiOne.toImage(this.urlify(message))
        },
        
        scrollToEnd: function () {
            setTimeout(() => {
                this.$el.scrollTop = this.$el.scrollHeight;                
            }, 200);
        }
    }
}
</script>