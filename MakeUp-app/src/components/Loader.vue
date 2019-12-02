   <template>
  <transition>
    <div class="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  data() {
    return {};
  },

  methods: {}
})
export default class Loader extends Vue {}
</script>

<style scoped>
</style>




