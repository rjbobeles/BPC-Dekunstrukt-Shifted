<template>
  <div id="app">
    <Navbar :showLogo="isLogoVisible" />
    <router-view @showLogo="showLogo" />
    <Footer id="footer" />
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
      isLogoVisible: true,
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
  },
  mounted: function () {
    window.requestAnimationFrame(this.UpdateLax);
  },
  created: function () {
    this.$lax.setup();
  },
};
</script>
