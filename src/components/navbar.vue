<template>
  <div
    id="nav"
    class="bg-black text-white w-full h-screen max-h-screen flex flex-col"
  >
    <div class="header">
      <div class="container flex pt-6 justify-between text-center">
        <router-link class="" to="/">
          <img
            src="../assets/images/logo/shifted-logo-white.png"
            alt="Shifted Logo"
            class="navbar-brand"
          />
        </router-link>
        <tasty-burger-button
          id="hamburger-menu"
          type="squeeze"
          size="s"
          color="white"
          active-color="white"
          class="flex"
          @click.native="acivateMenu()"
        />
      </div>
    </div>
    <div id="navBody" class="flex-grow mt-5 hidden">
      <div class="pb-6 flex flex-row items-stretch h-full h-max-full">
        <div class="w-1/2" style="border: 1px dotted yellow"></div>
        <div class="w-1/2 grid" style="border: 1px dotted yellow">
          <router-link to="/acknowledgement"> acknowledgement </router-link>
          <router-link to="/entries">entries</router-link>
          <router-link to="/editors-note">editor's note</router-link>
          <router-link to="/staffbox">staffbox</router-link>
          <router-link to="/contributors">contributors</router-link>
        </div>
      </div>
      <!--
        <img src="../assets/images/navbar/photo1.jpg" alt="Navbar Photo 1" style="height:100% width: auto;" />
       -->
    </div>
  </div>
  <!-- 

  

  -->
</template>

<script>
import { TastyBurgerButton } from "vue-tasty-burgers";

export default {
  components: {
    TastyBurgerButton,
  },
  data() {
    return {
      navActive: false,
    };
  },
};
</script>

<style lang="sass" scoped>
img.navbar-brand
  height: 2em;
  width: auto;
</style>
