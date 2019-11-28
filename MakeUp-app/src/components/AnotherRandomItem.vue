<template>
  <div>
    <div class="item">
      <div class="one">
        <div class="card">
          <div class="card-content">
            <div class="card-image">
              <img :src="product.api_featured_image" alt="product" />
            </div>
            <br />
            <span class="card-title center">{{product.name}}</span>
            <hr />

            <p>{{product.description | to-uppercase}}</p>

            <p>Brand: {{product.brand | to-uppercase}}</p>
            <p>Category: {{product.category | to-uppercase}}</p>
            <a v-bind:href="product.product_link">Visit similar products</a>
            <br />
            <a v-bind:href="product.website_link">Or visit our WebSite</a>
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
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RelevantItems from "./RelevantItems.vue";

@Component({
  props: ["products"],
  data() {
    return {
      product: {}
    };
  },
  created() {
    this.product = JSON.parse(localStorage.getItem("random"));
  }
})
export default class Details extends Vue {}
</script>
