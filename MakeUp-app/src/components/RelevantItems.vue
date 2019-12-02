<template>
  <div>
    <div class="relevant" v-for="product in getThreeRelevantProducts " :key="product.index">
      <div class="card">
        <div class="card-image">
          <img :src="product.api_featured_image" alt="product" />
        </div>
        <div class="card-content">
          <h5>{{product.name}}</h5>
          <p>Brand: {{product.brand | to-uppercase}}</p>
          <p>Category: {{product.category | to-uppercase}}</p>
          <a v-bind:href="product.product_link">Visit similar products</a>
          <p>Price: {{product.price}} {{product.price_sign}}</p>
          <p class="center">Available colors:</p>
          <div
            id="product-colors"
            v-for="(color, index) in product.product_colors.slice(0,18)"
            :key="index"
            :style="{ 'background-color': color.hex_value}"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: ["products"],
  data() {
    return {
      product: {}
    };
  },
  created() {
    this.product = JSON.parse(localStorage.getItem("product"));
    console.log(this.products);
  },
  computed: {
    getThreeRelevantProducts: function() {
      return this.products
        .filter(
          prod =>
            prod.id != this.product.id &&
            (prod.brand == this.product.brand ||
              prod.product_type == this.product.product_type)
        )
        .splice(0, 3);
    }
  }
})
export default class RelevantItems extends Vue {}
</script>
