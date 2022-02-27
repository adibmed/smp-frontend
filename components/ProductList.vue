<template>
  <div class="w-full">
    <div v-if="isLoading" class="text-xl text-center text-gray-700">
      Loading...
    </div>
    <div v-else>
      <div
        v-if="products.length === 0 && !isLoading"
        class="text-xl text-center text-gray-700"
      >
        List empty!
      </div>

      <div
        v-else
        class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full py-16"
      >
        <product-item
          v-for="product in products"
          :id="product.id"
          :name="product.name"
          :description="product.description"
          :image="product.image"
          :price="Number(product.price)"
          :approved="product.status === 'approved'"
        />
      </div>
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
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
