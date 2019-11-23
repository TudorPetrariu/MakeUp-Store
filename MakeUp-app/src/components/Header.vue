<template>
  <div>

   <header>
    <h1>{{title}}</h1>
</header>

 </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({

  data(){
    return{
        title: "Header component"
    }
  },
  methods:{

  }
})
export default class Header extends Vue {}
</script>

<style scoped>


</style>
