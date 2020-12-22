<template>
  <div class="video-info-box">
    <img class="video-cover-img"
         :src="videoInfo.coverImg === undefined ? undefined : $store.state.baseFileServer + videoInfo.coverImg"
         alt="">
    <div class="info-box">
      <div class="name">{{videoInfo.name}}</div>
      <div class="fav-data">
        <span class="mr-10">0播放</span>
        <span class="mr-10">0弹幕</span>
        <span class="mr-10">0评论</span>
      </div>
      <div class="info">{{videoInfo.info}}</div>
    </div>

    <div class="fav" v-if="$store.state.loginUser !== null">
      <div class="fav-btn"><font-awesome-icon :icon="['fa', 'heart']"></font-awesome-icon> 追番</div>
      <div class="cancel-fav-btn" v-show="false">取消追番</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoInfo",
  props: {
    videoInfo: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped>
  .video-info-box {
    margin-top: 10px;
    position: relative;
    height: 160px;
  }

  .mr-10 {
    margin-right: 10px;
  }

  .video-cover-img {
    position: absolute;
    width: 120px;
    height: 160px;
    object-fit: cover;
  }

  .info-box {
    margin-left: 140px;
  }

  .name {
    font-size: 22px;
  }

  .fav-data {
    margin-top: 10px;
    font-size: 14px;
    color: #a2a2a2;
  }

  .info {
    margin-top: 5px;
    font-size: 14px;
  }

  .fav {
    position: absolute;
    right: 5px;
    top: 5px;
  }

  .fav-btn {
    background-color: #fb7299;
    padding: 5px 10px;
    font-size: 14px;
    color: #ffffff;
    border-radius: 5px;
  }

  .cancel-fav-btn {
    background-color: #c0c0c0;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    color: #ffffff;
  }

  .fav-btn:hover,
  .cancel-fav-btn:hover {
    cursor: pointer;
  }
</style>