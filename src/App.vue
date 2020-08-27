<template>
  <div id="app">
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/footer.vue";

export default {
  components: {
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
