<template>
  <div>
    <div id="single-product">
      <div class="card">
        <div class="card-image">
          <img :src="product.api_featured_image" />
        </div>
        <div class="card-content">
          <span class="card-title center">{{product.name}}</span>
          <p>Price of{{product.price}} {{product.price_sign}}</p>
          <p>{{product.description}}</p>
          <div
            id="product-colors"
            v-for="(color, index) in product.product_colors"
            :key="index"
            :style="{ 'background-color': color.hex_value}"
          ></div>
        </div>
      </div>
    </div>
    <div v-for="product in getThreeRelevantProducts " :key="product.index">
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
          <!-- <a @click="goToDetail(product)">More Details</a> -->
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
      prodId: this.$route.params.Pid,
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
export default class Details extends Vue {}
</script>
