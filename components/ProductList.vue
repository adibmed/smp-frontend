<template>
  <div class="w-full">
    <div
      v-if="products.length === 0"
      class="text-xl py-32 text-center text-gray-700"
    >
      List empty!
    </div>

    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full py-16"
    >
      <product-item
        v-for="product in products"
        :name="product.name"
        :description="product.description"
        :image="product.image"
        :price="Number(product.price)"
      />
    </div>
  </div>
</template>
<script>
import ProductItem from "./ProductItem.vue";
export default {
  components: { ProductItem },
  props: {
    products: {
      type: Array,
    },
  },
};
</script>
