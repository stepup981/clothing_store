<script>
  export default {
    
  }
</script>

<template>
  <div class="brands">
    <div class="brands__slider">
      <ul class="brands__name">
        <li class="brands__subname">
          <img class="brands__img" src="../../assets/brands/nike.png" alt="">
        </li>
        <li class="brands__subname">
          <img class="brands__img" src="../../assets/brands/adidas.png" alt="">
        </li>
        <li class="brands__subname">
          <img class="brands__img" src="../../assets/brands/newbalance.png" alt="">
        </li>
        <li class="brands__subname">
          <img class="brands__img" src="../../assets/brands/levis.png" alt="">
        </li>
        <li class="brands__subname">
          <img class="brands__img" src="../../assets/brands/jordan.png" alt="">
        </li>
        <li class="brands__subname">
          <img class="brands__img" src="../../assets/brands/dickies.png" alt="">
        </li>
        <li class="brands__subname">
          <img class="brands__img" src="../../assets/brands/carhartt.png" alt="">
        </li>
        <li class="brands__subname">
          <img class="brands__img" src="../../assets/brands/puma.png" alt="">
        </li>
        <li class="brands__subname">
          <img class="brands__img" src="../../assets/brands/lyle.png" alt="">
        </li>
        <li class="brands__subname">
          <img class="brands__img" src="../../assets/brands/calvinklein.png" alt="">
        </li>
        <li class="brands__subname">
          <img class="brands__img" src="../../assets/brands/ellesse.png" alt="">
        </li>
        <li class="brands__subname">
          <img class="brands__img" src="../../assets/brands/ralph.png" alt="">
        </li>
        <li class="brands__subname">
          <img class="brands__img" src="../../assets/brands/eastpack.png" alt="">
        </li>
        <ul class="brands__btn">
          <li class="brands__arrow">
            <button class="brands__arrow-right"></button>
          </li>
          <li class="brands__arrow">
            <button class="brands__arrow-left"></button>
          </li>
        </ul>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.brands {
  padding: 10px 50px;

  &__slider {

  }

  &__name {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__subname {
    max-width: 100%;
    max-height: 100%;
  }

  &__img {

  }

  &__btn {
    list-style: none;
  }

  &__arrow {

  }

  &__arrow-right {

  }

  &__arrow-left {

  }

}

</style>