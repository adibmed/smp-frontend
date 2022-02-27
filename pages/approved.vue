<template>
  <div class="h-full">
    <div class="mt-32 w-full max-w-5xl mx-auto">
      <div class="text-3xl font-black text-indigo-700 text-center">
        Approved Products List
      </div>
      <product-list :isLoading="isLoading" :products="products" />
    </div>
  </div>
</template>

<script>
import ProductList from "~/components/ProductList.vue";
import { mapState } from "vuex";
import { GET_APPROVED_PRODUCTS } from "~/store/actions.type";

export default {
  name: "IndexPage",

  components: { ProductList },

  middleware: "auth",

  computed: {
    ...mapState({
      products: (state) => state.products.approvedProducts,
      isLoading: (state) => state.products.isLoading,
    }),
  },

  mounted() {
    this.$store.dispatch(`products/${GET_APPROVED_PRODUCTS}`);
  },
};
</script>
