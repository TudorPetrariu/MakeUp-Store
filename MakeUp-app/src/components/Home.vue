<template>
  <div class="container">
    <h2>Cards</h2>
    <div class="row">
      <div v-for="product in filteredProducts" :key="product.index">
        <div class="card">
          <div class="card-image">
            <img :src="product.api_featured_image" alt="product" />
          </div>
          <div class="card-content">
            <span class="card-title">{{product.name}}</span>
            <p>Brand: {{product.brand | to-uppercase}}</p>
            <p>Category: {{product.category | to-uppercase}}</p>
            <p>Type: {{product.product_type.replace(/_/g, "-") | to-uppercase}}</p>
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
import { EventBus } from "../event-bus";

const url = `http://makeup-api.herokuapp.com/api/v1/products.json`;
@Component({
  data() {
    return {
      products: [],
      searchValue: ""
    };
  },

  methods: {},
  async created() {
    this.products = await this.$http
      .get(url)
      .then(response => response.json())
      .then(result => result.slice(0, 10));

    console.log(this.products);

    EventBus.$on("search-value", search => {
      this.searchValue = search;
    });
  },
  computed: {
    filteredProducts: function() {
      return this.products.filter(product => {
        return product.name
          .toLowerCase()
          .includes(this.searchValue.toLowerCase());
      });
    }
  }
})
export default class Home extends Vue {}
</script>

<style>
</style>
