<script>
export default {
  data: () => ({
    activeDropdown: null,
    filters: [
      {
        name: 'Бренд',
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
        name: 'Категория',
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
        name: 'Размер',
        items: [
          { id: 0, name: 'XS' },
          { id: 1, name: 'S' },
          { id: 2, name: 'M' },
          { id: 3, name: 'L' },
          { id: 4, name: 'XL' },
        ],
      },
      {
        name: 'Пол',
        items: [
          { id: 0, name: 'Мужское' },
          { id: 1, name: 'Женское' },
        ],
      },
    ],
  }),
  methods: {
    toggleDropdown(index) {
      this.activeDropdown = this.activeDropdown === index ? null : index;
    },
  },
}
</script>

<template>
  <div class="filter">
    <div
      class="filter__dropdown"
      v-for="(filter, index) in filters"
      :key="filter.name"
    >
      <div
        @click="toggleDropdown(index)"
        class="filter__dropdown-block"
      >
        {{ filter.name }}
      </div>
      <div
        v-show="activeDropdown === index"
        class="filter__dropdown-content"
      >
        <label
          class="filter__label"
          v-for="item in filter.items"
          :key="item.id"
          :for="item.name"
        >
          {{ item.name }}
          <input 
            class="filter__checkbox" 
            type="checkbox" 
            :id="item.name" 
            v-model="item.checked" 
          />
          <span class="checkmark"></span>
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
  gap: 40px;
  list-style-type: none;
  padding: 20px;
  font-size: 22px;
  font-weight: lighter;

  &__dropdown {
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    cursor: pointer;
  }

  &__dropdown-block {
    position: relative;
    box-shadow: 0 0 1px 0;
    padding: 2px 10px;
    background: url(../../assets/icon/dropdowncalatog.png) no-repeat right;
    padding-right: 25px;
    background-color: rgba(0, 0, 0, 0.06);
    font-size: 18px;
  }

  &__dropdown-content {
    padding: 10px 10px 10px 10px;
    top: 110%;
    bottom: 0;
    right: 0;
    left: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 5px;
    overflow-y: scroll;
    height: 190px;
    min-width: 150px;
    box-shadow: 0 0 1px 0;
    background-color: rgba(0, 0, 0, 0.06);

    &::-webkit-scrollbar {
      width: 5px; 
    }
    
    &::-webkit-scrollbar-track {
      background-color: #f0f0f0; 
      border-radius: 8px; 
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: #2196F3; 
      border-radius: 8px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background-color: #979797; 
    }

    &::-webkit-scrollbar-thumb:active {
      background-color: #2196F3;
    }
  }

  &__label {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    font-weight: lighter;
    font-size: 18px;
    cursor: pointer;
    user-select: none;
    text-align: center;
  }
  
  &__checkbox {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  
  .checkmark {
    position: absolute;
    top: 10%;
    left: 0;
    height: 27px;
    width: 27px;
    background-color: #eee;
    border-radius: 4px;
  }

  &__label:hover .checkmark {
    background-color: #ccc;
  }
  
  &__checkbox:checked ~ .checkmark {
    background-color: #2196F3;
  }
  
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  &__checkbox:checked ~ .checkmark:after {
    display: block;
  }
  
  &__label .checkmark:after {
    left: 9px;
    top: 5px;
    width: 7px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

  &__btn {
    margin: 10px 0px 10px 0px;
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    background-color: #eee;
    transition: background-color 0.3s;
  }

  &__btn:hover {
    background-color: #ccc;
  }

  &__btn:active {
    background-color: #2196F3;
    color: white;
  }
}
</style>
