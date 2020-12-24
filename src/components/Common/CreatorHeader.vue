<template>
  <header>
    <img class="creator-logo" :src="require('../../assets/new-creator.png')" alt="">
    <nav>
      <ul>
        <li>
          <router-link to="/">
            <font-awesome-icon class="home-icon" :icon="['fa', 'home']"></font-awesome-icon>
            <span>主站</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="flex-1"></div>
    <div class="user" v-if="$store.state.loginUser !== 0 && $store.state.loginUser !== null">
      <img :src="require('../../assets/tmp/3.webp')" alt="" class="user-header">
      <span class="username">{{$store.state.loginUser.username}}</span>
    </div>
  </header>
</template>

<script>
export default {
  name: "CreaterHeader"
}
</script>

<style scoped>
header {
  position: relative;
  z-index: 10;
  height: 60px;
  box-shadow: #c2c2c2 1px 1px 5px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.creator-logo {
  height: 50px;
}

h1 {
  margin: 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}

li {
  margin-left: 15px;
}

li a {
  color: #5e5e5e;
  font-size: 14px;
}

.home-icon {
  margin-right: 5px;
}

.user {
  display: flex;
  align-items: center;
}

.user span {
  margin-left: 10px;
}

.user-header {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>