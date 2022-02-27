<template>
  <div class="flex items-center">
    <slot />
    {{ label }}
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
