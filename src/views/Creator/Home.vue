<template>
<div class="creator-home">
  <creator-frame>
    <h1>等待开发</h1>
  </creator-frame>
</div>
</template>

<script>
import SideBar from "@/components/Creator/SideBar";
import CreaterHeader from "@/components/Common/CreatorHeader";
import CreatorFrame from "@/components/Creator/CreatorFrame";
export default {
  name: "Home",
  components: {CreatorFrame, CreaterHeader, SideBar}
}
</script>

<style scoped>
</style>