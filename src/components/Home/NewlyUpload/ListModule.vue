<template>
  <div id="newly-main">
    <h2 id="newly-title">{{ title }}</h2>
    <ul id="newly-list">
      <li class="newly-item" v-for="item in newlyList">
        <a :href="'/details/' + item.aid">
          <img class="newly-item-img" :src="item.img" alt="">
          <div class="newly-item-title" :title="item.name">{{ item.name }}</div>
          <div class="newly-item-tag-box">
            <ul class="newly-item-tag-list">
              <li class="newly-item-tag-item" v-for="tagItem in item.tag"><a
                  :href="'/tag/' + tagItem.tid">{{ tagItem.tagName }}</a></li>
              <li class="clear-fix"></li>
            </ul>
          </div>
          <div class="newly-item-info">{{ item.info }}</div>
        </a>
      </li>
      <li class="clear-fix"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NewlyUpload",
  props: {
    title: String,
    list: Array
  },
  data() {
    return {
      newlyList: []
    }
  },
  mounted() {
    this.newlyList = this.list
  }
}
</script>

<style scoped>
a:link,
a:visited {
  color: #000000;
}

ul {
  padding: 0;
  margin: 0;
}

ul li {
  padding: 0;
  margin: 0;
  list-style: none;
}

.newly-item > div {
  margin: 5px 0;
}

#newly-title {
  margin: 0 15px;
}

#newly-main {
  margin: 10px;
}

#newly-list {
  padding: 5px;
  margin: 0;
}

.newly-item {
  float: left;
  margin: 20px 10px;
  width: calc(25% - 20px);
}

.newly-item-img {
  width: 180px;
  height: 260px;
  background-image: url("../../../assets/404img/img404.png");
}

.newly-item-title {
  font-size: 20px;
  font-weight: bold;
  white-space: nowrap;
  text-overflow:ellipsis;
  overflow:hidden;
}

.newly-item-tag-item {
  float: left;
  margin: 2px;
  font-size: 12px;
  padding: 4px 8px;
  background-color: skyblue;
  border-radius: 8px;
}

.newly-item-info {
  color: gray;
  font-size: 14px;
}
</style>