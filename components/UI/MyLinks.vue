<script>
   export default {
      
   }
</script>

<template>
   <ul class="links">
      <div class="links__dropdown">
         <li class="links__clothing">Одежда</li>
         <div class="links__dropdown-content">
            <a href="#">Толстовки</a>
            <a href="#">Футболки</a>
            <a href="#">Рубашки</a>
            <a href="#">Джинсы</a>
            <a href="#">Брюки</a>
            <a href="#">Шорты</a>
            <a href="#">Верхняя одежда</a>
         </div>
      </div>
      <div class="links__dropdown">
         <li class="links__shoes">Обувь</li>
         <div class="links__dropdown-content">
            <a href="#">Кроссовки</a>
            <a href="#">Кеды</a>
            <a href="#">Ботинки</a>
         </div>
      </div>
      <div class="links__dropdown">
         <li class="links__accessories">Аксесcуары</li>
         <div class="links__dropdown-content">
            <a href="#">Бейсболки</a>
            <a href="#">Панамы</a>
            <a href="#">Сумки</a>
            <a href="#">Рюкзаки</a>
            <a href="#">Бельё</a>
            <a href="#">Носки</a>
         </div>
      </div>
   </ul>
</template>

<style lang="scss">
.links {
   display: flex;
   justify-content: space-between;
   gap: 20px;
   list-style-type: none;
   cursor: pointer;

   &__clothing:hover {
      color: rgb(0, 0, 0);
      opacity: 0.5;
   }

   &__shoes:hover {
      color: rgb(0, 0, 0);
      opacity: 0.5;
   }

   &__accessories:hover {
      color: rgb(0, 0, 0);
      opacity: 0.5;
   }

   &__dropdown {
      position: relative;
      display: inline-block;
   }


   &__dropdown-content {
      display: none;
      position: absolute;
      background-color: #ffffff;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      border-radius: 15px;

      // отвечает за выпадающий список с ссылаками
   }

   &__dropdown-content a {
      color: black;
      padding: 12px 12px;
      text-decoration: none;
      display: block;
      transition: 1s;
      text-align: left;
      font-size: 18px;
      // отвечает за каждую ссылку
   }

   &__dropdown-content a:hover {
      transform: translateX(15px);
      
      // отвечает за каждую ссылку при наведении
   }

   &__dropdown:hover &__dropdown-content {
      display: block;
   }
}

.links li {
   background: url(../../assets/icon/dropdown.png) no-repeat left;
   padding-left: 15px;
}



</style>