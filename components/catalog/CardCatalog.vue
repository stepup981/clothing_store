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
      <p class="card__favorite">{{ item.favorite }}</p>
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

    &:hover {
      transition: 0.5s;
      color: #2196f3;
    }
  }

  &__price {
    font-size: 18px;
    font-weight: lighter;
  }

  &__img {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
