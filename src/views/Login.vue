<template>
  <v-content>login</v-content>
</template>

<script>
import api from "../api/index";

export default {
  name: "login",
  data() {
    return {
      params: {
        phone: "13145678901",
        password: "123456"
      }
    };
  },
  created() {
    // api.login(this.params).then(res => {
    //   console.log(res)
    // })
  }
};
</script>
