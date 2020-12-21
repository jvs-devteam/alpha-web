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
import {getAllVideo, getFileServer} from "@/network/VideoApi";

export default {
  name: 'Home',
  components: {
    BannerSwitcher,
    BangumiShin,
    ListModule,
    MyFav
  },
  data: () => ({
    baseFileServer: '',
    newlyData: [],
    serialData: [],
    endedData: []
  }),
  mounted() {
    getAllVideo().then(res => {
      this.newlyData = res.data.data;
    }).catch(err => {
      console.log(err)
    })
  }
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
