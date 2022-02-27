<template>
  <div class="h-screen w-full grid place-content-center">
    <div>
      <h1 v-if="error.statusCode === 404"><NotFound /></h1>
      <h1 v-else>An error occurred - {{ error.statusCode }}</h1>
      <div class="text-center pt-4 text-indigo-700">
        <NuxtLink to="/">Home page</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import NotFound from "@/components/NotFound.vue";
export default {
  props: ["error"],
  layout: "empty",
  components: {
    NotFound,
  },
};
</script>
