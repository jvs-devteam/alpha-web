<template>
<div>
  <div id="info">
    <img id="info-img" :src="animateInfo.img" alt="">
    <div id="info-r">
      <div id="info-r-1">
        <span id="title">{{ animateInfo.name }}</span>
        <ul id="tag">
          <li v-for="tagItem in animateInfo.tag" id="tag-item">{{ tagItem.tagName }}</li>
        </ul>
      </div>
      <div id="info-r-2"><span id="info-r-time">{{ animateInfo.time.substring(0,4)}} 年 {{ animateInfo.time.substring(4,6) }} 月 {{ animateInfo.time.substring(6,8) }} 日播出</span><span id="info-r-state">{{ animateInfo.state }},全 {{ animateInfo.total }} 话</span></div>
      <div id="info-r-3">简介:{{ animateInfo.info}}</div>
    </div>
    <div class="btn-box" v-if="$store.state.loginStates.login">
      <div id="play-btn" class="btn">播放</div>
      <div id="fav-btn" class="btn" :style="{backgroundColor: animateInfo.isFav?'#c6c6c6':'pink'}" @click="changeFavState">{{ animateInfo.isFav?'已追番':'追番' }}</div>
    </div>
    <div class="btn-box" v-else>
      <div class="btn" style="background-color: #c6c6c6;">请先登录</div>
    </div>
    <div class="clear-fix"></div>
  </div>
</div>
</template>

<script>
export default {
name: "BasicInfo",
  props: {
    animateInfo: {
      type: Object,
      default() {
        return {
          aid: 0,
          name: "nulll",
          img: null,
          tag: [],
          info: 'null',
          watchProcess: 0,
          time: '00000000',
          state: 0,
          total: 0,
          isFav: false
        }
      }
    }
  },
  mounted() {
  },
  methods: {
    changeFavState() {
      this.animateInfo.isFav = !this.animateInfo.isFav
    }
  }
}
</script>

<style scoped>
#info {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
}

#info-img {
  float: left;
  width: 200px;
  height: 288px;
  border: #e6e6e6 solid 1px;
  background-image: url("../../../assets/404img/img404.png");
  background-size: cover;
}

#info-r {
  position: absolute;
  width: 880px;
  margin: 0 220px;
}

ul {
  display: inline-block;
  padding: 0;
  margin: 0;
}

ul li {
  list-style: none;
  float: left;
  padding: 4px 8px;
  margin: 0 5px;
  background-color: skyblue;
  border-radius: 6px;
  color: #2e2e2e;
  font-size: 16px;
}

#title {
  font-size: 24px;
  font-weight: bold;
}

#info-r {
  float: left;
  padding: 0 20px;
}

#info-r-2 {
  margin: 10px 0;
}

#info-r-time {
  margin-right: 20px;
}

.btn-box {
  position: absolute;
  right: 60px;
  bottom: 20px;
}

#play-btn {
  background-color: skyblue;
}

.btn {
  float: left;
  font-size: 16px;
  padding: 15px 50px;
  margin: 0 10px;
  border-radius: 10px;
  color: #ffffff;
}

.btn:hover {
  cursor: pointer;
}
</style>