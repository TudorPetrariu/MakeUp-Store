<template>
  <div>
    <select class="browser-default" v-model="selectedCategory">
      <option value="all" selected>All</option>
      <option
        v-for="(element, index) in filteredOption"
        v-bind:value="element.category"
        :key="index"
        @change="filterItems"
      >{{element.category | to-uppercase | replace}}</option>
    </select>

    <div id="categories">
      <div class="container" v-for="product in filterItems" :key="product.index">
        <div class="card">
          <div class="card-image">
            <img :src="product.api_featured_image" alt="product" />
          </div>
          <div class="card-content">
            <p>Category: {{product.category | to-uppercase}}</p>
            <p>Type: {{product.product_type | replace | to-uppercase}}</p>
            <p>Brand: {{product.brand | to-uppercase}}</p>
            <p>Name: {{product.name | to-uppercase}}</p>

            <p>Price: {{product.price}} {{product.price_sign}}</p>
            <div
              class="circle"
              v-for="(color, index) in product.product_colors"
              :key="index"
              :style="{ 'background-color': color.hex_value}"
            ></div>
          </div>

          <div class="card-action center">
            <a v-bind:href="product.product_link">Website</a>
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
      selectedCategory: "all",
      searchValue: ""
    };
  },
  methods: {},
  created() {
    EventBus.$on("search-value", search => {
      this.searchValue = search;
    });
  },

  computed: {
    filteredOption() {
      return this.products
        .filter(product => product.category != null && product.category != "")
        .reduce((unique: any, current: any) => {
          return Object.assign(unique, {
            [current.category]: current
          });
        }, {});
    },
    filterItems: function() {
      return [...this.products].filter(
        product =>
          (product.category == this.selectedCategory ||
            this.selectedCategory == "all") &&
          product.name.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    }
  }
})
export default class Categories extends Vue {}
</script>

