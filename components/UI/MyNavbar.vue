<script>
export default {
  data: () => ({
    isSearchActive: false, //
  }),
  methods: {
    toggleSearchState() {
      this.isSearchActive = !this.isSearchActive

      if (this.isSearchActive) {
        window.addEventListener('click', this.handleWindowClick)
      } else {
        window.removeEventListener('click', this.handleWindowClick)
      }
    },
    handleWindowClick(event) {
      if (!event.target.closest('.navbar__img')) {
        this.isSearchActive = false
        window.removeEventListener('click', this.handleWindowClick)
      }
    },
  },
}
</script>

<template>
  <div>
    <ul class="navbar">
      <li class="navbar__search">
        <transition name="fade">
          <img 
            class="navbar__img" 
            src="../../assets/icon/search.png" 
            alt="search" 
            @click="toggleSearchState"
            v-if="!isSearchActive" 
          />
        </transition>
        <transition name="slide">
          <input 
            @click.stop v-if="isSearchActive" 
            class="navbar__input" 
            type="text"
            placeholder="Search or click outside" 
          />
        </transition>
      </li>
      <li class="navbar__favorite">
        <img 
          class="navbar__img" 
          :class="{ 'navbar__img-moved': isSearchActive }" 
          src="../../assets/icon/favorite.png"
          alt="favorite" 
        />
      </li>
      <li class="navbar__person">
        <img 
          class="navbar__img" 
          :class="{ 'navbar__img-moved': isSearchActive }" 
          src="../../assets/icon/person.png"
          alt="person" 
        />
      </li>
      <li class="navbar__bag">
        <img 
          class="navbar__img" 
          :class="{ 'navbar__img-moved': isSearchActive }" 
          src="../../assets/icon/bag.png"
          alt="bag" 
        />
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.navbar {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  list-style-type: none;
  cursor: pointer;
  position: relative;
  gap: 10px;
  padding-top: 20px;

  &__input {
    position: absolute;
    top: 10%;
    right: 100%;
    z-index: 1;
    box-sizing: border-box;
    font-size: 14px;
    vertical-align: baseline;
    font-weight: 400;
    line-height: 1.29;
    letter-spacing: 0.16px;
    border-radius: 5px;
    outline: 2px solid transparent;
    outline-offset: -5px;
    width: 100%;
    height: 50px;
    border: none;
    border-bottom: 1px solid #8d8d8d;
    background-color: #ffffff;
    padding: 0 16px;
    color: #161616;
  }

  &__img {
    transition: 1s;

    &:hover {
      transform: scale(1.2);
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
  opacity: 0;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 1;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(10%);
}

.navbar__img-moved {
  transform: translateX(-100%);
}

.navbar__search {
  flex-grow: 1;
}

.navbar__favorite,
.navbar__person,
.navbar__bag {
  transition: transform 0.4s;
}
</style>


