<template>
  <div class="edit-video">
    <creator-frame>
      <div class="edit-box">
        <div class="edit-title">
          <span>编辑视频</span>
        </div>
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
              <div class="btn" @click="saveVideoChange">保存修改</div>
            </div>
          </div>
          <div class="edit-title">
            <span>分P管理</span>
            <input type="checkbox" id="show-preview" style="width: 20px;" v-model="showPreview">
            <span style="font-size: 16px"><label for="show-preview">显示预览</label></span>
          </div>
          <div class="ep-form">
            <div class="add-ep btn">
              <font-awesome-icon :icon="['fa', 'plus']"></font-awesome-icon>
              <span @click="showAddArea = true">添加分P</span>
            </div>
            <div v-if="epList.length === 0" class="ep-null">这里空空的哦</div>
            <div class="ep-item" v-for="(ep, idx) in epList">
              <div class="form-item">
                <span class="form-title">EID</span>
                <span class="form-value"><input type="text" name="ep-name" :value="ep.eid" disabled></span>
              </div>
              <div class="form-item">
                <span class="form-title">分P名称</span>
                <span class="form-value"><input type="text" v-model="ep.name"></span>
              </div>
              <div class="form-item">
                <span class="form-title">视频</span>
                <span class="form-value video-box">
                  <video v-if="showPreview" class="pre-video" controls :src="$store.state.baseFileServer + ep.link"></video>
                  <input type="file" @change="changeSource(ep.eid, $event)">
                </span>
              </div>
              <div class="delete-video" @click="deleteVideo(ep.name, ep.eid, idx)">
                <font-awesome-icon :icon="['fa', 'times']"></font-awesome-icon>
              </div>
            </div>
            <div class="add-ep btn" v-if="epList.length !== 0" @click="saveEpSetting">提交修改</div>
          </div>
        </div>
      </div>
    </creator-frame>
    <div v-if="showAddArea" class="upload-ep-box">
      <upload-ep :vid="vid"
                 @upload-done="uploadDone"
                  @close="showAddArea = false"></upload-ep>
    </div>
    <div v-if="showAddArea" class="upload-ep-mask"></div>
  </div>
</template>

<script>
import CreatorFrame from "@/components/Creator/CreatorFrame";
import {getBackend} from "@/network/VideoApi";
import UploadEp from "@/components/Creator/Edit/UploadEp";
export default {
name: "Edit",
  components: {UploadEp, CreatorFrame},
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
      sourceData: {},
      epCount: 0,
      epSet: 0,
      showPreview: true,
      showAddArea: false
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    // 获取数据
    getData() {
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
          if (res.data.data.epList.length > 10) {
            this.showPreview = false;
          }
        }
      })
    },
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
    saveVideoChange() {
      let form = new FormData();
      form.append('name', this.videoForm.name);
      form.append('info', this.videoForm.info);
      form.append('type', this.videoForm.type);
      getBackend({url: `/video/update/${this.vid}`, method: 'PUT', data: form}).then(res => {
        if (res.data.code === 0) {
          alert('操作成功！')
        }else {
          alert('操作失败！')
          this.getData();
        }
      })
    },
    // 修改分P
    saveEpSetting() {
      this.epCount = this.epList.length;
      this.epList.forEach(ep => {
        let form = new FormData()
        form.append('name', ep.name);
        getBackend({url: `/ep/update/${ep.eid}`, method: 'PUT', data: form}).then(res => {
          if (res.data.code === 0) {
            this.epSet++;
          }else {
            alert(`分P[${ep.name}]操作失败!`);
            this.epCount--;
          }
          if (this.epSet === this.epCount) {
            alert('操作完成!')
            location.reload();
          }
        })
      })
    },
    // 换源，即刻操作
    changeSource(eid, $event) {
      if (confirm('您确定要上传新的视频么\n这将会覆盖以前的视频\n此操作无法恢复')) {
        let file = $event.target.files[0]
        let form = new FormData()
        form.append('file', file);
        getBackend({url: `/ep/updateSource/${eid}`, method: 'PUT', data: form}).then(res => {
          if (res.data.code === 0) {
            alert('操作成功');
            this.getData();
          }
        })
      }
    },
    // 新视频上传完成
    uploadDone() {
      this.showAddArea = false;
      this.getData();
    }
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

/*上传*/

.upload-ep-box {
  position: fixed;
  z-index: 101;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: on 0.5s;
}

.upload-ep-mask {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  animation: on 0.5s;
}

@keyframes on {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
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