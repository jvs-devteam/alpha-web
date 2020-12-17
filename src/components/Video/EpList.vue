<template>
  <div class="ep-list-box">
    <div class="title">选集({{epList.length}}) <label for="name"><input v-model="pageAutoPlay" @change="changeAutoPlay()" type="checkbox" name="name" id="name">自动播放</label></div>
    <ul>
      <li v-for="(ep, idx) in epList" :class="{'active': idx===nep}" @click="changeEp(idx)">
        <font-awesome-icon style="margin-right: 5px;" v-show="idx===nep" :icon="['fas', 'play']"></font-awesome-icon>
        <span><span class="tag">P{{idx}}</span>{{ep.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "EpList",
  props: {
    nep: {
      type: Number,
      default() {
        return 0
      }
    },
    epList: {
      type: Array,
      default() {
        return []
      }
    },
    autoPlay: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data: () => ({
    pageAutoPlay: false
  }),
  methods: {
    changeEp(idx) {
      this.$emit('changeEp', idx, this.autoPlay)
    },

    changeAutoPlay() {
      this.$emit('changeAutoPlay', this.pageAutoPlay)
    }
  },
  mounted() {
    this.pageAutoPlay = this.autoPlay
  }
}
</script>

<style scoped>
.ep-list-box {
  width: calc(100% - 5px);
  background-color: #f4f4f4;
  padding: 5px;
  min-height: 340px;
  border-radius: 5px;
}

.title {
  font-size: 18px;
  padding: 8px;
}

.ep-list-box ul {
  margin: 0;
  padding: 0;
}

.ep-list-box ul li {
  display: flex;
  align-items: center;
  margin: 4px 0;
  padding: 8px;
  list-style: none;
  border-radius: 5px;
  font-size: 14px;
  transition: background-color 0.3s;
}

.ep-list-box ul li:hover {
  background-color: #fff;
  cursor: pointer;
}

.active {
  color: #43c9ff;
  background-color: #fff;
}

.tag {
  margin-right: 5px;
}
</style>
