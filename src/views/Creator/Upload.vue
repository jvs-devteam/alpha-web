<template>
<div class="upload">
  <creator-frame>
    <div class="upload-box">
      <div class="upload-title">上传视频</div>
      <div class="upload-form">
        <ul class="video-form">
          <li>
            <span class="form-title"><label for="name">视频名称</label></span>
            <input type="text" name="name" id="name" placeholder="在此处输入视频名称" autocomplete="off" v-model="videoForm.name">
          </li>
          <li>
            <span class="form-title"><label for="type">视频类型</label></span>
            <select name="type" id="type" v-model="videoForm.type">
              <option value="1" selected>视频</option>
              <option value="2">番剧</option>
              <option value="3">电影</option>
            </select>
          </li>
          <li>
            <span class="form-title"><label for="info">视频简介</label></span>
            <textarea name="info" id="info" placeholder="在此处输入简介" v-model="videoForm.info"></textarea>
          </li>
          <li>
            <span class="form-title"><label for="cover-file">封面图</label></span>
            <input type="file" name="file" id="cover-file" @change="changeCoverFile">
          </li>
        </ul>
        <div class="add-btn" @click="addNewEp">+</div>
        <ul class="ep-list-box">
          <li v-for="(ep, idx) in epList">
            <div class="form-item">
              <span class="form-title">分P名称</span>
              <input type="text" name="ep-name" placeholder="此处填写分P名称" v-model="epList[idx].name">
            </div>
            <div class="form-item">
              <span class="form-title">视频</span>
              <input type="file" name="epFile" class="epFile" :data-idx="ep.idx" @change="changeEpFile">
            </div>
            <div class="delete-btn" :data-idx="ep.idx" @click="deleteEpSet"><font-awesome-icon :icon="['fa', 'times']"></font-awesome-icon> </div>
          </li>
        </ul>
        <div class="submit" @click="submitFile">提交</div>
      </div>
    </div>
  </creator-frame>
</div>
</template>

<script>
import CreatorFrame from "@/components/Creator/CreatorFrame";
import {getBackend} from "@/network/VideoApi";
export default {
  name: "Uploader",
  components: {CreatorFrame},
  data: () => ({
    videoForm: {
      name: '',
      info: '',
      type: '1',
      file: null
    },
    epList: [
      {
        idx: 0,
        name: '',
        file: null
      }
    ],
    epListCount: 0,
    epUploadDone: 0
  }),
  methods: {
    changeEpFile($event) {
      this.epList[parseInt($event.target.dataset.idx)].file = $event.target.files[0]
    },
    changeCoverFile($event) {
      this.videoForm.file = $event.target.files[0]
    },
    addNewEp() {
      this.epList.push({
        idx: this.epList.length,
        name: '',
        file: null
      })
    },
    deleteEpSet($event) {
      if (this.epList.length === 1) {
        return
      }
      this.epList.splice(parseInt($event.target.dataset.idx),1)
    },
    submitFile() {
      let that = this;
      let videoData = new FormData();
      videoData.append('name', this.videoForm.name);
      if (this.videoForm.info !== '') videoData.append('info', this.videoForm.info);
      videoData.append('type', this.videoForm.type);
      videoData.append('file', this.videoForm.file)
      getBackend({url: '/video/insert', method: 'POST', data: videoData}).then(res => {
        if (res.data.code === 0) {
          let vid = res.data.data.vid;
          that.epListCount = that.epList.length
          that.epList.forEach(ep => {
            let form = new FormData();
            if (ep.name !== '') form.append('name', ep.name);
            form.append('file', ep.file);
            form.append('vid', vid);
            getBackend({url: '/ep/insert', method: 'POST', data: form}).then(res => {
              console.log(ep.idx + '上传完成!');
              that.epUploadDone++;
              if (that.epUploadDone === that.epListCount) {
                that.$router.push('/')
              }
            })
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.upload-box {
  background-color: #fff;
  border: #f2f2f2 solid 1px;
}

.upload-title {
  font-size: 22px;
  margin: 0 10px;
  padding: 10px 0;
  border-bottom: 1px solid #f2f2f2;
}

.video-form {
  list-style: none;
  padding: 10px 0;
  margin: 0 10px;
  border-bottom: 1px solid #f2f2f2;
}

.video-form li {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.form-title {
  width: 100px;
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

.add-btn {
  display: inline-block;
  margin: 10px;
  padding: 5px 10px ;
  border-radius: 5px;
  border: #fb7299 solid 1px;
}

.add-btn:hover {
  cursor: pointer;
}

.ep-list-box {
  margin: 0 10px;
}

.ep-list-box li {
  position: relative;
  border-bottom: 1px solid #f2f2f2;
}

.ep-list-box li:last-child {
  border-bottom: none;
}

.ep-list-box .form-item {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.delete-btn {
  position: absolute;
  font-size: 22px;
  right: 20px;
  top: 50%;
  transform: translateY(-11px);
}

.delete-btn:hover {
  cursor: pointer;
}

.ep-list-box .form-title {
  width: 100px;
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