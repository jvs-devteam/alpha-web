<template>
<div class="my-upload">
  <creator-frame>
    <div class="data">
      <div class="data-title">我的投稿</div>
      <div class="data-table">
        <table>
          <tr>
            <th class="vid-col-h">VID</th>
            <th class="name-col-h">标题</th>
            <th class="info-col-h">简介</th>
            <th class="type-col-h">类型</th>
            <th class="length-col-h">分P数量</th>
            <th class="edit-col-h">操作</th>
          </tr>
          <tr v-for="video in myVideoList">
            <td class="vid-col">{{video.vid}}</td>
            <td class="name-col">{{video.name}}</td>
            <td class="info-col">{{video.info}}</td>
            <td class="type-col">
              <span v-if="video.type === 0">视频</span>
              <span v-if="video.type === 1">番剧</span>
              <span v-if="video.type === 2">电影</span>
            </td>
            <td class="length-col">{{video.epList.length}}</td>
            <td class="edit-col">
              <span class="edit-item"><router-link :to="`/creator/my-upload/edit/${video.vid}`">编辑</router-link></span>
              <span class="edit-item" @click="deleteVideo(video.vid)">删除</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </creator-frame>
</div>
</template>

<script>
import CreatorFrame from "@/components/Creator/CreatorFrame";
import {getBackend} from "@/network/VideoApi";
export default {
  name: "MyVideo",
  components: {CreatorFrame},
  data: () => ({
    myVideoList: []
  }),
  mounted() {
    let timer = setInterval(() => {
      if (this.$store.state.loginUser !== 0) {
        clearInterval(timer)
        getBackend({url: `/video/get/uid/${this.$store.state.loginUser.uid}`}).then(res => {
          this.myVideoList = res.data.data
        })
      }
    }, 50)
  },
  methods: {
    deleteVideo(vid) {
      if (confirm('你确定要删除这个视频么?这将会无法恢复!')) {
        getBackend({url: `/video/delete/${vid}`, method: 'DELETE'}).then(res => {
          if (res.data.code === 0) {
            console.log('删除成功')
            this.myVideoList.forEach((video, idx) => {
              if (video.vid === vid) {
                this.myVideoList.splice(idx, 1);
                return
              }
            })
          }
        })
      }
    }
  }
}
</script>

<style scoped>

.data {
  background-color: #fff;
}

.data-title {
  font-size: 22px;
  margin: 0 10px;
  padding: 10px 0;
  border-bottom: 1px solid #f2f2f2;
}

.edit-item {
  display: inline-block;
  border: 1px solid #fb7299;
  padding: 3px 5px;
  border-radius: 3px;
  background-color: #fb7299;
  color: #ffffff;
  margin: 0 5px;
}

.edit-item:hover {
  cursor: pointer;
}

.edit-item a {
  color: #ffffff;
}

/*表各*/
.info-col, .info-col-h {
  display: inline-block;
  width: 200px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}

.edit-col,
.edit-col-h {
  width: 120px;
}

.name-col,
.info-col{
  text-align: left;
}

.name-col,
.name-col-h {
  width: 200px;
}

table {
  border-collapse:collapse;
  margin: 0 auto;
}

td,
th {
  display: inline-block;
  width: 60px;
  text-align: center;
  padding: 10px 20px;
  margin: 10px 0;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}

tr {
  border-bottom: 1px solid #f2f2f2;
}

tr:last-child {
  border-bottom: none;
}
</style>