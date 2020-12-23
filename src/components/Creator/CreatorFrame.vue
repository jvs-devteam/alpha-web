<template>
  <div class="creator-frame">
    <div class="header-box">
      <creater-header></creater-header>
    </div>
    <main>
      <div class="side-bar-area">
        <side-bar></side-bar>
      </div>
      <div class="main-area">
        <div class="main-area-inner">
          <slot></slot>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import SideBar from "@/components/Creator/SideBar";
import CreaterHeader from "@/components/Common/CreatorHeader";
export default {
  name: "CreatorFrame",
  components: {CreaterHeader, SideBar}
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

.main-area-inner {
  width: 1000px;
  padding: 20px 0;
  margin: 0 auto;
}
</style>