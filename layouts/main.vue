<script>
import MyLinks from '@/components/UI/MyLinks.vue'
import MyNavbar from '@/components/UI/MyNavbar.vue'

export default {
  components: {
    MyLinks,
    MyNavbar,
  },
  methods: {
    goToHome() {
      this.$router.push('/')
    },
  },
}
</script>

<template>
  <div class="sticky">
    <header class="header">
      <MyLinks />
      <h1 @click="goToHome" class="header__title">Clothing Store</h1>
      <MyNavbar />
    </header>
    <nuxt />
    <footer class="footer">
      <div class="footer__links">
        <h3 class="footer__title">Помощь покупателю</h3>
        <ul class="footer__list">
          <nuxt-link to="/store">
            <li>Магазин</li>
          </nuxt-link>
          <nuxt-link to="/delivery">
            <li>Доставка и оплата</li>
          </nuxt-link>
          <nuxt-link to="/return">
            <li>Условия возврата</li>
          </nuxt-link>
        </ul>
      </div>
      <div class="footer__socialmedia">
        <h3 class="footer__title">Социальные сети</h3>
        <ul class="footer__list">
          <li>
            <img src="../assets/icon/instagram.png" alt="Insagram" />
            <a href="Ivanov.store">Instagram</a>
          </li>
          <li>
            <img src="../assets/icon/telegram.png" alt="Insagram" />
            <a href="https://web.telegram.org/k/#@ivanovstore">Telegram</a>
          </li>
          <li>
            <img src="../assets/icon/vk.png" alt="Insagram" />
            <a href="https://vk.com/ivanovstore1">Vkontakte</a>
          </li>
        </ul>
      </div>
      <div class="footer__contacts">
        <h3 class="footer__title">Контакты</h3>
        <ul class="footer__list">
          <li>8-800-555-35-35</li>
          <li>Email: lifestyle@gmail.com</li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
.header {
  display: flex;
  justify-content: center;
  gap: 300px;
  padding: 10px 50px 10px 50px;
  align-items: center;
  text-align: center;
  position: sticky;
  background-color: white;
  z-index: 10;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  &__title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 64px;
    cursor: pointer;
    margin-right: 120px;
  }
}

.footer {
  display: flex;
  justify-content: space-around;
  padding: 20px 80px;
  border-top: 1px solid black;
  margin-bottom: 20px;

  &__title {
    font-size: 28px;
  }

  &__list {
    list-style-type: none;
    cursor: pointer;
  }

  &__list li {
    font-size: 20px;
  }

  &__list a {
    font-size: 20px;
  }

  &__list li:hover {
    transform: scale(0.9);
  }
}

a {
  text-decoration: none;
  color: black;
}
</style>
