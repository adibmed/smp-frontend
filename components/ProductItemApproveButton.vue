<template>
  <button
    :disabled="approved"
    @click="approveProduct"
    @mouseover="isHovering = true"
    @mouseout="isHovering = false"
    v-if="isAuthenticatedUserReviewer"
    class="p-2 text-sm rounded text-white z-40"
    :class="
      approved
        ? 'bg-gray-500 cursor-not-allowed'
        : 'bg-indigo-500 hover:bg-indigo-700'
    "
  >
    {{ buttonText }}
  </button>
</template>

<script>
import { UPDATE_PRODUCT } from "~/store/actions.type";
export default {
  props: {
    id: { type: Number, required: true },
    approved: { type: Boolean, required: false },
  },

  data() {
    return {
      isHovering: false,
    };
  },

  computed: {
    isAuthenticatedUserReviewer() {
      return this.$auth.user.role == "reviewer";
    },

    buttonText() {
      if (this.isHovering) return "Approve 👍";
      return this.approved ? "Approved ✅" : "Pending 🔄";
    },
  },

  methods: {
    approveProduct() {
      this.$store.dispatch(`products/${UPDATE_PRODUCT}`, {
        id: this.id,
        approved: true,
      });
      this.$router.push({ name: "index" });
    },
  },
};
</script>
