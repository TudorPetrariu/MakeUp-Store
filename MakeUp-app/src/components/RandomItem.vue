<template>
  <div id="random-item">
    <div class="one" v-if="products.length > 0">
      <h4 class="center">Magic Random</h4>
      <div class="card">
        <div class="card-image">
          <img :src="randomItem.api_featured_image" />
        </div>
        <div class="card-content">
          <span class="card-title center">{{randomItem.name}}</span>
          <p>{{randomItem.description}}</p>
          <hr />
          <p>Type :{{randomItem.product_type | replace | to-uppercase}}</p>
          <p>Brand :{{randomItem.brand | to-uppercase}}</p>
          <div class="circles">
            <div
              class="circle"
              v-for="(color, index) in randomItem.product_colors"
              :key="index"
              :style="{ 'background-color': color.hex_value}"
            ></div>
          </div>
        </div>
        <div class="card-action">
          <button class="btn" @click="getRandomItem">Random Gift</button>
        </div>
      </div>
    </div>
    <div v-else></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: ["products"],
  data() {
    return {
      random: null
    };
  },
  methods: {
    getRandomItem() {
      this.random = Math.floor(Math.random() * this.products.length);
    }
  },
  computed: {
    randomItem() {
      const random =
        this.random || Math.floor(Math.random() * this.products.length);
      return this.products[random];
    }
  }
})
export default class RandomItem extends Vue {}
</script>

