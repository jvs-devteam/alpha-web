<template>
  <div class="recommend-box">
    <h1 class="recommend-title">相似推荐</h1>
    <ul>
      <li v-for="video in recommendList">
        <router-link :to="`/details/${video.vid}`">
          <img class="cover-img"
               :src="video.coverImg === undefined ? undefined : $store.state.baseFileServer + video.coverImg"
               alt="cover img">
          <div class="info-box">
            <div class="name">{{video.name}}</div>
            <div class="info">{{video.info}}</div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {getBackend} from "@/network/VideoApi";

export default {
name: "Recommend",
  data: () => ({
    recommendList: []
  }),
  mounted() {
    getBackend({url: 'video/getAll'}).then(res => {
      if (res.data.code === 0) {
        this.recommendList = res.data.data
      }
    })
  }
}
</script>

<style scoped>
  .recommend-box ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .recommend-box ul li {
    position: relative;
    height: 80px;
    margin: 15px 0;
  }

  .recommend-box a:visited,
  .recommend-box a:link {
    color: #000000;
  }

  .recommend-title {
    font-size: 20px;
    font-weight: normal;
  }

  .cover-img {
    position: absolute;
    width: 140px;
    height: 80px;
    object-fit: cover;
  }

  .info-box {
    margin-left: 150px;
  }

  .name {
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .info {
    font-size: 14px;
    color: #c2c2c2;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
</style>