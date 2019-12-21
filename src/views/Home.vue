<template>
  <v-content>
    <v-carousel height="200" class="pa-3" cycle show-arrows-on-hover hide-delimiters>
      <v-carousel-item v-for="(banner, i) in banners" :key="i" :src="banner.src"></v-carousel-item>
    </v-carousel>
    <v-row class="px-3">
      <v-col cols="3" v-for="(category, i) in categories" :key="i" class="text-center">
        <img :src="category.src" height="35" />
        <div>{{category.name}}</div>
      </v-col>
    </v-row>
    <!-- <v-row align="center" justify="center">
        <v-img
          src="https://picsum.photos/id/11/500/300"
          lazy-src="https://picsum.photos/id/11/10/6"
          aspect-ratio="1"
          class="grey lighten-2"
          max-width="500"
          max-height="300"
        ></v-img>
    </v-row>-->
    <v-row dense class="px-3">
      <v-col cols="6">
        <v-card v-for="(item,i) in goodsList" :key="i" class="mb-2">
          <v-img class="white--text align-end" width="100%" :src="item.image"></v-img>
          <v-card-subtitle class="pb-0">{{item.title}}</v-card-subtitle>
          <v-card-text class="text--accent-2">
            <div>￥{{item.price}}</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card
          v-for="(item,i) in reversedGoodsList"
          :key="i"
          class="mb-2"
          @click="goto(`/product/${item.id}`)"
        >
          <v-img class="white--text align-end" width="100%" :src="item.image"></v-img>
          <v-card-subtitle class="pb-0">{{item.title}}</v-card-subtitle>
          <v-card-text class="text--accent-2">
            <div>￥{{item.price}}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      banners: [
        {
          src: require("../assets/images/banner1.jpg"),
          href: "/product/1"
        },
        {
          src: require("../assets/images/banner2.jpg"),
          href: "/product/2"
        },
        {
          src: require("../assets/images/banner3.jpg"),
          href: "/product/3"
        },
        {
          src: require("../assets/images/banner4.jpg"),
          href: "/product/4"
        }
      ],
      categories: [
        {
          name: "酒水饮料",
          src: require("../assets/images/c1.png"),
          href: "/category/1"
        },
        {
          name: "母婴用品",
          src: require("../assets/images/c2.png"),
          href: "/category/2"
        },
        {
          name: "全球美食",
          src: require("../assets/images/c3.png"),
          href: "/category/3"
        },
        {
          name: "时尚茶品",
          src: require("../assets/images/c4.png"),
          href: "/category/4"
        },
        {
          name: "个护美妆",
          src: require("../assets/images/c5.png"),
          href: "/category/5"
        },
        {
          name: "营养保健",
          src: require("../assets/images/c6.png"),
          href: "/category/6"
        },
        {
          name: "家居厨卫",
          src: require("../assets/images/c7.png"),
          href: "/category/7"
        },
        {
          name: "速食生鲜",
          src: require("../assets/images/c8.png"),
          href: "/category/8"
        }
      ],
      goodsList: [
        {
          id: 1,
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg",
          title: "古黛妃 短袖t恤女夏装2019新款韩版宽松",
          price: 179,
          sales: 61
        },
        {
          id: 2,
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554013048&di=a3dc9fd1406dd7bad7fbb97b5489ec04&imgtype=jpg&er=1&src=http%3A%2F%2Fimg009.hc360.cn%2Fhb%2FnKo44ac2656F831c684507E3Da0E3a26841.jpg",
          title: "潘歌针织连衣裙",
          price: 78,
          sales: 16
        },
        {
          id: 3,
          image:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg",
          title: "巧谷2019春夏季新品新款女装",
          price: 108.8,
          sales: 5
        },
        {
          id: 4,
          image:
            "http://images.jaadee.com/images/201702/goods_img/30150_d85aed83521.jpg",
          title: "私萱连衣裙",
          price: 265,
          sales: 88
        },
        {
          id: 5,
          image:
            "http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg",
          title: "古黛妃 短袖t恤女夏装2019新款韩版宽松",
          price: 179,
          sales: 95
        },
        {
          id: 6,
          image:
            "https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg",
          title: "娇诗茹 ulzzang原宿风学生潮韩版春夏短",
          price: 422,
          sales: 137
        }
      ]
    };
  },
  computed: {
    reversedGoodsList() {
      return [].concat(this.goodsList).reverse();
    }
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    }
  }
};
</script>
