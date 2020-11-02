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
        <animate-eps :eps-data="animateEps"></animate-eps>
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

export default {
name: "Detials",
  data() {
    return {
      nowPos: this.$route.params.id,
      animateInfo: {
        aid: 14537,
        name: "うまよん",
        img: "https://dandanimg.acplay.net/anime/14746.jpg!client",
        tag: [{tid: 2, tagName: 'Tag'}, {tid: 1, tagName: 'Tag'}],
        info: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
        watchProcess: 1,
        time: '20201210',
        state: "已完结",
        total: 13,
        isFav: true,
        cvs: [
          {cvId:1, cvAnimeName:'比企谷八幡', cvName: '江口拓也'},
          {cvId:1, cvAnimeName:'雪之下雪乃', cvName: '早见沙织'},
          {cvId:1, cvAnimeName:'由比滨结衣', cvName: '东山奈央'},
          {cvId:1, cvAnimeName:'一色伊吕波', cvName: '佐仓绫音'},
          {cvId:1, cvAnimeName:'比企谷小町', cvName: '悠木碧'},
          {cvId:1, cvAnimeName:'户冢彩加', cvName: '小松未可子'},
          {cvId:1, cvAnimeName:'叶山隼人', cvName: '近藤隆'},
          {cvId:1, cvAnimeName:'材木坐义辉', cvName: '桧山修之'},
          {cvId:1, cvAnimeName:'平冢静', cvName: '柚木凉香'},
          {cvId:1, cvAnimeName:'雪之下阳乃', cvName: '中原麻衣'},
          {cvId:1, cvAnimeName:'三浦优美子', cvName: '井上麻里奈'},
          {cvId:1, cvAnimeName:'海老名姬菜', cvName: '佐佐木望'},
          {cvId:1, cvAnimeName:'川崎沙希', cvName: '小清水亚美'},
          {cvId:1, cvAnimeName:'户部翔', cvName: '堀井茶渡'},
        ]
      },
      animateEps: {
        aid: 14537,
        total: 13,
        eps: [
          {
            epsId: 122,
            epsCount: 1,
            epsName: '第一集',
            epsInfo: '简介',
            epsImg: 'https://api.ixiaowai.cn/api/api.php?1'
          },
          {
            epsId: 123,
            epsCount: 2,
            epsName: '第二集',
            epsInfo: '简简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介介',
            epsImg: 'https://api.ixiaowai.cn/api/api.php?2'
          },
          {
            epsId: 124,
            epsCount: 3,
            epsName: '第三集',
            epsInfo: '简介',
            epsImg: 'https://api.ixiaowai.cn/api/api.php?3'
          },
          {
            epsId: 125,
            epsCount: 4,
            epsName: '第四集',
            epsInfo: '简介',
            epsImg: 'https://api.ixiaowai.cn/api/api.php?4'
          },
           {
            epsId: 125,
            epsCount: 5,
            epsName: '第五集',
            epsInfo: '简介',
            epsImg: null
          },
           {
            epsId: 125,
            epsCount: 6,
            epsName: '第六集',
            epsInfo: '简介',
            epsImg: 'https://api.ixiaowai.cn/api/api.php?5'
          },
        ]
      }
    }
  },
  mounted() {
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