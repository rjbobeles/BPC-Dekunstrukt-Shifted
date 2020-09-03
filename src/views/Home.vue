<template>
  <div>
    <div class="banner h-screen relative overflow-hidden">
      <div class="absolute w-full h-full text-white z-10 overflow-x-hidden">
        <div class="container flex items-center h-full mx-auto">
          <div
            class="flex flex-col items-center sm:items-start sm:flex-row w-full"
          >
            <div
              class="w-3/4 flex justify-center sm:justify-start sm:w-1/2 sm:pl-12 lg:pl-16 xl:pl-24 mb-8 sm:mb-0 items-center"
            >
              <img
                class="logo"
                src="../assets/images/logo/shifted-logo-white.png"
              />
            </div>
            <div
              class="w-3/4 sm:w-1/2 flex justify-center sm:justify-end sm:pr-12 lg:pr-16 xl:pr-24 text-center sm:text-left"
            >
              <p class="minionpro-regular text-ash">
                The Official Photography Folio <br />of the students of De La
                Salle-College<br />
                of St. Benilde
              </p>
            </div>
          </div>
          <div class="w-full arrow-down flex justify-center absolute left-0">
            <a
              href="#shifted"
              class="bg-mango p-3"
              v-smooth-scroll="{
                duration: 1500,
                easingFunction: 'easeInOutQuad',
              }"
            >
              <img src="../assets/images/icons/arrow-black.png" width="25px" />
            </a>
          </div>
        </div>
      </div>
      <div
        class="banner-bg lax h-screen bg-cover bg-center relative"
        data-lax-preset="lazy-500"
        ref="parallax"
        v-mousefollower:[60]
      ></div>
    </div>
    <div
      class="bg-gritty minionpro-regular text-ash py-24 relative z-10 flex justify-center items-center text-center"
    >
      <div class="absolute anchor" id="shifted"></div>
      <div class="container flex justify-center">
        <div
          class="w-3/4 md:w-1/2 lg:w-1/3 lax"
          data-lax-preset="blurIn"
          data-lax-opacity="800 0, 400 1"
          ref="desc"
        >
          A photograph aims not only to be seen, but to be felt. Unravel the
          stories behind what you feel in those captured moments. From the
          bliss, agony, and wonder behind the lenses after each shot, let us
          understand and feel its hidden message.
        </div>
      </div>
    </div>
    <div class="bg-ash relative">
      <div
        class="flex capture flex-col md:flex-row w-full relative z-10 pt-24 md:pt-32 lax"
        ref="folio"
        data-lax-opacity="800 1, 600 0"
      >
        <div
          class="md:w-1/2 flex justify-end px-8 capture order-2 md:order-1 items-start"
        >
          <img
            src="../assets/images/dekunstrukt/capture.jpg"
            ref="foliophoto"
            class="w-full xl:w-3/4"
          />
        </div>
        <div
          class="capture md:w-1/2 mb-12 md:mb-0 pl-0 pl-8 pr-8 md:pr-0 lg:pl-16 md:pt-8 lg:pt-32 flex order-1 md:order-2 lax"
        >
          <div class="w-full md:w-5/6 xl:w-3/5 h-2/5 flex flex-col">
            <h1
              class="chivo-bold text-mango text-5xl sm:text-6xl md:text-5xl lg:text-6xl leading-none mb-8"
            >
              Capture <br />
              the Change
            </h1>
            <p class="minionpro-regular text-gritty mb-16 md:mb-12 lg:mb-32">
              For this year's photography folio,
              <span class="minionpro-bold-italic">Dekunstrukt: Shifted</span>,
              stories are told even without words. Each photograph outlines an
              emotion. Here, the captured story matters more than what you used
              to take the photographs.
            </p>
            <div>
              <router-link
                to="/entries/"
                class="text-mango chivo-bold text-2xl bg-gritty px-5 py-2"
                >VIEW FOLIO ⟶</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gritty h-16 w-full absolute bottom-0"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function () {
    this.$emit("showLogo", false);
    this.$lax.addElement(this.$refs.desc);
    this.$lax.addElement(this.$refs.folio);
    this.$lax.addElement(this.$refs.foliophoto);
  },
  beforeDestroy: function () {
    this.$lax.addElement(this.$refs.desc);
    this.$lax.addElement(this.$refs.folio);
    this.$lax.addElement(this.$refs.foliophoto);
  },
};
</script>

<style scoped lang="scss">
.banner {
  .banner-bg {
    background-image: url("../assets/images/dekunstrukt/banner.jpg");
    height: 100vh;
  }
  .logo {
    width: 320px;
  }
}

.h-2\/5 {
  height: 45%;
  max-height: 400px;
}

.anchor {
  top: -85%;
}

.arrow-down {
  bottom: 125px;
}

@media only screen and (max-width: 1279px) {
  .h-2\/5 {
    height: 60%;
  }
}
@media only screen and (max-width: 1024px) {
  .h-2\/5 {
    height: 75%;
  }
  .anchor {
    top: -20%;
  }
}
@media only screen and (max-width: 767px) {
  .capture {
    align-items: center;
  }
  .capture > div {
    width: 640px;
  }
}
@media only screen and (max-width: 639px) {
  .capture > div {
    width: 100%;
  }
  .anchor {
    top: -70%;
  }
}
@media only screen and (max-width: 360px) {
  .anchor {
    top: -25%;
  }
}
@media only screen and (max-width: 325px) {
  .capture {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
</style>
