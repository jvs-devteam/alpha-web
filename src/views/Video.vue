<template>
  <div id="video-box">
    <div class="left-box">
      <video ref="video"
             id="video"
             controls
             @loadedmetadata="doAutoPlay()"
             @ended="playNext()"
             :src="$store.state.baseFileServer + videoInfo.epList[ep].link"></video>
      <anime-info :video-info="videoInfo"></anime-info>
    </div>
    <div class="right-box">
      <ep-list v-show="videoInfo.epList.length>1"
               @changeEp="changeEp"
               @changeAutoPlay="changAutoPlayState"
               :nep="ep"
               :auto-play="autoPlay"
               :ep-list="videoInfo.epList"></ep-list>
      <recommend></recommend>
    </div>
  </div>
</template>

<script>
import {getVideoByVid} from "@/network/VideoApi";
import EpList from "@/components/Video/EpList";
import Recommend from "@/components/Video/Recommend";
import AnimeInfo from "@/components/Video/AnimeInfo";

export default {
  name: "Video",
  data() {
    return {
      vid: this.$route.params.id,
      ep: 0,
      autoPlay: false,
      videoInfo: {}
    }
  },
  components: {
    AnimeInfo,
    Recommend,
    EpList
  },
  mounted: function () {
    if (this.$route.query.ep !== undefined) {
      this.ep = parseInt(this.$route.query.ep || undefined)
    }
    getVideoByVid(this.vid).then(res => {
      this.videoInfo = res.data.data
    })
  },
  methods: {
    changeEp(idx) {
      this.ep = idx
    },

    doAutoPlay() {
      if (this.autoPlay) {
        this.$refs.video.play()
      }
    },

    changAutoPlayState(state) {
      this.autoPlay = state
    },

    playNext() {
      if (this.autoPlay) {
        if (this.ep + 1 < this.videoInfo.epList.length) {
          this.ep++
        }
      }
    }
  }
}
</script>

<style scoped>
#video-box {
  width: 1200px;
  margin: 0 auto;
  align-items: flex-start;
  display: flex;
}

.left-box {
  width: 780px;
  padding: 10px;
}

.right-box {
  width: 380px;
  padding: 10px;
}

#video {
  width: 780px;
  height: 438px;
  object-fit: contain;
}
</style>
