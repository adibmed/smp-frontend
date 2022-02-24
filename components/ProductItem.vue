<template>
  <div class="w-full px-4 lg:px-0">
    <div class="p-3 bg-white rounded shadow-md">
      <div class="relative w-full mb-3 h-32 lg:mb-0">
        <img
          :src="image"
          alt="Just a flower"
          class="object-fill w-full h-full rounded"
        />
      </div>
      <div class="flex-auto p-2 justify-evenly">
        <div class="flex flex-wrap">
          <div class="flex items-center justify-between w-full min-w-0">
            <h2 class="mr-auto text-lg cursor-pointer hover:text-gray-900">
              {{ name }}
            </h2>
          </div>
          <div class="text-sm text-gray-500">
            {{ description.substring(0, 50) }}
          </div>
        </div>
        <div class="mt-1 text-xl font-semibold">${{ price }}</div>
        <button
          :disabled="approved"
          @click="approveProduct"
          v-if="isAuthenticatedUserReviewer"
          class="p-1 text-sm rounded my-1 text-white"
          :class="
            approved
              ? 'bg-green-300 cursor-not-allowed'
              : 'bg-indigo-500 hover:bg-indigo-700'
          "
        >
          {{ approved ? "Approved" : "Approve" }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    approved: { type: Boolean, required: false },
  },
  computed: {
    isAuthenticatedUserReviewer() {
      return this.$auth.user.role_id == 2;
    },
  },

  methods: {
    approveProduct() {
      this.$axios.post(`product/${this.id}/approve`).then(() => {
        this.$router.push("/approved");
      });
    },
  },
};
</script>
