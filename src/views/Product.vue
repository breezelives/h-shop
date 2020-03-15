<template>
  <v-content>Product - {{ productId }}</v-content>
</template>

<script>
export default {
  name: "product",
  data() {
    return {
      productId: this.$route.params.id,
      list: []
    };
  },
  created() {}
};
</script>
