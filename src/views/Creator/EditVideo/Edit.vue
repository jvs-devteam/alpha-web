<template>
  <div class="edit-video">
    <creator-frame>
      <div class="edit-box">
        <div class="edit-title">编辑视频</div>
        <div class="edit-form">
          <div class="video-form">
            <div class="form-item">
              <span class="form-title">VID</span>
              <span class="form-value"><input type="text" v-model="videoForm.vid" disabled></span>
            </div>
            <div class="form-item">
              <span class="form-title">标题</span>
              <span class="form-value"><input type="text" v-model="videoForm.name"></span>
            </div>
            <div class="form-item">
              <span class="form-title">类型</span>
              <span class="form-value">
                <select name="type" id="type" v-model.number="videoForm.type">
                  <option value="0">视频</option>
                  <option value="1">番剧</option>
                  <option value="2">电影</option>
                </select>
              </span>
            </div>
            <div class="form-item">
              <span class="form-title">简介</span>
              <span class="form-value"><textarea name="info" id="info" v-model="videoForm.info"></textarea></span>
            </div>
            <div class="form-item">
              <span class="form-title">封面图</span>
              <span class="form-value cover-img-box">
                <img :src="videoForm.coverImg === undefined ? undefined : $store.state.baseFileServer + videoForm.coverImg"
                     alt="Cover Img"
                     class="cover-img">
                <img :src="videoForm.coverImg === undefined ? undefined : $store.state.baseFileServer + videoForm.coverImg"
                     alt="Cover Img"
                     class="cover-img-w">
<!--                后端未实现对应功能-->
<!--                <input type="file" name="cover" id="cover" @change="changeCoverFile" placeholder="更换封面图" disabled>-->
              </span>
            </div>
            <div class="form-item">
              <div class="btn">保存修改</div>
            </div>
          </div>
          <div class="edit-title">分P管理</div>
          <div class="ep-form">
            <div class="add-ep btn">
              <font-awesome-icon :icon="['fa', 'plus']"></font-awesome-icon>
              <span>添加分P</span>
            </div>
            <div v-if="epList.length === 0" class="ep-null">这里空空的哦</div>
            <div class="ep-item" v-for="(ep, idx) in epList">
              <div class="form-item">
                <span class="form-title">EID</span>
                <span class="form-value"><input type="text" name="ep-name" v-model="ep.eid" disabled></span>
              </div>
              <div class="form-item">
                <span class="form-title">分P名称</span>
                <span class="form-value"><input type="text" v-model="ep.name"></span>
              </div>
              <div class="form-item">
                <span class="form-title">视频</span>
                <span class="form-value video-box">
                  <video class="pre-video" controls :src="$store.state.baseFileServer + ep.link"></video>
                  <input type="file" @change="">
                </span>
              </div>
              <div class="delete-video" @click="deleteVideo(ep.name, ep.eid, idx)">
                <font-awesome-icon :icon="['fa', 'times']"></font-awesome-icon>
              </div>
            </div>
            <div class="add-ep btn" v-if="epList.length !== 0">提交修改</div>
          </div>
        </div>
      </div>
    </creator-frame>
  </div>
</template>

<script>
import CreatorFrame from "@/components/Creator/CreatorFrame";
import {getBackend} from "@/network/VideoApi";
export default {
name: "Edit",
  components: {CreatorFrame},
  data() {
    return {
      vid: this.$route.params.id,
      videoForm: {
        vid: 0,
        name: '',
        info: '',
        type: 0,
        coverImg: ''
      },
      epList: [],
      epFile: [],
      sourceData: {}
    }
  },
  mounted() {
    getBackend({url: `/video/get/${this.$route.params.id}`}).then(res => {
      if (res.data.code === 0) {
        let rd = res.data.data;
        this.videoForm.vid = rd.vid;
        this.videoForm.name = rd.name;
        this.videoForm.info = rd.info;
        this.videoForm.type = rd.type;
        this.videoForm.coverImg = rd.coverImg;
        this.epList = rd.epList;
        this.sourceData = rd;
      }
    })
  },
  methods: {
    // 删除视频，即刻操作！
    deleteVideo(name, eid, idx) {
      if (confirm(`你确定要删除分P[${name}]吗?\n这将会无法恢复！`)) {
        getBackend({url: `/ep/delete/${eid}`, method: 'DELETE'}).then(res => {
          if (res.data.code === 0) {
            alert('删除完成!');
            this.epList.splice(idx, 1)
          }
        })
      }
    },
    // 修改视频
  }
}
</script>

<style scoped>
.edit-box {
  background-color: #fff;
}

.edit-title {
  font-size: 22px;
  margin: 0 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f2f2f2;
}

/*视频表单*/

.video-form {
  margin: 10px 20px;
  border-bottom: #f2f2f2 solid 1px;
}

.form-item {
  margin: 20px 0;
  display: flex;
  align-items: center;
}

.form-title {
  width: 100px;
}

.cover-img-box {
  display: flex;
  align-items: center;
}

.cover-img {
  width: 120px;
  height: 150px;
  object-fit: cover;
  margin-right: 10px;
}

.cover-img-w {
  width: 160px;
  height: 90px;
  object-fit: cover;
  margin-right: 10px;
}

/*分P表单*/
.ep-item {
  position: relative;
  margin: 0 20px;
  padding: 10px 0;
}

.ep-null {
  color: #808080;
  padding: 10px;
  text-align: center;
  font-size: 18px;
}

.video-box {
  display: flex;
  flex-direction: column;
}

.pre-video {
  width: 480px;
  height: 270px;
}

.delete-video {
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 24px;
}

/*表单样式*/

.add-ep {
  margin: 10px 0 10px 20px;
}

.btn {
  display: inline-block;
  background-color: #fb7299;
  padding: 10px;
  border-radius: 5px;
  color: #ffffff;
}

.btn:hover {
  cursor: pointer;
}

select,
option {
  font-size: 14px;
  padding: 5px;
  border: 1px solid #c2c2c2;
  border-radius: 5px;
}

input {
  width: 400px;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #c2c2c2;
  border-radius: 5px;
}

input[type=file] {
  border: none;
}

textarea {
  width: 800px;
  height: 200px;
  font-size: 14px;
  border: 1px solid #c2c2c2;
  border-radius: 5px;
  padding: 5px;
}

.submit {
  display: inline-block;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #fb7299;
  color: #ffffff;
}

.submit:hover {
  cursor: pointer;
}
</style>