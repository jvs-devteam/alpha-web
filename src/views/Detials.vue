<template>
<div id="details-box">
  <div id="info-box-outer" class="box">
    <div id="info-box">
      <basic-info :animate-info="animateInfo"></basic-info>
    </div>
  </div>
  <div id="col-2-box" class="box">
    <div id="col-l">
      <div id="animate-eps-box">
        <animate-eps :vid="animateInfo.vid" :eps-data="animateInfo.epList"></animate-eps>
      </div>
      <div id="animate-comment-box">
        <animate-comment></animate-comment>
      </div>
    </div>
    <div id="col-r">
      <div id="animate-cvs-box">
        <animate-cvs :cvs-list="animateInfo.cvs"></animate-cvs>
      </div>
    </div>
    <div class="clear-fix"></div>
  </div>
</div>
</template>

<script>
import BasicInfo from "@/components/Detials/BasicInfo/BasicInfo";
import AnimateEps from "@/components/Detials/AnimateEps/AnimateEps";
import AnimateCvs from "@/components/Detials/AnimateCvs/AnimateCvs";
import AnimateComment from "@/components/Detials/AnimateComment/AnimateComment"
import {getVideoByVid} from "@/network/VideoApi";

export default {
name: "Detials",
  data() {
    return {
      nowPos: this.$route.params.id,
      animateInfo: {
        vid:0,
        name: "未查询到的数据",
        info: "-",
        gid: 1,
        type: 1,
        epList: [
          {
            eid: 2,
            name: "未查询到数据",
            link: "",
            vid: null
          }
        ]
      }
    }
  },
  mounted() {
    getVideoByVid(this.nowPos).then(res => {
      this.animateInfo=res.data.data
    })
  },
  methods: {

  },
  components: {
  BasicInfo,
    AnimateEps,
    AnimateCvs,
    AnimateComment
  }
}
</script>

<style scoped>
#details-box {
  background-color: #f2f2f2;
}

#info-box-outer {
  padding: 10px 0;
}

#info-box {
  position: relative;
  margin: 0 10px;
}

#col-l {
  float: left;
  width: 800px;
}

#col-r {
  float: left;
  width: 400px;
}

#animate-eps-box {
  padding: 10px;
}

#animate-cvs-box {
  padding: 10px;
}

#animate-comment-box {
  padding: 10px;
}

</style>
