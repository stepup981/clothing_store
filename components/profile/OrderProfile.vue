<script>
export default {
  data: () => ({
    orders: [
      {
        id: 0,
        number: '№9-21-25',
        price: '8,999 руб',
        status: 'В обработке',
        date: '29.07.2023',
      },
      {
        id: 1,
        number: '№9-20-01',
        price: '8,999 руб',
        status: 'В пути',
        date: '25.07.2023',
      },
    ],
    history: [
      {
        id: 2,
        number: '№8-05-14',
        price: '8,999 руб',
        status: 'Выдан',
        date: '15.05.2023',
      },
    ],
  }),
}
</script>

<template>
  <div class="order">
    <div class="order__container">
      <div class="order__table">
        <h1 class="order__title">Активные заказы</h1>
        <div class="order__row" v-for="order in orders" :key="order.id">
          <div class="left-side">
            <a href="" class="order__number">{{ order.number }}</a>
            <div class="order__price">{{ order.price }}</div>
            <div class="order__status">{{ order.status }}</div>
          </div>
          <div class="order__date">{{ order.date }}</div>
        </div>
      </div>
      <div class="order__table">
        <h1 class="order__title">История заказов</h1>
        <div class="order__row" v-for="item in history" :key="item.id">
          <div class="left-side">
            <a href="" class="order__number">{{ item.number }}</a>
            <div class="order__price">{{ item.price }}</div>
            <div class="order__status">{{ item.status }}</div>
          </div>
          <div class="order__date">{{ item.date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.order {
  margin: 50px;
  max-width: 1050px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
  
  &__container {
    padding: 20px;
    border-radius: 10px;
  }
  &__table {
    margin-bottom: 30px;
  }
  &__title {
    font-size: 34px;
    margin-bottom: 25px;
  }
  &__row {
    display: flex;
    justify-content: space-between;
    margin: 45px 0px;
    border-bottom: 1px solid #ccc;
    
    .left-side {
      display: flex;
      flex: 1;
      gap: 50px;
    }
  }
  &__number {
    text-decoration: none;
    color: #2196f3;
    font-size: 20px;
  }

  &__price,
  &__status,
  &__date {
    font-size: 20px;
  }
}
</style>
