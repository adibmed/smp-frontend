<template>
  <div class="min-h-screen">
    <div class="mt-32 w-full max-w-5xl mx-auto">
      <div class="text-3xl font-black text-indigo-700 text-center">
        Products List
      </div>
      <product-list :products="products" />
    </div>
  </div>
</template>

<script>
import ProductList from "~/components/ProductList.vue";
export default {
  name: "IndexPage",
  components: { ProductList },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProducts() {
      this.$axios.get("product").then((response) => {
        this.products = response.data;
      });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
