<script>
export default {

}
</script>

<template>
  <div class="banner">
    <div class="banner__first">Скидки</div>
    <div class="banner__second">Ограничено</div>
    <div class="banner__third">Новое</div>
  </div>
</template>

<style lang="scss">
.banner {
  text-align: center;
  cursor: pointer;

  &__first {
    padding: 300px 250px;
    font-size: 60px;
    font-weight: lighter;
    color: rgba(255, 255, 255, 0.301);
    background-image: url(../../assets/banner/sale.png);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: -50%;
    opacity: 0.95;


    &:hover {
      opacity: 1;
    }
  }

  &__second {
    padding: 300px 250px;
    font-size: 60px;
    font-weight: lighter;
    color: rgba(255, 255, 255, 0.301);
    background-image: url(../../assets/banner/limit.png);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: -20%;
    opacity: 0.95;


    &:hover {
      opacity: 1;
    }
  }

  &__third {
    padding: 300px 250px;
    font-size: 60px;
    font-weight: lighter;
    color: rgba(255, 255, 255, 0.301);
    background-image: url(../../assets/banner/new.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: -50%;
    opacity: 0.95;


    &:hover {
      opacity: 1;
    }
  }
}
</style>
