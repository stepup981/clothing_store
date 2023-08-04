<script>
import BannerIndex from '@/components/index/BannerIndex.vue'
import BrandsIndex from '@/components/index/BrandsIndex.vue';
// import GenderIndex from '../components/index/SexIndex.vue';

export default {
  name: 'IndexPage',
  layout: 'main',
  components: {
    BannerIndex,
    BrandsIndex,
    // GenderIndex
  }
}
</script>

<template>
  <div>
    <BannerIndex/>
    <BrandsIndex/>
    <!-- GenderIndex/> -->
  </div>
</template>



<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto+Mono:ital@0;1&display=swap');

* {
  margin: 0;
  padding: 0;
  font-family: 'Rubik', sans-serif;
  font-size: 24px;
}

</style>







