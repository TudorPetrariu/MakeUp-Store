<template>
  <div>
    <app-header></app-header>
    <router-view v-bind:products="products"></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";
import Details from "./components/Details.vue";
import RelevantItems from "./components/RelevantItems.vue";
import RandomItem from "./components/RandomItem.vue";

@Component({
  components: {
    "app-header": Header,
    "app-Home": Home,
    "app-details": Details,
    "app-relevant": RelevantItems,
    "app-random": RandomItem
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
        return response.json();
      })
      .then(result => result);
  }
})
export default class App extends Vue {}
</script>
<style >
</style>
