<script>
import MyLinks from '@/components/UI/MyLinks.vue';
import MyNavbar from '@/components/UI/MyNavbar.vue'

   export default {
      components: {
         MyLinks,
         MyNavbar
      }
   }
</script>

<template>
   <div>
      <div class="header">
         <MyLinks/>
         <h1 class="header__title">Ivanov Store</h1>
         <MyNavbar/>
      </div>
      <nuxt />
      <div>Тут Будет футер </div>
   </div>
</template>


<style lang="scss">
.header {
   display: grid;
   grid-template-columns: 0.1fr 1fr 0.2fr;
   padding: 20px 50px 0px 50px;
   align-items: center;
   text-align: center;

   &__title {
      font-family: 'Mogra', cursive;
      font-size: 64px;
   }
}

</style>