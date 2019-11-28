<template>
  <div>
    <div class="random-item">
      <img :src="randomItem.api_featured_image" />
      <h3>{{randomItem.name}}</h3>

      <span>Category :{{randomItem.category | to-uppercase}}</span>
      <p>{{randomItem.description}}</p>
      <p>Type :{{randomItem.product_type}}</p>
      <p>Category :{{randomItem.brand | to-uppercase}}</p>
      <p class="price">Price :{{randomItem.price}} {{randomItem.price_sign}}</p>
      <a v-bind:href="randomItem.product_link">Visit similar products</a>

      <div
        class="circle"
        v-for="(color, index) in randomItem.product_colors.slice(0, 3)"
        :key="index"
        :style="{ 'background-color': color.hex_value}"
      ></div>

      <button @click="getRandom(randomItem)">Press for random</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: ["products"],
  data() {
    return {
      randomItem: {}
    };
  },
  // methods: {
  //   getRandom(randomItem) {
  //     localStorage.setItem("random", JSON.stringify(randomItem));
  //     this.$router.push({
  //       name: "otherRandom"
  //     });
  //   }
  // },
  created() {
    const random = Math.floor(Math.random() * this.products.length);
    this.randomItem = this.products[random];
    console.log(this.randomItem);
  }
})
export default class RandomItem extends Vue {}
</script>

