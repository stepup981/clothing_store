<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([ 'getProducts'])
  },
  async mounted() {
    await this.$store.dispatch('fetchProductsData');
  },
}
</script>

<template>
  <div class="card">
    <div 
    v-for="(item, index) in getProducts" 
      :key="index"  
      class="card__item"
    >
      <!-- <img 
        class="card__img" 
        :src="item.url" 
        alt="image" 
      /> -->
      <p class="card__price">{{ item.price }}</p>
      <p class="card__name">{{ item.name }}</p>
      <!-- <p class="card__size">{{ item.size }}</p>
      <button class="card__btn">{{ item.favorite }}</button> -->
    </div>
  </div>
</template>

<style lang="scss">
.card {
  padding: 100px 50px 50px 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  &__item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }

  &__price {
    font-size: 18px;
    font-weight: lighter;
  }

  &__img {
    max-width: 100%;
    max-height: 100%;
  }

  &__btn {
    font-size: 20px;
    font-weight: 300;
    background-color: #2196f3;
    color: #fff;
    padding: 0px 40px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s;
    text-align: center;
    display: block;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
