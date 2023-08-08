<script>
export default {}
</script>

<template>
  <ul class="filter">
    <div class="filter__dropdown">
      <li class="filter__brand">Бренд</li>
      <div class="filter__dropdown-content">
        <a href="#">Adidas</a>
        <a href="#">Reebok</a>
        <a href="#">Converse</a>
        <a href="#">Nike</a>
         <!-- тут будет продолжение -->
      </div>
    </div>
    <div class="filter__dropdown">
      <li class="filter__category">Категория</li>
      <div class="filter__dropdown-content">
        <a href="#">Кроссовки</a>
        <a href="#">Брюки</a>
        <a href="#">Толстовки</a>
        <a href="#">Футболки</a>
         <!-- тут будет продолжение -->
      </div>
    </div>
    <div class="filter__dropdown">
      <li class="search__size">Размер</li>
      <div class="filter__dropdown-content">
        <a href="#">Adidas</a>
        <a href="#">Reebok</a>
        <a href="#">Converse</a>
        <a href="#">Nike</a>
         <!-- тут будет продолжение. надо подумать как реализовать размеры обуви и
        одежы и аксессуаров -->
      </div>
    </div>
    <div class="filter__dropdown">
      <li class="search__gender">Пол</li>
      <div class="filter__dropdown-content">
        <a href="#">Мужской</a>
        <a href="#">Женский</a>
      </div>
    </div>
  </ul>
</template>

<style lang="scss">
.filter {
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  cursor: pointer;
  padding: 10px 250px;
  font-size: 22px;
  font-weight: lighter;

  &__dropdown {
    position: relative;
    display: inline-block;
  }

  &__dropdown-content {
    display: none;
    position: absolute;
    background-color: #ffffff;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
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
    font-size: 16px;
    margin-bottom: -10px;
    // отвечает за каждую ссылку
  }

  &__dropdown-content a:hover {
    color: blue

    // отвечает за каждую ссылку при наведении
  }

  &__dropdown:hover &__dropdown-content {
    display: block;
  }
}

.filter li {
  background: url(../../assets/icon/dropdowncalatog.png) no-repeat right;
  padding-right: 25px;
}

</style>
