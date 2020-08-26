<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import Footer from "@/components/footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  methods: {
    UpdateLax() {
      this.$lax.update(window.scrollY);
      window.requestAnimationFrame(this.UpdateLax);
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
