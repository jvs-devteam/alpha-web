<template>
  <div class="side-bar">
    <ul>
      <li>
        <router-link to="/creator">
          <font-awesome-icon class="icon" :icon="['fa', 'home']"></font-awesome-icon>
          <span>概览</span>
        </router-link>
      </li>
      <li>
        <router-link to="/creator/my-data">
          <font-awesome-icon class="icon" :icon="['fa', 'database']"></font-awesome-icon>
          <span>我的数据</span>
        </router-link>
      </li>
      <li>
        <router-link to="/creator/upload">
          <font-awesome-icon class="icon" :icon="['fa', 'upload']"></font-awesome-icon>
          <span>上传新视频</span>
        </router-link>
      </li>
      <li>
        <router-link to="/creator/my-upload">
          <font-awesome-icon class="icon" :icon="['fa', 'play-circle']"></font-awesome-icon>
          <span>我的投稿</span>
        </router-link>
      </li>
      <li>
        <router-link to="/creator/my-sub">
          <font-awesome-icon class="icon" :icon="['fa', 'closed-captioning']"></font-awesome-icon>
          <span>我的字幕</span>
        </router-link>
      </li>
      <li>
        <router-link to="/creator/my-comment">
          <font-awesome-icon class="icon" :icon="['fa', 'comments']"></font-awesome-icon>
          <span>我的互动</span>
        </router-link>
      </li>
      <li>
        <router-link to="/creator/my-fans">
          <font-awesome-icon class="icon" :icon="['fa', 'users']"></font-awesome-icon>
          <span>我的粉丝</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
name: "SideBar",
  mounted() {
    let timer = setInterval(res => {
      if(this.$store.state.loginUser !== 1) {
        clearInterval(timer)
        if (this.$store.state.loginUser === null) {
          console.log('You Have No Access To View This Page')
          this.$router.push('/')
        }
      }
    }, 50)
  }
}
</script>

<style scoped>
.side-bar {
  height: 100%;
  overflow: paged-y;
  overflow-y: scroll;
}

.side-bar::-webkit-scrollbar { width: 0 !important }

ul {
  list-style: none;
  margin: 0;
  padding: 10px 0 0 0;
  display: flex;
  flex-direction: column;
}

li a {
  margin: 0;
  padding: 15px 15px;
  display: flex;
  align-items: center;
  transition: background-color 0.5s;
}

li a:hover {
  background-color: #f2f2f2;
  cursor: pointer;
}

li a {
  color: #000000;
  font-size: 22px;
}

.icon {
  color: #c2c2c2;
  margin-right: 10px;
}

li span {
  margin-left: 5px;
  font-size: 14px
}
</style>