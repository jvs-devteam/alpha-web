<template>
<div class="creator-swiper">
  <ul>
    <li v-for="swiperItem in swiperData">
      <img :src="swiperItem" alt="">
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "CreatorSwiper",
  props: {
    swiperData: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    timer: null
  })
}
</script>

<style scoped>

</style>