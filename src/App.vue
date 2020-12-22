<template>
  <div id="app" class="m-no-select">
    <header :style="'background-image: url(' + $store.state.basicInfo.bannerUri + ');'">
      <div>
        <ul id="nav">
          <li><a href="/">首页</a></li>
          <li><a href="/">番剧索引</a></li>
          <li><a href="/">连载动画</a></li>
          <li><a href="/">完结动画</a></li>
          <li><a href="/">资讯</a></li>
          <li><a href="/">新番时间表</a></li>
          <li><a href="/">Colter的图片站</a></li>
        </ul>
      </div>

      <div id="login" v-if="$store.state.loginUser === null"><a href="/login">登陆</a></div>

      <div id="user" v-else>
        <img id="user-head" :src="require('./assets/tmp/3.webp')" alt="">
        <span id="logout" class="btn-sel" @click="logout">登出</span>
      </div>

      <div id="search">
        <label>
          <input type="text" id="search-text" placeholder="请输入关键词">
        </label>
        <input type="button" id="search-btn" value="搜索">
      </div>

    </header>
    <router-view></router-view>
    <footer>备案信息</footer>
  </div>
</template>

<script>
import {getBackend, getFileServer} from "@/network/VideoApi";
export default {
  methods: {
    logout() {
      //登出
      getBackend({url: 'logout'}).then(res => {
        if (res.data.code === 0) {
          this.$store.state.loginUser = null;
        }
      })
    }
  },
  mounted() {
    getFileServer().then(res => {
      this.$store.state.baseFileServer = res.data.data
    })
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

.clear-fix {
  list-style: none;
  clear: both;
}

.box {
  margin: 0 auto;
  width: 1200px;
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

input:focus {
  outline: none;
}

button {
  margin: 0;
  padding: 0;
  border: 1px solid transparent;
  outline: none;
}

a:visited,
a:link {
  text-decoration: none;
  color: #ffffff;
}

header {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 200px;
  padding-bottom: 10px;
}

#nav {
  padding: 0;
  margin: 0;
}

#nav li {
  list-style: none;
  float: left;
  padding: 15px;
}

#nav li a:link,
#nav li a:visited,
#login,
#logout {
  color: #ffffff;
  font-size: 14px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
}

#nav li a:hover {
  cursor: pointer;
}

#search {
  float: left;
  padding: 10px;
}

#search input {
  float: left;
  height: 36px;
  padding: 0 10px;
  border: none;
}

#search-text {
  border-radius: 5px 0 0 5px;
}

#search-btn {
  display: block;
  float: left;
  color: #000000;
  background-color: #e3e3e3;
  padding: 5px 10px;
  font-size: 14px;
  line-height: 26px;
  height: 26px;
  border-radius: 0 5px 5px 0;
}

#search-btn:hover {
  cursor: pointer;
}

#login {
  float: right;
  padding: 15px 25px;
}

#user {
  padding: 10px;
  float: right;
}
#user-head {
  float: left;
  margin-right: 10px;
  width: 35px;
  border-radius: 35px;
}
#logout {
  float: left;
  margin-right: 15px;
  line-height: 35px;
  font-size: 14px;
  color: #ffffff;
}

footer {
  text-align: center;
  margin-top: 10px;
  padding-top: 50px;
  padding-bottom: 20px;
  background-color: #e3e3e3;
}
</style>
