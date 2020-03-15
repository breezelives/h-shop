<template>
  <v-content>category</v-content>
</template>

<script>
export default {
name: 'category',
data() {
  return {

  }
},
created() {
  console.log(this.$route.query)
}
}
</script>
