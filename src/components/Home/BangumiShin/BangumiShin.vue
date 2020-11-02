<!--TODO: 样式修改 布局-->
<template>
  <div>
    <div id="day-box">
      <ul id="day">
        <li :style="{'color': selDay === index?'red':'#000000'}"
            v-for="(day,index) in dayMap"
            @click="selDay=index">{{ day }}</li>
      </ul>
    </div>
    <div id="bangumi-box">
      <ul id="bangumi">
        <li v-if="item.airDay === selDay" v-for="item in shinData">
          <a href="/">
            <div class="bangumi-item-box">
              <img :src="item.imageUrl" class="bangumi-img" alt="">
              <div class="bangumi-text">
                <div class="bangumi-name">{{ item.animeTitle }}</div>
                <div class="bangumi-rate">评分: {{ item.rating }}</div>
                <div class="restricted-level" v-show="item.isRestricted">限制级</div>
              </div>
            </div>
          </a>
          <div class="fav-btn">追番</div>
        </li>
      </ul>
      <div class="clear-fix"></div>
    </div>
  </div>
</template>

<script>
import {getShin} from "@/network/third_api";

export default {
  name: "BangumiShin",
  data() {
    return {
      dayMap: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
      selDay: 0,
      shinData: []
    }
  },
  mounted() {
    let today = new Date().getDay()
    this.selDay = today;
    this.dayMap[today] = '今天'
    let filter = true;
    if (this.$store.state.loginStates.login === 1) {
        filter = this.$store.state.loginStates.filterR18;
    }
    getShin(filter).then(response=>{
      this.shinData = response.data.bangumiList
      console.log(response.data)
    })
  }
}
</script>

<style scoped>
  a:link,
  a:visited {
    color: #000000;
  }

  #day-box {
    height: 45px;
  }

  #day {
    padding: 0;
    margin: 0 10px;
  }

  #day li {
    list-style: none;
    float: left;
    margin: 0 10px;
  }

  #day li:hover {
    cursor: pointer;
  }

  #bangumi {
    padding: 0;
    margin: 0 15px;
  }

  #bangumi li {
    position: relative;
    float: left;
    list-style: none;
    margin: 5px 4px;
    height: 170px;
    border: #e3e3e3 solid 1px;
    border-radius: 10px;
  }

  .bangumi-img {
    position: absolute;
    margin: 10px;
    width: 106px;
    height: 150px;
  }

  .bangumi-text {
    position: absolute;
    left: 126px;
  }

  .bangumi-name,
  .bangumi-rate {
    padding: 5px 0 0 2px;
  }

  .bangumi-item-box {
    width: 375px;
  }

  .restricted-level {
    display: inline-block;
    padding: 5px;
    border-radius: 5px;
    margin: 10px;
    background: red;
    color: #ffffff;
  }

  .fav-btn {
    position: absolute;
    right: 10px;
    bottom: 10px;
    background-color: hotpink;
    padding: 5px 15px;
    border-radius: 5px;
    color: #ffffff;
  }
  .fav-btn:hover {
    cursor: pointer;
  }
</style>