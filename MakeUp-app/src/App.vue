<template>
  <div>
    <app-header></app-header>
    <!-- <app-details></app-details> -->
    <router-view v-bind:products="products"></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";
import Categories from "./components/Categories.vue";
import Details from "./components/Details.vue";
const acces = "https://cors-anywhere.herokuapp.com/";

const url = `${acces}http://makeup-api.herokuapp.com/api/v1/products.json`;
@Component({
  components: {
    "app-header": Header,
    "app-Home": Home,
    "app-categories": Categories,
    "app-details": Details
  },
  data() {
    return {
      products: [],
      allProducts: []
    };
  },
  async created() {
    this.products = await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json",
      {
        method: "GET"
      }
    )
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(result => result);

    console.log(this.products);
  }
})
export default class App extends Vue {}
</script>
<style >
</style>
