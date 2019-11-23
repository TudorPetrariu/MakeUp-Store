<template>
  <div class="container">
    <h2>Cards</h2>

    <div class="row">
      <div v-for="(product, index) in products" :key="index">
        <div class="card">
          <div class="card-image">
            <img :src="product.api_featured_image" alt="product" />
          </div>
          <div class="card-content">
            <span class="card-title">{{product.name}}</span>
            <p>Brand: {{product.brand.toUpperCase()}}</p>
            <p>Category: {{product.category.toUpperCase()}}</p>
            <p>Type: {{product.product_type.toUpperCase().replace(/_/g, "-")}}</p>
            <p>Price: {{product.price}} {{product.price_sign}}</p>
            <hr />
            <p>Available colors:</p>
            <div
              id="product-colors"
              v-for="(color, index) in product.product_colors"
              :key="index"
              :style="{ 'background-color': color.hex_value}"
            ></div>
          </div>

          <div class="card-action center">
            <a href="#">More Details</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
const url = `http://makeup-api.herokuapp.com/api/v1/products.json`;
@Component({
  data() {
    return {
      products: {}
    };
  },

  methods: {},
  async created() {
    this.products = await this.$http
      .get(url)
      .then(response => response.json())
      .then(result => result.slice(0, 10));

    console.log(this.products);
  }
})
export default class recipesInfo extends Vue {}
</script>

<style>
</style>
