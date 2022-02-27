<template>
  <component
    :is="is"
    :class="componentClass"
    :to="to"
    :href="href"
    :exact-active-class="activeClass"
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
  },
  computed: {
    is() {
      if (this.href) {
        return "a";
      }
      if (this.to) {
        return "nuxt-link";
      }
      return "div";
    },
    componentClass() {
      return "mt-4 mt-0 hover:text-indigo-700 hover:bg-indigo-50 py-1 px-2 rounded-md mr-4";
    },
  },
};
</script>
