<template>
  <div class="upload-ep">
    <div @click="close" class="close-box">
      <font-awesome-icon class="close-btn" :icon="['fa', 'times']"></font-awesome-icon>
    </div>
    <div class="upload-ep-title">向视频中添加Ep</div>
    <div class="ep-form">
      <div class="form-item">
        <span class="form-title">分P标题</span>
        <span class="form-value"><input type="text" v-model="title" placeholder="分P名称"></span>
      </div>
      <div class="form-item">
        <span class="form-title">视频</span>
        <span class="form-value"><input type="file" @change="changeFile"></span>
      </div>
      <div class="form-item">
        <button class="btn" @click="upload">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
import {getBackend} from "@/network/VideoApi";

export default {
name: "UploadEp",
  props: {
    vid: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
     title: '',
     file: ''
    }
  },
  methods: {
    changeFile ($event) {
      this.file = $event.target.files[0];
    },
    upload() {
      let form = new FormData()
      form.append('vid', this.vid);
      if (this.title !== '') form.append('name', this.title);
      form.append('file', this.file);
      getBackend({url: `/ep/insert`, method: 'POST', data: form}).then(res => {
        if (res.data.code === 0) {
          this.$emit('upload-done')
        }
      })
    },
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.upload-ep {
  width: 600px;
  height: 600px;
  background-color: #fff;
  border-radius: 5px;
  border: #fb7299 1px solid;
  box-shadow: rgba(0,0,0,0.3) 1px 1px 5px;
}

.close-btn {
  position: fixed;
  right: 10px;
  top: 10px;
  font-size: 22px;
}

.close-btn:hover {
  cursor: pointer;
}

.upload-ep-title {
  margin: 0 20px;
  padding: 10px 0;
  font-size: 22px;
  border-bottom: 1px solid #f2f2f2;
}

.ep-form {
  margin: 10px 20px;
}

.form-item {
  display: flex;
  align-items: center;
  margin: 20px 0;
}

.form-title {
  width: 100px;
}
</style>