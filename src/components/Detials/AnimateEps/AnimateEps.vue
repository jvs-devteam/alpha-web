<template>
<div id="eps">
  <h2 id="eps-title">选集({{ epsData.total }})</h2>
  <div id="ep-item-out-box">
    <ul id="ep-item-box">
      <li class="ep-item" v-for="ep in epsData.eps" :key="ep.epsId">
        <img class="ep-item-img" :src="ep.epsImg" alt="">
        <div class="ep-item-r">
          <div class="ep-item-r-count">第{{ ep.epsCount }}集</div>
          <div class="ep-item-r-info limit-height">{{ ep.epsInfo }}</div>
          <span class="ep-item-r-state">未观看</span>
        </div>

      </li>
      <li class="clear-fix"></li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
name: "AnimateEps",
  props: {
    epsData: {
      type: Object,
      default() {
        return {
          aid: 0,
          total: 0,
          eps: [
            {
              epsId: 0,
              epsCount: 0,
              epsName: '标题',
              epsInfo: '简介',
              epsImg: null
            }
          ]
        }
      }
    }
  }
}
</script>

<style scoped>
#eps {
  background-color: #fff;
  padding: 10px 0;
  border-radius: 10px;
}

#eps-title {
  font-size: 26px;
  padding: 0 16px;
  margin: 5px 0;
}

#ep-item-box {
  margin: 0;
  padding: 0;
}

.ep-item {
  position: relative;
  float: left;
  list-style: none;
  padding: 5px;
  margin: 5px 5px 5px 12px;
  background-color: #f2f2f2;
  border-radius: 5px;
}

.ep-item-img {
  float: left;
  width: 150px;
  height: 85px;
  background-image: url("../../../assets/404img/404Video.png");
  background-size: cover;
}

.ep-item-r {
  float: left;
  width: 200px;
  padding-left: 6px;
}

.ep-item-r>div {
  padding: 2px 0;
}

.ep-item-r-count {
  font-size: 16px;
}

.ep-item-r-info {
  color: #5e5e5e;
  font-size: 14px;
}

.ep-item-r-state {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 14px;
  color: #ffffff;
  padding: 5px;
  background-color: skyblue;
  border-radius: 5px;
  display: block;
}

.limit-height {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>