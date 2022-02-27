<template>
  <div class="h-full">
    <div class="mt-16 w-full max-w-5xl mx-auto">
      <div class="text-3xl font-black text-indigo-700 text-center">
        Products List
      </div>
      <product-list :isLoading="isLoading" :products="products" />
    </div>
  </div>
</template>

<script>
import ProductList from "~/components/ProductList.vue";
import { mapState } from "vuex";
import { GET_PRODUCTS } from "~/store/actions.type";

export default {
  name: "IndexPage",

  components: { ProductList },

  middleware: "auth",

  computed: {
    ...mapState({
      products: (state) => state.products.products,
      isLoading: (state) => state.products.isLoading,
    }),
  },

  beforeCreate() {
    this.$store.dispatch(`products/${GET_PRODUCTS}`);
  },
};
</script>
