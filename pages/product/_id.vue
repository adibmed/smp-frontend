<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      id: 0,
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    alert(this.id);
  },
};
</script>
