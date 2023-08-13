<script>
export default {
  data: () => ({
    profile: [
      { id: 0, name: 'Имя' },
      { id: 1, name: 'Фамилия' },
      { id: 2, name: 'Отчество' },
      { id: 3, name: 'Дата рождения' },
      { id: 4, name: 'Мобильный телефон' },
      { id: 5, name: 'Email' },
    ]
  }),
}
</script>

<template>
  <div class="profile">
    <h1 class="profile__title">Профиль</h1>
    <form class="profile__form" action="" method="post">
      <div class="profile__info" v-for="item in profile" :key="item.id">
        <label class="profile__label" :for="item.name"> {{ item.name }}
          <input class="profile__input" type="text" :id="item.name">
        </label>
      </div>
      <button class="profile__btn">Сохранить</button>
    </form>
  </div>
</template>

<style lang="scss">
.profile {
  margin: 50px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  &__title {
    font-size: 34px;
  }

  &__form {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  &__info {}

  &__input {}

  &__label {
    font-size: 20px;
    font-weight: 300;
    display: flex;
    align-items: center;
    gap: 30px;
  }
}
</style>