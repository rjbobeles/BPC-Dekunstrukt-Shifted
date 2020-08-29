<template>
  <div class="four-o-four bg-gritty">
    <Navbar />
    <div class="container h-full flex justify-center items-center">
      <div class="w-4/5 sm:w-1/2 lg:w-1/3">
        <h1 class="text-mango num chivo-bold leading-tight">404.</h1>
        <p class="text-ash minionpro-regular mb-16">
          Oh, You're lost! The page you are looking for does not exist. You may
          click the button below to go back to the home page
        </p>
        <a
          href="/"
          class="text-mango chivo-bold text-2xl py-1 px-3 border-mango border"
          >HOMEPAGE <span class="ml-4">⟶</span></a
        >
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar/navbar.vue";
export default {
  components: {
    Navbar,
  },
  mounted: function () {
    document.body.classList.remove("fixed");
  },
};
</script>

<style scoped lang="scss">
.four-o-four {
  height: 100vh;
}
.num {
  font-size: 10rem;
}
@media only screen and (max-width: 639px) {
  .num {
    font-size: 36vw;
  }
}
</style>
