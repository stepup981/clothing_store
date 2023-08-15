<script>
export default {
  data: () => ({
    favorites: [
      {
        id: 0,
        image: require('@/assets/card/test.png'),
        price: '8,999 руб.',
        name: 'Adidas Ozelia',
        size: '...',
        basket: 'Добавить в корзину',
      },
      {
        id: 1,
        image: require('@/assets/card/test.png'),
        price: '8,999 руб.',
        name: 'Adidas Ozelia',
        size: '...',
        basket: 'Добавить в корзину',
      },
      {
        id: 2,
        image: require('@/assets/card/test.png'),
        price: '8,999 руб.',
        name: 'Adidas Ozelia',
        size: '...',
        basket: 'Добавить в корзину',
      },
    ],
  }),
}
</script>

<template>
  <div class="favorite">
    <h1 class="favorite__title">Избранное</h1>
    <div class="favorite__grid">
      <div
        class="favorite__card"
        v-for="favorite in favorites"
        :key="favorite.id"
      >
        <img class="favorite__img" :src="favorite.image" alt="img" />
        <p class="favorite__price">{{ favorite.price }}</p>
        <p class="favorite__name">{{ favorite.name }}</p>
        <p class="favorite__size">{{ favorite.size }}</p>
        <button class="favorite__btn">{{ favorite.basket }}</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.favorite {
  margin: 25px 25px;

  &__title {
    font-size: 34px;
    text-align: center;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  &__card {
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

  &__btn {
    font-size: 20px;
    font-weight: 300;
    background-color: #2196f3;
    color: #fff;
    padding: 5px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s;
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
