<template>
  <v-toolbar app>
    <v-toolbar-title>
      <router-link to="/" style="cursor: pointer">
        {{ appTitle }}
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-btn flat @click="dialog = true">
      Cart
      <v-icon color="darken-2" size="large">
        mdi-cart-outline
      </v-icon>
      <span v-if="inCart.length" class="cart-counter">{{ inCart.length }}</span>
    </v-btn>
  </v-toolbar>

  <v-dialog v-model="dialog" persistent>
        <cart-details @closeDialog="goToCart" />
  </v-dialog>

  <v-content class="content">
    <router-view></router-view>
  </v-content>
</template>

<script>
import { mapState } from 'vuex';
import CartDetails from '@/components/Cart.vue';

export default {
  name: "NavBar",
  components: {
    CartDetails
  },
  data() {
    return {
      appTitle: 'Carrefour',
      dialog: false
    };
  },
  computed: {
    ...mapState(['inCart']),
  },
  methods: {
    goToCart() {
      this.dialog = !this.dialog;
    }
  }
};
</script>

<style scoped>
.fixed-navbar {
    position: fixed;
    margin-bottom: 1em;
    z-index: 10
}
.cart-counter {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: black;
  text-align: center;
  font-weight: bold;
  font-size: 0.8em;
  color: #fff;
  position: absolute;
  top: 0;
  right: -0.2em;
}
</style>
