<template>
  <div id="my-fav-main">
    <h2 id="my-fav-title">我的追番</h2>
    <div id="my-fav-con-box">
      <ul id="my-fav-con">
        <li class="my-fav-con-item" v-for="item in myFav">
          <a :href="'/details/' + item.aid">
            <img class="my-fav-item-img" :src="item.img" alt="">
            <div class="my-fav-item-info-box">
              <div class="my-fav-item-name">{{ item.name }}</div>
              <div class="my-fav-item-process">您已看到第{{ item.watchProcess }}集</div>
            </div>
            <div class="clear-fix"></div>
          </a>
        </li>
        <li class="clear-fix"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFav",
  data() {
    return {
      myFav: [
        {
          aid: 13973,
          name: "Lapis Re:LiGHTs",
          img: "https://dandanimg.acplay.net/anime/13973.jpg!client",
          watchProcess: 12
        },
        {
          aid: 14537,
          name: "うまよん",
          img: null,
          watchProcess: 5
        },
        {
          aid: 14746,
          name: "龙之信条",
          img: "https://dandanimg.acplay.net/anime/14746.jpg!client",
          watchProcess: 6
        },
        {
          aid: 14764,
          name: "我的青春恋爱物语果然有问题 完",
          img: "https://dandanimg.acplay.net/anime/14764.jpg!client",
          watchProcess: 3
        },
      ]
    }
  }
}
</script>

<style scoped>
a:visited,
a:link {
  color: #000000;
}

#my-fav-main {
  margin: 10px;
}

#my-fav-title {
  margin: 0 15px;
}

#my-fav-con {
  margin: 0;
  padding: 5px;
}

.my-fav-con-item {
  position: relative;
  list-style: none;
  padding: 0;
  margin: 10px;
}

.my-fav-item-img {
  float: left;
  width: 60px;
  height: 85px;
  background-image: url("../../../assets/404img/img404.png");
  background-size: cover;
}

.my-fav-item-info-box {
  float: left;
  padding: 0 10px;
}

.my-fav-item-name {
  font-size: 18px;
  white-space: nowrap;
  text-overflow:ellipsis;
  overflow:hidden;
}

.my-fav-item-process {
  color: #5e5e5e;
  font-size: 12px;
  padding: 5px 0;
}

</style>