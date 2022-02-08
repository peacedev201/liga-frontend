<template>
  <div class="p-dashboard-navbar bg-dark">
    <div class="container pl-1 pr-1">
      <b-navbar toggleable="lg" type="dark">
        <b-navbar-brand :to="{ name: 'index' }">
          <img src="/images/logo.png" class="logo" alt />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'admin' }">Admins</b-nav-item>
            <b-nav-item :to="{ name: 'news' }">News</b-nav-item>
            <b-nav-item :to="{ name: 'club' }">Clubs</b-nav-item>
            <b-nav-item :to="{ name: 'player' }">Players</b-nav-item>
            <b-nav-item :to="{ name: 'tournament' }">Tournaments</b-nav-item>
            <b-nav-item :to="{ name: 'support' }">Support
              <span class="badge badge--notification" style="    position: absolute;
                top: 35px;
                margin-left: 55px;
                color: white;
                background: red;
                height: 20px;
                width: 20px;
                border-radius: 100%;">{{notification.total}}</span>
            </b-nav-item>
            <!-- <b-nav-item :to="{name: 'setting'}">Settings</b-nav-item> -->
            <!-- <b-nav-item-dropdown text="Data">
              <b-dropdown-item :to="{name: 'language'}">Languages</b-dropdown-item>
            </b-nav-item-dropdown> -->
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto header-icons">
            <b-nav-item @click.prevent="$auth.logout()">Logout</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notification: [],
    }
  },
  mounted() {

    this.$axios.$get(`getnotification/-1`).then(res => {
      if(res.data){
        this.notification = res.data;
      }
    })

    var $socket = this.$nuxtSocket({
      channel: '/'
    })
    $socket.emit('register', -1);
    $socket.on('message', (data) => {
      if(data){
        
      }
    })
  },
};
</script>