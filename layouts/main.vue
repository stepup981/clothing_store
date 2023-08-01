<script>
import MyLinks from '@/components/UI/MyLinks.vue';
import MyNavbar from '@/components/UI/MyNavbar.vue'

   export default {
      components: {
         MyLinks,
         MyNavbar
      }
   }
</script>

<template>
   <div>
      <header class="header">
         <MyLinks/>
         <h1 class="header__title">Ivanov Store</h1>
         <MyNavbar/>
      </header>
      <nuxt />
      <footer class="footer">
         <div class="footer__links">
            <h3 class="footer__title">Помощь покупателю</h3>
            <ul class="footer__list">
               <li>Магазин</li>
               <li>Доставка и оплата</li>
               <li>Условия возврата</li>
               <li>Таблица размеров</li>
            </ul>
         </div>
         <div class="footer__socialmedia">
            <h3 class="footer__title">Социальные сети</h3>
            <ul class="footer__list">
               <li>
                  <img src="../assets/icon/instagram.png" alt="Insagram">
                  <a href="https://vk.com/ivanovstore1">Instagram</a>
               </li>
               <li>
                  <img src="../assets/icon/telegram.png" alt="Insagram">
                  <a href="https://web.telegram.org/k/#@ivanovstore">Telegram</a>
               </li>
               <li>
                  <img src="../assets/icon/vk.png" alt="Insagram">
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
   display: grid;
   grid-template-columns: 0.1fr 1fr 0.2fr;
   padding: 20px 50px 20px 50px;
   align-items: center;
   text-align: center;

   &__title {
      font-family: 'Mogra', cursive;
      font-size: 64px;
      padding-right: 150px;
   }
}

.footer {
   display: flex;
   justify-content: space-around;
   padding: 20px 120px;

   &__title {
      font-size: 34px;
   }

   &__list {
      list-style-type: none;
      cursor: pointer;
   }
}

</style>