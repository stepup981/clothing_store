<script>
export default {
  data: () => ({
    basket: [
      {
        id: 0,
        image: require('@/assets/card/test.png'),
        price: '8,999 руб.',
        name: 'Adidas Ozelia',
        size: '43',
        color: 'Grey',
      },
      {
        id: 1,
        image: require('@/assets/card/test.png'),
        price: '8,999 руб.',
        name: 'Adidas Ozelia',
        size: '43',
        color: 'Grey',
      },
      {
        id: 2,
        image: require('@/assets/card/test.png'),
        price: '8,999 руб.',
        name: 'Adidas Ozelia',
        size: '43',
        color: 'Grey',
      },
    ],
  }),
}
</script>

<template>
  <div class="basket">
    <h1 class="basket__title">Ваш заказ</h1>
    <div class="basket__grid">
      <div class="basket__container">
        <div class="basket__item" v-for="item in basket" :key="item.id">
          <div class="basket__img-container">
            <img class="basket__img" :src="item.image" alt="" />
            <p class="basket__price">{{ item.price }}</p>
          </div>
          <div class="basket__description">
            <p class="basket__name">{{ item.name }}</p>
            <p class="basket__size">Размер: {{ item.size }}</p>
            <p class="basket__color">Цвет: {{ item.color }}</p>
            <p class="basket__items">Количество</p>
          </div>
        </div>
      </div>
      <div class="basket__pay">
        <p class="basket__text">Стоимость заказа: 18.999 руб</p>
        <button class="basket__btn">Оформить заказ</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.basket {
  margin: 25px;
  font-weight: 300;

  &__title {
    font-size: 34px;
    text-align: center;
  }

  &__grid {
    display: grid;
    grid-template-columns: 3fr 2fr;
    margin-top: 25px;
  }

  &__container {
    display: flex;
    flex-direction: column;
  }

  &__item {
    display: flex;
    justify-content: center;
  }

  &__img-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__img {
    max-width: 80%;
    max-height: 80%;
  }

  &__price {
    font-size: 16px;
  }

  &__name {
    font-size: 20px;
  }

  &__size,
  &__color {
    font-size: 20px;
    opacity: 0.6;
  }

  &__items {
    font-size: 20px;
    margin-top: 25px;
    background-image: url(../../assets/icon/delete.png);
    background-repeat: no-repeat;
    background-position: left;
    padding-left: 50px;
  }

  &__pay {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  &__text {
    font-size: 22px;
  }

  &__btn {
    font-size: 20px;
    font-weight: 300;
    background-color: #2196f3;
    color: #fff;
    padding: 10px 40px;
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

