<template>
  <div id="selected-item">
    <div class="one">
      <div class="card">
        <div class="card-content">
          <div class="card-image">
            <img :src="product.api_featured_image" alt="product" />
          </div>
          <hr />
          <span class="card-title center">{{product.name}}</span>
          <hr />
          <p>{{product.description | to-uppercase}}</p>
          <p>Category: {{product.category | to-uppercase}}</p>
          <a v-bind:href="product.website_link">Visit our Website</a>
          <p class="center">Price: {{product.price}} {{product.price_sign}}</p>
          <hr />
          <p class="center">Available colors:</p>
          <div
            class="circle"
            v-for="(color, index) in product.product_colors"
            :key="index"
            :style="{ 'background-color': color.hex_value}"
          ></div>
        </div>
      </div>
    </div>
    <app-relevant v-bind:products="products"></app-relevant>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RelevantItems from "./RelevantItems.vue";

@Component({
  components: {
    "app-relevant": RelevantItems
  },
  props: ["products"],
  data() {
    return {
      product: {}
    };
  },
  created() {
    this.product = JSON.parse(localStorage.getItem("product"));
  }
})
export default class Details extends Vue {}
</script>
<style scoped>
</style>