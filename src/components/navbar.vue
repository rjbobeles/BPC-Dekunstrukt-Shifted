<template>
  <div
    id="nav"
    class="text-white w-full max-h-screen flex flex-col absolute z-20"
    :class="{
      'bg-transparent py-12': !showLogo,
      'bg-gritty py-8': showLogo,
      'bg-gritty': navActive,
    }"
  >
    <div class="header px-2">
      <div
        class="container flex text-center"
        :class="{ 'justify-end': !showLogo, 'justify-between': showLogo }"
      >
        <router-link v-if="showLogo" to="/">
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
          @click.native="triggerMenu()"
        />
      </div>
    </div>
    <div
      id="navBody"
      class="flex-grow h-screen"
      :class="{ hidden: !navActive }"
    >
      <div class="pb-6 flex flex-row items-stretch h-full h-max-full">
        <div class="h-screen" style="margin-top: -4rem">
          <div
            id="navPhoto"
            ref="navPhoto"
            class="bg-cover bg-center h-full w-full relative z-30 fadeOut"
          ></div>
          <div
            id="defaultPhoto"
            class="bg-cover bg-center h-full default-bg absolute top-0 left-0"
            style="width: 50vw"
          ></div>
        </div>
        <div
          class="w-1/2 flex flex-col justify-center space-y-16 ml-2"
          style="margin-top: -1.5rem"
        >
          <router-link to="/editors-note" @click.native="triggerMenu()">
            <tr
              @mouseover="hoverEditorsNote = true"
              @mouseleave="hoverEditorsNote = false"
            >
              <td>
                <span class="minionpro-regular">01</span>
              </td>
              <td class="pl-10">
                <span class="minionpro-regular">Nina Kiara Cudal</span>
                <h1
                  class="chivo-bold text-mango text-5xl sm:text-2xl md:text-3xl lg:text-5xl leading-none mb-8"
                  style="margin: -2px"
                >
                  Editor's Note
                </h1>
              </td>
            </tr>
          </router-link>
          <router-link to="/entries" @click.native="triggerMenu()">
            <tr
              @mouseenter="hoverEntries = true"
              @mouseleave="hoverEntries = false"
            >
              <td>
                <span class="minionpro-regular">02</span>
              </td>
              <td class="pl-10">
                <span class="minionpro-regular">Photo Entries</span>
                <h1
                  class="chivo-bold text-mango text-5xl sm:text-2xl md:text-3xl lg:text-5xl leading-none mb-8"
                  style="margin: -2px"
                >
                  The Folio
                </h1>
              </td>
            </tr>
          </router-link>
          <router-link to="/staffbox" @click.native="triggerMenu()">
            <tr
              @mouseenter="hoverStaffbox = true"
              @mouseleave="hoverStaffbox = false"
            >
              <td>
                <span class="minionpro-regular">03</span>
              </td>
              <td class="pl-10">
                <span class="minionpro-regular">
                  Editorial Board + Staffbox
                </span>
                <h1
                  class="chivo-bold text-mango text-5xl sm:text-2xl md:text-3xl lg:text-5xl leading-none mb-8"
                  style="margin: -2px"
                >
                  Our Members
                </h1>
              </td>
            </tr>
          </router-link>
          <router-link to="/contributors" @click.native="triggerMenu()">
            <tr
              @mouseenter="hoverContributors = true"
              @mouseleave="hoverContributors = false"
            >
              <td>
                <span class="minionpro-regular">04</span>
              </td>
              <td class="pl-10">
                <span class="minionpro-regular">The Photographers</span>
                <h1
                  class="chivo-bold text-mango text-5xl sm:text-2xl md:text-3xl lg:text-5xl leading-none mb-8"
                  style="margin: -2px"
                >
                  Contributors
                </h1>
              </td>
            </tr>
          </router-link>
          <router-link to="/acknowledgement" @click.native="triggerMenu()">
            <tr
              @mouseenter="hoverAcknowledgement = true"
              @mouseleave="hoverAcknowledgement = false"
            >
              <td>
                <span class="minionpro-regular">05</span>
              </td>
              <td class="pl-10">
                <span class="minionpro-regular">Thank You</span>
                <h1
                  class="chivo-bold text-mango text-5xl sm:text-2xl md:text-3xl lg:text-5xl leading-none mb-8"
                  style="margin: -2px"
                >
                  Acknowledgements
                </h1>
              </td>
            </tr>
          </router-link>
        </div>
      </div>
    </div>
  </div>
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
      hoverEditorsNote: false,
      hoverEntries: false,
      hoverStaffbox: false,
      hoverContributors: false,
      hoverAcknowledgement: false,
      hover: false,
    };
  },
  methods: {
    triggerMenu() {
      this.navActive = !this.navActive;
    },
    toggleFadeInOut() {
      this.$refs.navPhoto.classList.toggle("fadeOut");
      this.$refs.navPhoto.classList.toggle("fadeIn");
    },
    toggleNavPhoto(nav, photo) {
      if (this.hover) {
        setTimeout(function () {
          photo.classList.toggle(nav);
        }, 250);
      } else photo.classList.toggle(nav);
      this.hover = !this.hover;
    },
  },
  props: {
    showLogo: {
      default: true,
      type: Boolean,
    },
  },
  watch: {
    navActive() {
      document.body.classList.toggle("dis-scroll");
    },
    hoverEditorsNote() {
      this.toggleFadeInOut();
      this.toggleNavPhoto("editors-note", this.$refs.navPhoto);
    },
    hoverEntries() {
      this.toggleFadeInOut();
      this.toggleNavPhoto("entries", this.$refs.navPhoto);
    },
    hoverStaffbox() {
      this.toggleFadeInOut();
      this.toggleNavPhoto("staffbox", this.$refs.navPhoto);
    },
    hoverContributors() {
      this.toggleFadeInOut();
      this.toggleNavPhoto("contributors", this.$refs.navPhoto);
    },
    hoverAcknowledgement() {
      this.toggleFadeInOut();
      this.toggleNavPhoto("acknowledgement", this.$refs.navPhoto);
    },
  },
};
</script>

<style lang="sass" scoped>
img.navbar-brand
  height: 2em;
  width: auto;

.default-bg
  background-image: url('../assets/images/dekunstrukt/banner.jpg')

#navPhoto
  width: 50vw;

#navPhoto.editors-note
  background-image: url('../assets/images/navbar/editors-note.jpg')

#navPhoto.entries
  background-image: url('../assets/images/navbar/entries.jpg')


#navPhoto.staffbox
  background-image: url('../assets/images/navbar/staffbox.jpg')


#navPhoto.contributors
  background-image: url('../assets/images/navbar/contributors.jpg')


#navPhoto.acknowledgement
  background-image: url('../assets/images/navbar/acknowledgements.jpg')


.fadeIn
  animation-name: fadeIn;
  animation-duration: 1s;

.fadeOut
  animation-name: fadeOut;
  animation-duration: 0.35s;

@keyframes fadeIn
  from {opacity: 0;}
  to {opacity: 1;}

@keyframes fadeOut
  from {opacity: 1;}
  to {opacity: 0;}
</style>
