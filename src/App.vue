<template>
  <v-app>
    <v-app-bar color="primary" app dark>
      <v-btn icon @click="$router.back()">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title>西子商城</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- <transition name="fade"> -->
      <router-view />
    <!-- </transition> -->
    <v-bottom-navigation app grow color="primary">
      <router-link to="/home" is="v-btn">
        <span>首页</span>
        <v-icon>mdi-home-outline</v-icon>
      </router-link>
      <router-link to="/category" is="v-btn">
        <span>分类</span>
        <v-icon>mdi-file-document-box-search-outline</v-icon>
      </router-link>
      <!-- <v-btn value="find">
        <span>发现</span>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>-->
      <router-link to="/cart" is="v-btn">
        <span>购物车</span>
        <v-icon>mdi-cart-outline</v-icon>
      </router-link>
      <router-link to="/mine" is="v-btn">
        <span>我的</span>
        <v-icon>mdi-account</v-icon>
      </router-link>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
// import FooterNav from "@/components/FooterNav.vue";

export default {
  name: "App",
  components: {
    // FooterNav
  },
  data() {
    return {
      menus: ["home", "category", "cart", "mine"]
    };
  },
  computed: {
    showNav() {
      return this.menus.includes(this.$route.name);
    }
    // bottomNav: {
    //   get() {
    //     return this.$route.name;
    //   },
    //   set(v) {
    //     // if(this.menus.includes(v)) {
    //     this.$router.push({ name: v });
    //     // }
    //   }
    // }
  }
  // watch: {
  //   $route(v) {
  //     this.showNav = this.checkShowNav(v.name);
  //   }
  // },
  // methods: {
  //   checkShowNav(routeName) {
  //     return ["home", "category", "cart", "mine"].includes(routeName);
  //   }
  // }
};
</script>
