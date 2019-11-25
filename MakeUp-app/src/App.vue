<template>
  <div>
    <app-nav></app-nav>
    <app-Home></app-Home>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from "./components/Home.vue";
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
