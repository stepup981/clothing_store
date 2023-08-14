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
    ],
  }),
}
</script>

<template>
  <div class="profile">
    <div class="profile__container">
      <h1 class="profile__title">Профиль</h1>
      <form class="profile__form" method="post">
        <div class="profile__fields">
          <div class="profile__field" v-for="item in profile" :key="item.id">
            <label class="profile__label" :for="item.name">
              {{ item.name }}
              <input class="profile__input" type="text" :id="item.name" />
            </label>
          </div>
        </div>
        <button class="profile__btn">Сохранить</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.profile {
  margin: 50px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  &__container {
    padding: 40px;
    background-color: #f7f7f7;
    border: 1px solid #e2e2e2;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
  }

  &__title {
    font-size: 34px;
    margin-bottom: 15px;
    text-align: center;
  }

  &__form {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  &__fields {
    margin-bottom: 30px;
  }

  &__field {
    margin-bottom: 20px;
  }

  &__input {
    font-size: 20px;
    font-weight: 300;
    width: 100%;
    padding: 5px 10px;
    border: 1px solid #d8d8d8;
    border-radius: 5px;
  }

  &__label {
    font-size: 20px;
    font-weight: 300;
    display: flex;
    flex-direction: column;
    gap: 10px;
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
    margin-left: auto;
    margin-right: auto;
    &:hover {
      background-color: #979797;
    }
  }
}
</style>
