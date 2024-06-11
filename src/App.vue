<template>
  <v-app>
    <v-main>
      <ProductList/>
    </v-main>
  </v-app>
</template>

<script>
import ProductList from './views/ProductList.vue'

export default {
  name: 'App',

  components: {
    ProductList,
  },

  data: () => ({
    //
  }),
}
</script>
