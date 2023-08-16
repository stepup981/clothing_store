<script>
export default {
  data: () => ({
    card: [
      { id: 0, image: require('@/assets/card/test.png'), price: '8,999 руб.', name: 'Adidas Ozelia', size: '...', favorite: 'Добавить в избранное' },
      { id: 1, image: require('@/assets/card/test.png'), price: '8,999 руб.', name: 'Adidas Ozelia', size: '...', favorite: 'Добавить в избранное'  },
      { id: 2, image: require('@/assets/card/test.png'), price: '8,999 руб.', name: 'Adidas Ozelia', size: '...', favorite: 'Добавить в избранное'  },
      { id: 3, image: require('@/assets/card/test.png'), price: '8,999 руб.', name: 'Adidas Ozelia', size: '...', favorite: 'Добавить в избранное'  },
      { id: 4, image: require('@/assets/card/test.png'), price: '8,999 руб.', name: 'Adidas Ozelia', size: '...', favorite: 'Добавить в избранное'  },
      { id: 5, image: require('@/assets/card/test.png'), price: '8,999 руб.', name: 'Adidas Ozelia', size: '...', favorite: 'Добавить в избранное'  },
      { id: 6, image: require('@/assets/card/test.png'), price: '8,999 руб.', name: 'Adidas Ozelia', size: '...', favorite: 'Добавить в избранное'  },
      { id: 7, image: require('@/assets/card/test.png'), price: '8,999 руб.', name: 'Adidas Ozelia', size: '...', favorite: 'Добавить в избранное'  },
    ],
  }),
}
</script>

<template>
  <div class="card">
    <div 
      v-for="item in card" 
      :key="item.id" 
      class="card__item"
    >
      <img 
        class="card__img" 
        :src="item.image" 
        alt="image" 
      />
      <p class="card__price">{{ item.price }}</p>
      <p class="card__name">{{ item.name }}</p>
      <p class="card__size">{{ item.size }}</p>
      <button class="card__btn">{{ item.favorite }}</button>
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
    padding: 10px 30px;
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
