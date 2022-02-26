<template>
  <div class="h-full">
    <div class="mt-16 w-full max-w-5xl mx-auto">
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
  middleware: "auth",
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
