<template>
  <div class="creator-data">
    <creator-frame>
      <h1>敬请期待</h1>
    </creator-frame>
  </div>
</template>

<script>
import SideBar from "@/components/Creator/SideBar";
import CreaterHeader from "@/components/Common/CreatorHeader";
import Home from "@/views/Creator/Home"
import CreatorFrame from "@/components/Creator/CreatorFrame";
export default {
  name: "MyData",
  components: {CreatorFrame, CreaterHeader, SideBar, Home}
}
</script>

<style scoped>
.header-box {
  position: fixed;
  z-index: 10;
  width: 100vw;
}

main {
  display: flex;
}

.side-bar-area {
  position: fixed;
  width: 200px;
  padding-top: 60px;
  height: calc(100vh - 60px);
  background-color: #fff;
  border-right: 1px solid #f2f2f2;
}

.main-area {
  flex: 1;
  padding-top: 60px;
  margin-left: 200px;
}
</style>