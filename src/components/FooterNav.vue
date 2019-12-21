<template>
  <v-bottom-navigation v-model="bottomNav" app>
    <v-btn value="home">
      <span>首页</span>
      <v-icon>mdi-home-outline</v-icon>
    </v-btn>
    <v-btn value="category">
      <span>分类</span>
      <v-icon>mdi-file-document-box-search-outline</v-icon>
    </v-btn>
    <v-btn value="search">
      <span>发现</span>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn value="cart">
      <span>购物车</span>
      <v-icon>mdi-cart-outline</v-icon>
    </v-btn>
    <v-btn value="mine">
      <span>我的</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FooterNav",
  data: () => ({
    bottomNav: "home"
  })
});
</script>
