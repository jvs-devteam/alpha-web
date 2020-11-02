<template>
  <div id="home-page">
    <div id="banner-switcher-box" class="box">
      <banner-switcher></banner-switcher>
    </div>
    <div id="two-col-box" class="box">
<!--      左边 900-->
      <div id="left-box">
        <div id="newly-box">
          <list-module :title="'最近上传'" :list="newlyData"></list-module>
          <list-module :title="'正在连载'" :list="serialData"></list-module>
          <list-module :title="'已完结'" :list="endedData"></list-module>
        </div>
      </div>
<!--      右边 300  -->
      <div id="right-box">
        <div id="myfav-box">
          <my-fav></my-fav>
        </div>
      </div>
<!--      清除浮动-->
      <div class="clear-fix"></div>
    </div>
  </div>
</template>

<script>
import BannerSwitcher from "@/components/Home/BannerSwitcher/BannerSwitcher";
import BangumiShin from "@/components/Home/BangumiShin/BangumiShin";
import ListModule from "@/components/Home/NewlyUpload/ListModule";
import MyFav from "@/components/Home/MyFav/MyFav";

export default {
  name: 'Home',
  components: {
    BannerSwitcher,
    BangumiShin,
    ListModule,
    MyFav
  },
  data: () => ({
    newlyData: [{
      aid: 13973,
      name: "Lapis Re:LiGHTs",
      img: null,
      tag: [{tid: 2, tagName: 'Tag'}, {tid: 1, tagName: 'Tag'}],
      info: '测试测试测试测试测试测试测试测试测试测试',
      watchProcess: 1
    },
      {
        aid: 14537,
        name: "うまよん",
        img: null,
        tag: [{tid: 2, tagName: 'Tag'}, {tid: 1, tagName: 'Tag'}],
        info: '测试测试测试测试测试测试测试测试测试测试',
        watchProcess: 1
      },
      {
        aid: 14746,
        name: "龙之信条",
        img: "https://dandanimg.acplay.net/anime/14746.jpg!client",
        tag: [{tid: 2, tagName: 'Tag'}, {tid: 1, tagName: 'Tag'}],
        info: '测试测试测试测试测试测试测试测试测试测试',
        watchProcess: 1
      },
      {
        aid: 14764,
        name: "我的青春恋爱物语果然有问题 完",
        img: null,
        tag: [{tid: 2, tagName: 'Tag'}, {tid: 1, tagName: 'Tag'}],
        info: '测试测试测试测试测试测试测试测试测试测试',
        watchProcess: 1
      },
      {
        aid: 14772,
        name: "刃牙 第2期",
        img: null,
        tag: [{tid: 2, tagName: 'Tag'}, {tid: 1, tagName: 'Tag'}],
        info: '测试测试测试测试测试测试测试测试测试测试',
        watchProcess: 1
      },
      {
        aid: 14792,
        name: "Re：从零开始的异世界生活 第二季",
        img: "https://dandanimg.acplay.net/anime/14792.jpg!client",
        tag: [{tid: 2, tagName: 'Tag'}, {tid: 1, tagName: 'Tag'}],
        info: '测试测试测试测试测试测试测试测试测试测试',
        watchProcess: 1
      },
      {
        aid: 14953,
        name: "魔法律事务所 第2期",
        img: "https://dandanimg.acplay.net/anime/14953.jpg!client",
        tag: [{tid: 2, tagName: 'Tag'}, {tid: 1, tagName: 'Tag'}],
        info: '测试测试测试测试测试测试测试测试测试测试',
        watchProcess: 1
      },
      {
        aid: 14986,
        name: "怪侠佐罗利 新系列",
        img: "https://dandanimg.acplay.net/anime/14986.jpg!client",
        tag: [{tid: 2, tagName: 'Tag'}, {tid: 1, tagName: 'Tag'}],
        info: '测试测试测试测试测试测试测试测试测试测试',
        watchProcess: 1
      }],
    serialData: [
      {
        aid: 13973,
        name: "Lapis Re:LiGHTs",
        img: "https://dandanimg.acplay.net/anime/13973.jpg!client",
        tag: [{tid: 2, tagName: 'Tag'}, {tid: 1, tagName: 'Tag'}],
        info: '测试测试测试测试测试测试测试测试测试测试',
        watchProcess: 1
      },
    ],
    endedData: [
      {
        aid: 14953,
        name: "魔法律事务所 第2期",
        img: "https://dandanimg.acplay.net/anime/14953.jpg!client",
        tag: [{tid: 2, tagName: 'Tag'}, {tid: 1, tagName: 'Tag'}],
        info: '测试测试测试测试测试测试测试测试测试测试',
        watchProcess: 1
      },
      {
        aid: 14986,
        name: "怪侠佐罗利 新系列",
        img: "https://dandanimg.acplay.net/anime/14986.jpg!client",
        tag: [{tid: 2, tagName: 'Tag'}, {tid: 1, tagName: 'Tag'}],
        info: '测试测试测试测试测试测试测试测试测试测试',
        watchProcess: 1
      }
    ]
  })
}
</script>

<style scoped>

  #banner-switcher-box {
  }

  #two-col-box {
  }

  #left-box {
    float: left;
    width: 800px;
  }

  #right-box {
    float: right;
    width: 400px;
  }

</style>
