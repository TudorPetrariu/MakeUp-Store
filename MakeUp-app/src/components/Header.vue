   <template>
  <div class="nav">
    <nav>
      <div>
        <h4>DTT</h4>
      </div>
      <ul v-bind:class="{active:isTrue}" class="nav-links">
        <li>
          <router-link to="/home">Home</router-link>
        </li>
        <li>
          <router-link to="/random">Random</router-link>
        </li>
        <li>
          <input v-model="search" type="text" placeholder="Search" @keyup="emitSearchValue" />
        </li>
      </ul>
      <div v-on:click="isTrue= !isTrue" v-bind:class="{toggle:isTrue}" class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EventBus } from "../event-bus";

@Component({
  data() {
    return {
      search: "",
      isTrue: false
    };
  },
  methods: {
    emitSearchValue() {
      EventBus.$emit("search-value", this.search);
    }
  }
})
export default class Header extends Vue {}
</script>

<style scoped>
</style>




