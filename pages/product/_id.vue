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

        <ProductItemApproveButton
          :id="product.id"
          :approved="product.approved"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { GET_PREVIEW_PRODUCT } from "~/store/actions.type";
import { mapState } from "vuex";
import ProductItemApproveButton from "~/components/ProductItemApproveButton.vue";
export default {
  middleware: "reviewer",

  components: { ProductItemApproveButton },

  computed: {
    ...mapState({
      product: (state) => state.products.previewProduct,
      isLoading: (state) => state.products.isLoading,
    }),
  },

  mounted() {
    let productId = this.$route.params.id;
    this.$store.dispatch(`products/${GET_PREVIEW_PRODUCT}`, productId);
  },
};
</script>
