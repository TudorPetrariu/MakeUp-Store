<template>
  <div class="random">
    <div class="container">
      <h2>The magic random item</h2>
      <div class="row">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <img :src="randomItem.api_featured_image" />
            </div>
            <div class="card-content">
              <p class="card-title">{{randomItem.name}}</p>
              <p>{{randomItem.description.slice(0,400)}}</p>
              <hr />
              <p>Type :{{randomItem.product_type | replace | to-uppercase}} Category :{{randomItem.brand | to-uppercase}}</p>
              <p>Category :{{randomItem.category | to-uppercase}}</p>
              <div class="circles">
                <div
                  class="circle"
                  v-for="(color, index) in randomItem.product_colors.slice(0, 15)"
                  :key="index"
                  :style="{ 'background-color': color.hex_value}"
                ></div>
              </div>
            </div>
            <div class="card-action">
              <button @click="getRandomItem">Press for random</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div>
    <div class="random-item">
      <img :src="randomItem.api_featured_image" />
      <h3>{{randomItem.name}}</h3>
      <div class="content">
        <span>Category :{{randomItem.category | to-uppercase}}</span>
        <p>{{randomItem.description.slice(0, 450)}}</p>
        <p>Type :{{randomItem.product_type | replace | to-uppercase}} Category :{{randomItem.brand | to-uppercase}}</p>
        <div class="circles">
          <div
            class="circle"
            v-for="(color, index) in randomItem.product_colors.slice(0, 15)"
            :key="index"
            :style="{ 'background-color': color.hex_value}"
          ></div>
        </div>
        <p class="price">Price :{{randomItem.price}} {{randomItem.price_sign}}</p>
        <a v-bind:href="randomItem.product_link">Get your product here</a>
      </div>
      <button @click="getRandomItem">Press for random</button>
    </div>
  </div>-->
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: ["products"],
  data() {
    return {
      randomItem: {}
    };
  },
  created() {
    this.getRandomItem();
  },
  methods: {
    getRandomItem() {
      const random = Math.floor(Math.random() * this.products.length);
      this.randomItem = this.products[random];
    }
  }
})
export default class RandomItem extends Vue {}
</script>

