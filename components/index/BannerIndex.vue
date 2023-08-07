<script>
export default {
  methods: {
    prevSlide() {
      const slider = this.$refs.slider
      slider.scrollBy({ left: -1800, behavior: 'smooth' })
    },
    nextSlide() {
      const slider = this.$refs.slider
      slider.scrollBy({ left: 1800, behavior: 'smooth' })
    },
  },
}
</script>

<template>
  <div class="banner">
    <div class="banner__slider" ref="slider">
      <div class="banner__first">Скидки</div>
      <div class="banner__second">Ограничено</div>
      <div class="banner__third">Новое</div>
    </div>
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

  &__slider {
    display: flex;
    justify-content: space-between;
    scroll-snap-type: x mandatory;
    overflow-x: hidden;
  }

  &__first,
  &__second,
  &__third {
    padding: 350px 750px;
    font-size: 60px;
    font-weight: lighter;
    color: rgba(255, 255, 255, 0.493);
    background-repeat: no-repeat;
    background-size: cover;
  }

  &__first {
    background-image: url(../../assets/banner/test1.jpg);
  }

  &__second {
    background-image: url(../../assets/banner/test2.jpg);
  }

  &__third {
    background-image: url(../../assets/banner/test3.jpg);
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
