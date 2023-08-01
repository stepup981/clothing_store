<script>
export default {
   data: () => ({
      isSearchActive: true
   }),
   methods: {
      toggleSearchState () {
         this.isSearchActive = !this.isSearchActive;
      }
   }
}
</script>

<template>
   <ul class="navbar">
      <li class="navbar__search">
         <img 
            class="navbar__img" 
            src="../../assets/icon/search.png" 
            alt="search"
            @click="toggleSearchState"  
            v-if="isSearchActive">
         <input v-else class="navbar__input" type="text">
      </li>
      <li class="navbar__favorite">
         <img class="navbar__img" src="../../assets/icon/favorite.png" alt="favorite">
      </li>
      <li class="navbar__person">
         <img class="navbar__img" src="../../assets/icon/person.png" alt="person">
      </li>
      <li class="navbar__bag">
         <img class="navbar__img" src="../../assets/icon/bag.png" alt="bag">
      </li>
   </ul>
</template>


<style lang="scss">
.navbar {
   display: flex;
   justify-content: space-between;
   list-style-type: none;
   cursor: pointer;

   &__input {
      
   }

   &__img {
      transition: 1s;

      &:hover {
         transform: scale(1.2);
      }
   }
   

}
</style>