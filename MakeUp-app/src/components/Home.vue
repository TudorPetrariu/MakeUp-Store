<template>
  <div class="home">
    <div class="container">
      <h2>Beauty Shop</h2>
      <div class="row">
        <div v-for="product in filteredProducts " :key="product.index">
          <div class="card">
            <div class="card-image">
              <img :src="product.api_featured_image" alt="product" />
            </div>
            <div class="card-content">
              <span class="card-title">{{product.name}}</span>
              <p>Brand: {{product.brand | to-uppercase}}</p>
              <p>Category: {{product.category | to-uppercase}}</p>
              <p>Type: {{product.product_type | replace | to-uppercase}}</p>
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
              <a @click="goToDetail(product)">More Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EventBus } from "../event-bus";

@Component({
  props: ["products"],
  data() {
    return {
      searchValue: ""
    };
  },
  methods: {
    goToDetail(product) {
      localStorage.setItem("product", JSON.stringify(product));
      this.$router.push({
        name: "Details"
      });
    }
  },

  created() {
    EventBus.$on("search-value", search => {
      this.searchValue = search;
    });
  },
  computed: {
    filteredProducts: function() {
      return [...this.products.slice(0, 10)].filter(product => {
        return (
          !this.searchValue ||
          product.name.toLowerCase().includes(this.searchValue.toLowerCase())
        );
      });
    }
  }
})
export default class Home extends Vue {}
</script>

