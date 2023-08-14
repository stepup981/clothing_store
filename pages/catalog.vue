<script>
import FilterCatalog from '@/components/catalog/FilterCatalog.vue'
import CardCatalog from '@/components/catalog/CardCatalog.vue'

export default {
  name: 'CatalogPage',
  layout: 'main',
  components: {
    FilterCatalog,
    CardCatalog,
  },
}
</script>

<template>
  <div>
    <FilterCatalog />
    <CardCatalog />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto+Mono:ital@0;1&display=swap');

* {
  margin: 0;
  padding: 0;
  font-family: 'Rubik', sans-serif;
  font-size: 24px;
}
</style>    

