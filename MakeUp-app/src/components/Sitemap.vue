   <template>
  <footer class="page-footer grey darken-7">
    <div class="container">
      <div class="row">
        <div class="col s12 16">
          <h5>About</h5>
          <ul>
            <li>
              <router-link to="/home">Home</router-link>
            </li>
            <li>
              <router-link to="/random">Random</router-link>
            </li>
            <li>
              <a href="#">Disccounts</a>
            </li>
          </ul>
        </div>
        <div class="col s12 16">
          <h5>Our stores</h5>
          <ul>
            <li>
              <a href="https://colourpop.com">ColourPop</a>
            </li>
            <li>
              <a href="https://purpicks.com/">Purpicks</a>
            </li>
            <li>
              <a href="https://www.nyxcosmetics.com">Nyxs</a>
            </li>
          </ul>
        </div>
        <div class="col s12 16">
          <h5>Connect</h5>
          <ul>
            <li>
              <a href="#">
                <img src="../assets/Social Icons/facebook.png" />
              </a>
              <a href="#">
                <img src="../assets/Social Icons/instagram.png" />
              </a>
              <a href="#">
                <img src="../assets/Social Icons/linkedin.png" />
              </a>
              <a href="#">
                <img src="../assets/Social Icons/twitter.png" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container center-align">&copy; All Rights Reserved 2019</div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  data() {
    return {};
  },
  methods: {}
})
export default class Sitemap extends Vue {}
</script>

<style scoped>
</style>




