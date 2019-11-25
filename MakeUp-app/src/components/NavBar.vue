   <template>
  <div>
    <nav>
      <div>
        <h4>The Nav</h4>
      </div>

      <ul v-bind:class="{active:isTrue}" class="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
        <li>
          <a href="#">Random</a>
        </li>
        <li>
          <input
            v-model="search"
            type="text"
            placeholder="Search your product ..."
            @keyup="emitSearchValue"
          />
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
export default class NavBar extends Vue {}
</script>

<style scoped>
</style>




