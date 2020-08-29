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
    <div class="header px-8 sm:px-12 lg:px-16">
      <div
        class="flex text-center"
        :class="{ 'justify-end': !showLogo, 'justify-between': showLogo }"
      >
        <router-link v-if="showLogo" to="/">
          <img
            src="../../assets/images/logo/shifted-logo-white.png"
            alt="Shifted Logo"
            class="navbar-brand"
            v-show="!navActive"
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
        <div class="h-screen hidden sm:block" style="margin-top: -4rem">
          <div
            id="navPhoto"
            ref="navPhoto"
            class="bg-cover bg-center h-full w-full relative z-30 fadeOut w-screen-1/4 lg:w-screen-2/5 xl:w-screen-1/2"
          ></div>
          <div
            id="defaultPhoto"
            class="bg-cover bg-center h-full default-bg absolute top-0 left-0 w-screen-1/4 lg:w-screen-2/5 xl:w-screen-1/2"
          ></div>
        </div>
        <div
          class="w-full sm:w-2/3 lg:w-3/5 xl:w-1/2 flex flex-col justify-center space-y-10 pl-8 lg:pl-16"
          style="margin-top: -4rem"
        >
          <Navlink
            :navitem="navlinks.editorsnote"
            @triggermenu="triggerMenu()"
            @over="hoverEditorsNote = true"
            @leave="hoverEditorsNote = false"
          />
          <Navlink
            :navitem="navlinks.photoentries"
            @triggermenu="triggerMenu()"
            @over="hoverEntries = true"
            @leave="hoverEntries = false"
          />
          <Navlink
            :navitem="navlinks.ebsb"
            @triggermenu="triggerMenu()"
            @over="hoverStaffbox = true"
            @leave="hoverStaffbox = false"
          />
          <Navlink
            :navitem="navlinks.contributors"
            @triggermenu="triggerMenu()"
            @over="hoverContributors = true"
            @leave="hoverContributors = false"
          />
          <Navlink
            :navitem="navlinks.acknowledgements"
            @triggermenu="triggerMenu()"
            @over="hoverAcknowledgement = true"
            @leave="hoverAcknowledgement = false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TastyBurgerButton } from "vue-tasty-burgers";
import Navlink from "./navlink";

export default {
  components: {
    TastyBurgerButton,
    Navlink,
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
      navlinks: {
        editorsnote: {
          number: "01",
          title: "Editor's Note",
          subtitle: "Nina Kiara Cudal",
          slug: "editors-note",
        },
        photoentries: {
          number: "02",
          title: "The Folio",
          subtitle: "The Folio",
          slug: "entries",
        },
        ebsb: {
          number: "03",
          title: "Our Members",
          subtitle: "Editorial Board + Staffbox",
          slug: "staffbox",
        },
        contributors: {
          number: "04",
          title: "Contributors",
          subtitle: "The Photographers",
          slug: "contributors",
        },
        acknowledgements: {
          number: "05",
          title: "Acknowledgements",
          subtitle: "Thank You",
          slug: "acknowledgement",
        },
      },
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
      document.body.classList.toggle("overflow-y-hidden");
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
  background-image: url('../../assets/images/dekunstrukt/banner.jpg')

#navPhoto.editors-note
  background-image: url('../../assets/images/navbar/editors-note.jpg')

#navPhoto.entries
  background-image: url('../../assets/images/navbar/entries.jpg')


#navPhoto.staffbox
  background-image: url('../../assets/images/navbar/staffbox.jpg')


#navPhoto.contributors
  background-image: url('../../assets/images/navbar/contributors.jpg')


#navPhoto.acknowledgement
  background-image: url('../../assets/images/navbar/acknowledgements.jpg')


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
