<template>
  <div id="banner-switcher">
    <div id="banner-switcher-item-box">
      <ul id="banner-switcher-item">
        <li :class="{'idx-img-act': index === nowIdx}" v-for="(item,index) in bannerData"><a :href="item.link"><img :src="item.cover" alt=""></a></li>
      </ul>
    </div>
    <div id="idx-sel-box">
      <ul id="idx-sel">
        <li :class="{'idx-sel-act':nowIdx === index}" class="btn-sel" v-for="(item,index) in bannerData" @click="changeTo(index)"></li>
      </ul>
    </div>
    <div id="banner-switcher-text-box">
      <ul id="banner-switcher-text">
        <li v-show="nowIdx === index" v-for="(item,index) in bannerData"> {{ item.name }} </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerSwitcher",
  data() {
    return {
      bannerData: [
        {
          name: '标题1',
          cover: require('../../../assets/tmp/2.jpg'),
          link: 'https://www.baidu.com'
        },
        {
          name: '标题2',
          cover: require('../../../assets/tmp/3.png'),
          link: 'https://www.baidu.com'
        },
        {
          name: '标题3',
          cover: require('../../../assets/tmp/2.jpg'),
          link: 'https://www.baidu.com'
        },
        {
          name: '标题4',
          cover: require('../../../assets/tmp/3.png'),
          link: 'https://www.baidu.com'
        },
      ],
      nowIdx: 0,
      Timer: 0
    }
  },
  methods: {
    // 计时器
    setSwitch() {
      this.Timer = setInterval(()=> {
        if (this.nowIdx === this.bannerData.length - 1) {
          this.nowIdx = 0;
          return ;
        }
        this.nowIdx ++;
      },10000)
    },
    // 切换页面
    changeTo(idx) {
      clearInterval(this.Timer)
      this.nowIdx = idx
      this.setSwitch()
    }
  },
  mounted() {
    this.setSwitch()
  },
  watch: {
  }
}
</script>

<style scoped>
  #banner-switcher {
    position: relative;
    padding: 20px;
  }

  #banner-switcher-item {
    position: relative;
    margin: 0;
    padding: 0;
    height: 337px;
    overflow: hidden;
  }

  #banner-switcher-item li {
    position: absolute;
    left: 0;
    top: 0;
    transition: all 1s;
    opacity: 0;
  }

  ul li {
    list-style: none;
    float: left;
  }

  #banner-switcher-item li img {
    width: 100%;
  }

  #idx-sel {
    position: absolute;
    bottom: 20px;
    right: 40px;
  }

  #idx-sel li {
    width: 30px;
    height: 10px;
    border-radius: 10px;
    margin: 0 5px;
    border: #e3e3e3 solid 1px;
    transition: background-color 500ms;
  }

  .idx-sel-act {
    background-color: #e3e3e3;
  }

  .idx-img-act {
    opacity: 1 !important;
  }

  #banner-switcher-text-box {
    position: absolute;
    left: 10px;
    bottom: 40px;
    color: #e3e3e3;
  }
</style>