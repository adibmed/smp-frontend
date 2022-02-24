<template>
  <div class="h-full">
    <div class="mt-32 w-full max-w-5xl mx-auto">
      <div class="text-3xl font-black text-indigo-700 text-center">
        Approved Products List
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
  middleware: "reviewer",
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProducts() {
      this.$axios.get("product/approved").then((response) => {
        this.products = response.data;
      });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
