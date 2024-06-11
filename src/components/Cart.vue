<template>
  <v-card>
    <v-card-title class="headline">Your Cart</v-card-title>
    <v-card-text>
      <v-table dense>
        <thead>
          <tr>
            <th>Title</th>
            <th class="text-right">Price</th>
            <th class="text-right">Quantity</th>
            <th class="text-right">Total</th>
            <th class="text-center">Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in itemsWithTotal" :key="index">
            <td>{{ item.title }}</td>
            <td class="text-right">{{ item.price }}</td>
            <td class="text-right center-items">
              <v-btn icon size="x-small" @click="decreaseQuantity(item)">
                <v-icon size="small">mdi-minus</v-icon>
              </v-btn>
              {{ item.quantity }}
              <v-btn icon size="x-small" @click="increaseQuantity(item)">
                <v-icon size="small">mdi-plus</v-icon>
              </v-btn>
            </td>
            <td class="text-right">${{ item.quantity * item.price }}</td>
            <td class="text-center">
              <v-btn icon small @click="removeFromCart(item)">
                <v-icon color="red">mdi-delete</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
        <tfoot v-show="total > 0">
          <tr>
            <td colspan="3" class="text-right">Total Items: {{ totalQuantity }}</td>
            <td class="text-right">Total: ${{ total }}</td>
            <td></td>
          </tr>
        </tfoot>
        <tfoot v-show="total === 0">
          <tr>
            <td colspan="5" class="text-center">Your shopping cart is empty</td>
          </tr>
        </tfoot>
      </v-table>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="$emit('closeDialog')">Close</v-btn>
      <v-btn color="green darken-1" text>Checkout</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import { REMOVE_FROM_CART, UPDATE_CART_ITEM_QUANTITY } from "@/store/types";
import store from "@/store";

export default {
  name: "CartDetails",
  computed: {
    ...mapState(["inCart"]),
    itemsWithTotal() {
      return this.inCart.map(item => {
        item.total = item.price * item.amount;
        return item;
      });
    },

    totalQuantity() {
      return this.inCart.reduce((acc, cur) => acc + cur.quantity, 0);
    },

    total() {
      return this.inCart.reduce((acc, cur) => acc + (cur.price * cur.quantity), 0);
    }
  },
  methods: {
    removeFromCart(product) {
      store.dispatch(REMOVE_FROM_CART, { id: product.id });
    },
    increaseQuantity(product) {
      store.dispatch(UPDATE_CART_ITEM_QUANTITY, { id: product.id, quantity: product.quantity + 1 });
    },
    decreaseQuantity(product) {
      if (product.quantity > 1) {
        store.dispatch(UPDATE_CART_ITEM_QUANTITY, { id: product.id, quantity: product.quantity - 1 });
      }
    }
  }
};
</script>

<style scoped>
.cart-counter {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ff9800;
  text-align: center;
  font-weight: bold;
  font-size: 0.8em;
  color: #fff;
  position: absolute;
  top: 0;
  right: -0.2em;
}
.center-items {
    display: flex;
    align-items: center;
    }
</style>
