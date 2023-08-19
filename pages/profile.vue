<script>
import MainProfile from '@/components/profile/MainProfile.vue'
import OrderProfile from '@/components/profile/OrderProfile.vue'
import FavoriteProfile from '@/components/profile/FavoriteProfile.vue'
import BasketProfile from '@/components/profile/BasketProfile.vue'

export default {
  name: 'ProfilePage',
  layout: 'main',
  components: {
    MainProfile,
    OrderProfile,
    FavoriteProfile,
    BasketProfile,
  },
  data: () => ({
    tabs: [
      { id: 0, name: 'Профиль', componentName: 'MainProfile' },
      { id: 1, name: 'Заказы', componentName: 'OrderProfile' },
      { id: 2, name: 'Избранное', componentName: 'FavoriteProfile' },
      { id: 3, name: 'Корзина', componentName: 'BasketProfile' },
    ],
    myComponentName: 'MainProfile',
  }),
  methods: {
    switchComponent(componentName) {
      this.myComponentName = componentName;
      this.$router.push({ path: '/profile', query: { component: componentName } });
    },
  },
  mounted() {
    this.myComponentName = this.$route.query.component;
  },
  watch: {
    '$route.query.component'(newComponent) {
      this.myComponentName = newComponent;
    },
  },
}
</script>

<template>
  <div>
    <div class="navigation">
      <div class="navigation__flex" v-for="tab in tabs" :key="tab.id">
        <div
          class="navigation__flex-block"
          :class="{ active: tab.componentName === myComponentName }"
          @click="switchComponent(tab.componentName)"
        >
          {{ tab.name }}
        </div>
      </div>
    </div>
    <component :is="myComponentName"></component>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto+Mono:ital@0;1&display=swap');

* {
  margin: 0;
  padding: 0;
  font-family: 'Rubik', sans-serif;
}

.navigation {
  display: flex;
  justify-content: center;
  padding: 20px;
  gap: 50px;
  font-weight: 300;

  &__flex-block {
    box-shadow: 0 0 1px 0;
    padding: 10px 30px;
    background-color: rgb(2, 2, 2, 0.1);
    font-size: 18px;
    transition: background-color 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #979797;
    }

    &.active {
      background-color: #2196f3;
      color: white;
    }
  }
}
</style>
