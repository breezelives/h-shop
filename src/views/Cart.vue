<template>
  <v-content>
    <div class="text-right">
      <v-btn type="primary" @click="addToCart">加入购物车</v-btn>
    </div>

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
    >
      <div class="ball" v-show="ball.show"></div>
    </transition>
  </v-content>
</template>

<script>
export default {
  name: "cart",
  data() {
    return {
      ball: {
        show: false,
        el: ""
      },
      productList: []
    };
  },
  created() {},
  methods: {
    addToCart(e) {
      this.ball.show = true;
      this.ball.el = e.target;
    },
    beforeEnter(el) {
      let rect = this.ball.el.getBoundingClientRect();
      let x = rect.left - window.innerWidth * 0.6;
      let y = -(window.innerHeight - rect.top);
      el.style.transform = `translate(${x}px,${y}px)`;
    },
    enter(el, done) {
      // 触发重绘
      document.body.offsetHeight;
      el.style.transform = `translate(0,0)`;
      el.addEventListener("transitionend", done);
    },
    afterEnter(el) {
      el.style.display = "none";
      this.ball.show = false;
    }
  }
};
</script>

<style lang="scss">
.ball {
  position: fixed;
  left: 60%;
  bottom: 20px;
  z-index: 100;
  width: 1rem;
  height: 1rem;
  background-color: red;
  transition: all 1s cubic-bezier(0.49, -0.29, 0.75, 0.41);
  border-radius: 50%;
}
</style>
