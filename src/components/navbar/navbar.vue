<template>
  <div
    id="nav"
    ref="nav"
    class="text-white w-full max-h-screen flex flex-col z-50 overflow-hidden"
    :class="{
      'bg-transparent py-12': !showLogo,
      'pointer-events-none absolute': !navActive,
      fixed: navActive,
    }"
  >
    <div class="header">
      <div
        class="flex text-center px-8 sm:px-12 lg:px-16 pointer-events-auto"
        :class="{
          'justify-end': !showLogo,
          'justify-between bg-gritty py-8': showLogo,
        }"
      >
        <router-link v-if="showLogo" to="/">
          <img
            src="../../assets/images/logo/shifted-logo-white.png"
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
          class="flex relative z-50"
          :key="$route.path"
          @click.native="triggerMenu()"
        />
      </div>
    </div>
    <div
      class="overlay absolute top-0 left-0 h-screen w-screen transition-all duration-500 pointer-events-none"
      :class="[navActive ? 'opacity-1' : 'opacity-0']"
    ></div>
    <div
      id="navBody"
      class="flex-grow h-screen bg-gritty transition-transform ease-in-out shadow-2xl"
      :class="[navActive ? 'show' : 'hide', showLogo ? 'moveUp' : '']"
    >
      <div class="flex flex-row items-stretch h-full h-max-full">
        <div class="h-screen hidden sm:block">
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
          class="w-full sm:w-3/4 lg:w-3/5 xl:w-1/2 flex flex-col justify-center space-y-10 pl-8 lg:pl-16"
        >
          <Navlink
            :navitem="navlinks.editorsnote"
            @triggermenu="triggerMenu()"
            @over="hoverEditorsNote = true"
            @leave="hoverEditorsNote = false"
            class="mt-12"
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
      window.scrollTo(0, 0);
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
#navBody.hide
  transform: translate(100vw, -67px);
  animation-name: fadeOutNav;
  animation-duration: 0.5s;
  animation-fill-mode: both;
#navBody.show
  transform: translate(0, -67px)
  animation-name: fadeInNav;
  -webkit-animation: fadeInNav;
  animation-duration: 0.5s;
  animation-fill-mode: both;

#navBody.moveUp
  margin-top: -30px

#navBody
  transition-duration: 850ms

.overlay
  background: rgba(0,0,0,0.7)
  pointer-events: none


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
  from {opacity: 0; background-image:none ;}
  to {opacity: 1;}

@keyframes fadeOut
  from {opacity: 1;}
  to { opacity: 0; background-image:none; }

@keyframes fadeInNav
  0%
    opacity: 0;
    animation-timing-function: linear;
  25%
    opacity: 1;
    animation-timing-function: linear;

@keyframes fadeOutNav
  80%
    opacity: 1;
    animation-timing-function: ease-in;
  100%
    opacity: 0;
    animation-timing-function: ease-in;
</style>
