<template>
  <div class="flex justify-center h-screen">
    <div
      v-if="isLoading"
      class="bg-white max-w-2xl w-full h-72 mx-auto rounded border mt-16 flex items-center justify-center"
    >
      Loading...
    </div>

    <div
      v-if="!isLoading && product"
      class="bg-white max-w-2xl w-full h-72 mx-auto rounded-md border mt-16 flex"
    >
      <img class="h-full rounded-l-md w-1/2" :src="product.image" />
      <div class="p-4 flex flex-col">
        <div class="flex-1">
          <div class="text-xl font-bold text-gray-800">{{ product.name }}</div>
          <p class="text-sm text-gray-700 py-2">
            {{ product.description }}
          </p>
          <div class="text-2xl font-bold text-gray-800 py-2">
            {{ product.price }}$
          </div>
        </div>

        <button
          @click="approveProduct"
          class="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Approve
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { GET_PREVIEW_PRODUCT, UPDATE_PRODUCT } from "~/store/actions.type";
import { mapState } from "vuex";
export default {
  // middleware: "reviewer",

  computed: {
    ...mapState({
      product: (state) => state.products.previewProduct,
      isLoading: (state) => state.products.isLoading,
    }),
  },

  methods: {
    approveProduct() {
      const product = { ...this.product };
      product.approved = true;
      this.$store.dispatch(`products/${UPDATE_PRODUCT}`, product);
    },
  },

  mounted() {
    let productId = this.$route.params.id;
    this.$store.dispatch(`products/${GET_PREVIEW_PRODUCT}`, productId);
  },
};
</script>
