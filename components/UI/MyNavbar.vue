<script>
   export default {
      
   }
</script>

<template>
   <ul class="navbar">
      <li class="navbar__search">
         <img src="../../assets/icon/search.png" alt="search">
      </li>
      <li class="navbar__favorite">
         <img src="../../assets/icon/favorite.png" alt="favorite">
      </li>
      <li class="navbar__person">
         <img src="../../assets/icon/person.png" alt="person">
      </li>
      <li class="navbar__bag">
         <img src="../../assets/icon/bag.png" alt="bag">
      </li>
   </ul>
</template>


<style lang="scss">
.navbar {
   display: flex;
   justify-content: space-around;
   list-style-type: none;
   cursor: pointer;
}
</style>