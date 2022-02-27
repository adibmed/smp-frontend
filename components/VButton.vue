<template>
  <component
    :is="is"
    :class="componentClass"
    :href="href"
    :type="computedType"
    :to="to"
    :disabled="disabled"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null,
    },

    to: {
      type: String,
      default: null,
    },

    disabled: Boolean,
  },

  computed: {
    is() {
      if (this.href) {
        return "a";
      }
      if (this.to) {
        return "nuxt-link";
      }
      return "button";
    },

    componentClass() {
      return "text-sm capatilize px-4 py-2 mr-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-indigo-700 cursor-pointer";
    },

    activeClass() {
      return "bg-indigo-100";
    },

    computedType() {
      if (this.is === "button") {
        return this.type ?? "button";
      }
    },
  },
};
</script>
