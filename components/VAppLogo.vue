<template>
  <div class="flex items-center flex-shrink-0 text-black mr-6">
    <span class="font-semibold text-xl tracking-tight">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: { title: { String, required: true } },
};
</script>
