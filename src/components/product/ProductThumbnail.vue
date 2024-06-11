<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      height="300px"
      :src="product.image"
      contain
    ></v-img>

    <v-card-title>
      {{ product.title }}
    </v-card-title>

    <v-card-subtitle>
      ${{ product.price }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        text
        @click="$emit('viewDetails', product)"
      >
        Details
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        color="orange-lighten-2"
        text
        @click="$emit('addToCart', product)"
      >
        Add to cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ProductThumbnail",
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
