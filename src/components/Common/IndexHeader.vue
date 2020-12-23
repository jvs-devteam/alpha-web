<template>
  <header :style="'background-image: url(' + $store.state.basicInfo.bannerUri + ');'">
    <nav>
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

      <div id="search">
        <label>
          <input type="text" id="search-text" placeholder="请输入关键词">
        </label>
        <input type="button" id="search-btn" value="搜索">
      </div>

      <div class="flex-1"></div>

      <div id="login" v-if="$store.state.loginUser === null || $store.state.loginUser === 0"><a href="/login">登陆</a></div>

      <div id="user" v-else>
        <img id="user-head" :src="require('../../assets/tmp/3.webp')" alt="">
        <span><router-link to="/creator">创作中心</router-link></span>
        <span id="logout" class="btn-sel" @click="logout">登出</span>
      </div>
    </nav>

  </header>
</template>

<script>
import {getBackend} from "@/network/VideoApi";

export default {
  name: "IndexHeader",
  methods: {
    logout() {
      //登出
      getBackend({url: 'auth/logout'}).then(res => {
        if (res.data.code === 0) {
          this.$store.state.loginUser = null;
        }else {
          console.log('err' + res.data.message)
        }
      })
    }
  }
}
</script>

<style scoped>
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

nav {
  display: flex;
  align-items: center;
  height: 60px;
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
  padding: 10px;
  display: flex;
}

#search input {
  height: 36px;
  padding: 0 10px;
  border: none;
}

#search-text {
  border-radius: 5px 0 0 5px;
}

#search-btn {
  display: block;
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
  padding: 15px 25px;
}

#user {
  padding: 10px;
  display: flex;
  align-items: center;
}

#user span {
  margin-right: 15px;
  line-height: 35px;
  font-size: 14px;
  color: #ffffff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
}

#user-head {
  margin-right: 10px;
  width: 35px;
  border-radius: 35px;
}
#logout {
  margin-right: 15px;
  line-height: 35px;
  font-size: 14px;
  color: #ffffff;
}
</style>