<template>
  <div id="app" class="m-no-select">
    <router-view></router-view>
  </div>
</template>

<script>
import {getBackend, getFileServer} from "@/network/VideoApi";
export default {
  mounted() {
    let that = this
    getFileServer().then(res => {
      this.$store.state.baseFileServer = res.data.data
    })
    getBackend({url: 'auth/getUserInfo'}).then(res => {
      if (res.data.code === 0) {
        that.$store.state.loginUser = res.data.data
      }else {
        that.$store.state.loginUser = null
      }
    })
  },

}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  background-color: #fafafa;
}

.clear-fix {
  list-style: none;
  clear: both;
}

.box {
  margin: 0 auto;
  width: 1200px;
}

.flex-1 {
  flex: 1;
}

a:link,
a:visited {
  color: #000000;
  text-decoration: none;
}

.m-no-select {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.btn-sel:hover {
  cursor: pointer;
}

input,button {
  outline: none;
  border: none;
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: none;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
