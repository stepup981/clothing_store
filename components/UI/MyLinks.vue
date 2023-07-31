<script>
   export default {
      
   }
</script>

<template>
   <ul class="links">
      <li class="links__clothing">Одежда</li>
      <li class="links__shoes">Обувь</li>
      <li class="links__accessories">Аксессуары</li>
   </ul>
</template>

<style lang="scss">
.links {
   display: flex;
   justify-content: space-between;
   gap: 20px;
   list-style-type: none;
   cursor: pointer;
}

</style>