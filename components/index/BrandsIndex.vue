<script>
export default {
  data() {
    return {
      brandsIcon: [
        { id: 0, icon: 'adidas', path: require('@/assets/brands/adidas.png')},
        { id: 1, icon: 'calvinklein', path: require('@/assets/brands/calvinklein.png')},
        { id: 2, icon: 'carhartt', path: require('@/assets/brands/carhartt.png')},
        { id: 3, icon: 'dickies', path: require('@/assets/brands/dickies.png')},
        { id: 4, icon: 'eastpack', path: require('@/assets/brands/eastpack.png')},
        { id: 5, icon: 'ellesse', path: require('@/assets/brands/ellesse.png')},
        { id: 6, icon: 'jordan', path: require('@/assets/brands/jordan.png')},
        { id: 7, icon: 'levis', path: require('@/assets/brands/levis.png')},
        { id: 8, icon: 'lyle', path: require('@/assets/brands/lyle.png')},
        { id: 9, icon: 'newbalance', path: require('@/assets/brands/newbalance.png')},
        { id: 10, icon: 'puma', path: require('@/assets/brands/puma.png')},
        { id: 11, icon: 'ralph', path: require('@/assets/brands/ralph.png')},
        { id: 12, icon: 'reebok', path: require('@/assets/brands/reebok.png')},
        { id: 13, icon: 'champion', path: require('@/assets/brands/champion.png')},
        { id: 14, icon: 'nike', path: require('@/assets/brands/nike.png')},
      ],
    }
  },
  methods: {
    scrollLeft() {
      const slider = this.$refs.slider
      slider.scrollBy({ left: -200, behavior: 'smooth' });
    },
    scrollRight() {
      const slider = this.$refs.slider
      slider.scrollBy({ left: 200, behavior: 'smooth' })
    },
  },
}
</script>

<template>
  <div class="brands">
    <div class="brands__slider" ref="slider">
      <div class="brands__icon" v-for="item in brandsIcon" :key="item.id">
        <img :src="item.path" :alt="item.icon" />
      </div>
    </div>
    <div class="brands__navigator">
      <button class="brands__arrow-left" @click="scrollLeft"></button>
      <button class="brands__arrow-right" @click="scrollRight"></button>
    </div>
  </div>
</template>

<style lang="scss">
.brands {
  padding: 15px 50px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    bottom: -15%;
    width: 90px;
    background: linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0.096));
    z-index: 5;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
    rotate: (180deg);
  }

  &__slider {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-height: 80%;
    gap: 50px;
    scroll-snap-type: x mandatory;
    overflow-x: hidden;
    padding-left: 10px;
  }

  &__icon {
    scroll-snap-align: center;
    cursor: pointer;
  }

  &__navigator {
    position: absolute;
    display: flex;
    justify-content: space-between;
    z-index: 6;
    padding: 0px 15px 0px 10px;
    top: 105%;
    bottom: 0;
    left: 0;
    right: 0;
  }

  &__arrow-left {
    padding: 18px 18px;
    width: 20px;
    height: 20px;
    border: 1px black solid;
    border-radius: 50%;
    background-image: url(../../assets/brands/arrow-left.png);
    background-color: rgba(250, 250, 250, 0.527);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60%;
    opacity: 0.25;
    cursor: pointer;

    &:hover {
      transform: scale(1.3);
      box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
        rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
        rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
      opacity: 1;
    }
  }

  &__arrow-right {
    padding: 18px 18px;
    width: 20px;
    height: 20px;
    border: 1px black solid;
    border-radius: 50%;
    background-image: url(../../assets/brands/arrow_right.png);
    background-color: rgba(250, 250, 250, 0.527);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60%;
    opacity: 0.25;
    cursor: pointer;

    &:hover {
      transform: scale(1.3);
      box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
        rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
        rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
      opacity: 1;
    }
  }
}

</style>
