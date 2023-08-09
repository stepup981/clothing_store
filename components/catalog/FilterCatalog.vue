<script>
export default {
  data: () => ({
    isBrandDropdownVisible: false,
    filters: [
      {
        name: 'brands',
        items: [
          { id: 0, name: 'Adidas', checked: false },
          { id: 1, name: 'Nike', checked: false },
          { id: 2, name: 'Puma', checked: false },
          { id: 3, name: 'Reebok', checked: false },
          { id: 4, name: 'Carhartt', checked: false },
          { id: 5, name: 'Dickies', checked: false },
          { id: 6, name: 'Lyle&Scott', checked: false },
          { id: 7, name: 'Calvin Klein', checked: false },
          { id: 8, name: 'New Balance', checked: false },
          { id: 9, name: 'Ralph Lauren', checked: false },
          { id: 10, name: 'Champion', checked: false },
        ],
      },
      {
        name: 'category',
        items: [
          { id: 0, name: 'Толстовки', checked: false },
          { id: 1, name: 'Футболки', checked: false },
          { id: 2, name: 'Рубашки', checked: false },
          { id: 3, name: 'Джинсы', checked: false },
          { id: 4, name: 'Брюки', checked: false },
          { id: 5, name: 'Шорты', checked: false },
          { id: 6, name: 'Верхняя одежда', checked: false },
          { id: 7, name: 'Кроссовки', checked: false },
          { id: 8, name: 'Кеды', checked: false },
          { id: 9, name: 'Ботинки', checked: false },
          { id: 10, name: 'Бейсболки', checked: false },
          { id: 11, name: 'Панамы', checked: false },
          { id: 12, name: 'Сумки', checked: false },
          { id: 13, name: 'Рюкзаки', checked: false },
          { id: 14, name: 'Белье', checked: false },
          { id: 15, name: 'Носки', checked: false },
        ],
      },
      {
        name: 'size',
        items: [
          { id: 0, name: 'XS' },
          { id: 1, name: 'S' },
          { id: 2, name: 'M' },
          { id: 3, name: 'L' },
          { id: 4, name: 'XL' },
        ],
      },
      {
        name: 'gender',
        items: [
          { id: 0, name: 'Мужское' },
          { id: 1, name: 'Женское' },
        ],
      },
    ],
  }),
  methods: {
    toggleBrandDropdown() {
      this.isBrandDropdownVisible = !this.isBrandDropdownVisible
    },
    
  },
}
</script>

<template>
  <div class="filter">
    <div class="filter__dropdown">
      <div
        @click="toggleBrandDropdown"
        class="filter__brand"
        v-for="filter in filters"
        :key="filter.name"
      >
        {{ filter.name }}
      </div>
      <div v-show="isBrandDropdownVisible" class="filter__dropdown-content">
        <label
          class="filter__label"
          v-for="item in filter.items"
          :key="item.id"
          :for="item.name"
        >
          {{ item.name }}
          <input type="checkbox" 
            :id="item.name" 
            v-model="item.checked" 
          />
        </label>
        <button class="filter__btn">Применить</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.filter {
  display: flex;
  justify-content: center;
  gap: 30px;
  list-style-type: none;
  padding: 20px;
  font-size: 22px;
  font-weight: lighter;

  &__dropdown {
    position: relative;
    display: inline-block;
    box-shadow: 0 0 1px 0;
    padding: 5px 10px;
    cursor: pointer;
  }

  &__dropdown-content {
    padding: 10px 0px 0px 10px;
    top: 110%;
    bottom: 0;
    right: 0;
    left: 0;
    position: absolute;
    min-width: 180px;
    box-shadow: 0 0 1px 0;
    display: flex;
    flex-direction: column;
    scroll-snap-type: y mandatory;
    height: 145px;
    overflow-y: auto;

    // отвечает за выпадающий список с ссылаками
  }

  &__label {
    font-size: 18px;
    font-weight: lighter;
  }

  &__btn {
    margin: 10px 10px;
    font-size: 18px;
  }
}

.filter li {
  background: url(../../assets/icon/dropdowncalatog.png) no-repeat right;
  padding-right: 25px;
}
</style>
