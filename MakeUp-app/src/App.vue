<template>
  <div>
    <app-header></app-header>
    <app-loader v-if="show"></app-loader>
    <router-view v-bind:products="products"></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";
import Details from "./components/Details.vue";
import RelevantItems from "./components/RelevantItems.vue";
import RandomItem from "./components/RandomItem.vue";
import Sitemap from "./components/Sitemap.vue";
import Loader from "./components/Loader.vue";
import Categories from "./components/Categories.vue";
const acces = "https://cors-anywhere.herokuapp.com/";

@Component({
  components: {
    "app-loader": Loader,
    "app-header": Header,
    "app-Home": Home,
    "app-details": Details,
    "app-relevant": RelevantItems,
    "app-random": RandomItem,
    "app-footer": Sitemap,
    "app-categories": Categories
  },
  data() {
    return {
      products: [],
      allProducts: [],
      show: true
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
        return response.json();
      })
      .then(result => result);
    console.log(this.products);
    this.show = false;
  }
})
export default class App extends Vue {}
</script>
