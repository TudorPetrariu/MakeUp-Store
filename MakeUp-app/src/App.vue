<template>
  <div>
    <app-nav id="navbar"></app-nav>
    <app-Home></app-Home>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import Categories from "./components/Categories.vue";
import NavBar from "./components/NavBar.vue";

@Component({
  components: {
    "app-nav": NavBar,
    "app-Home": Home
  },
  data() {
    return {};
  }
})
export default class App extends Vue {}
</script>
<style >
</style>
