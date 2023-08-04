<script>
export default {
  data() {
    return {
      currentSlideIndex: 0,
      totalSlides: 3,
    }
  },
  methods: {
    prevSlide() {
      this.currentSlideIndex = (this.currentSlideIndex - 1 + this.totalSlides) % this.totalSlides
    },
    nextSlide() {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.totalSlides
    },
  },
}
</script>

<template>
  <div class="banner">
    <div class="banner__first" v-show="currentSlideIndex === 0">Скидки</div>
    <div class="banner__second" v-show="currentSlideIndex === 1">Ограничено</div>
    <div class="banner__third" v-show="currentSlideIndex === 2">Новое</div>
    <div class="banner__navigator">
      <div class="banner__arrow-left" @click="prevSlide"></div>
      <div class="banner__arrow-right" @click="nextSlide"></div>
    </div>
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
    color: rgba(255, 255, 255, 0.493);
    background-image: url(../../assets/banner/sale.png);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: -50%;
    transition: transform 0.5s ease-in-out;
  }

  &__second {
    padding: 300px 250px;
    font-size: 60px;
    font-weight: lighter;
    color: rgba(255, 255, 255, 0.493);
    background-image: url(../../assets/banner/limit.png);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: -20%;
    transition: transform 0.5s ease-in-out;
  }

  &__third {
    padding: 300px 250px;
    font-size: 60px;
    font-weight: lighter;
    color: rgba(255, 255, 255, 0.493);
    background-image: url(../../assets/banner/new.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: -150%;
    transition: transform 0.5s ease-in-out;
  }

  &__navigator {
    position: absolute;
    top: 50%;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    padding: 0px 15px 0px 10px;
  }

  &__arrow-left {
    border-top: 4px solid #ffffff;
    border-right: 4px solid #ffffff;
    width: 24px;
    height: 24px;
    transition: 0.3s;
    transform: rotate(-135deg);
    opacity: 0.4;

    &:hover {
      opacity: 1;
      width: 28px;
      height: 28px;
    }
  }

  &__arrow-right {
    border-top: 4px solid #ffffff;
    border-right: 4px solid #ffffff;
    width: 24px;
    height: 24px;
    transition: 0.3s;
    transform: rotate(45deg);
    opacity: 0.4;

    &:hover {
      opacity: 1;
      width: 28px;
      height: 28px;
    }
  }
}
</style>
