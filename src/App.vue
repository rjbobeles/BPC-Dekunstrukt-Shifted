<template>
  <div id="app">
    <div class="h-screen bg-gritty">
      <div class="flex flex-col justify-between">
        <Navbar :showLogo="isLogoVisible" />
        <router-view @showLogo="showLogo" />
      </div>
      <Footer id="footer" />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar/navbar.vue";
import Footer from "@/components/footer.vue";

export default {
  components: {
    Footer,
    Navbar,
  },
  data() {
    return {
      isLogoVisible: "",
      isNavFixed: "",
    };
  },
  methods: {
    UpdateLax() {
      this.$lax.update(window.scrollY);
      window.requestAnimationFrame(this.UpdateLax);
    },
    showLogo(value) {
      this.isLogoVisible = value;
    },
    fixedNav(value) {
      this.isNavFixed = value;
    },
  },
  mounted: function () {
    window.requestAnimationFrame(this.UpdateLax);
  },
  created: function () {
    this.$lax.setup();
  },
};
</script>
