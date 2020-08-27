<template>
  <div class="editors-note">
    <Navbar :showLogo="true" />
    <div class="body w-full">
      <div class="bg-ash pt-16 pb-32">
        <div class="w-screen h-32 bg-gritty absolute top-0"></div>
        <div class="container px-8 flex flex-col md:flex-row relative z-10">
          <div
            class="w-full md:w-1/2 flex justify-center sm:justify-start md:justify-end"
          >
            <img
              src="../assets/images/dekunstrukt/editornote1.jpg"
              class="w-full md:w-full lg:w-5/6 xl:w-5/6 mb-12 md:mb-0"
            />
          </div>
          <div
            class="w-full flex justify-end md:justify-start md:w-1/2 pl-0 md:pl-16 xl:pl-24"
          >
            <div class="h-full w-full xl:w-3/4 flex flex-col justify-end">
              <img
                src="../assets/images/icons/quot.png"
                width="45px"
                class="mb-5"
              />
              <p
                class="chivo-light text-gritty text-3xl sm:text-4xl md:text-2xl lg:text-4xl mb-24"
              >
                tell your stories and capture the change whether before, after,
                or during the birth of the new normal.
              </p>
              <div>
                <p
                  class="bg-gritty py-2 px-4 chivo-bold text-mango text-2xl inline"
                >
                  EDITOR'S NOTE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gritty pt-32 pb-48">
        <div class="container minionpro-regular text-ash">
          <div class="w-3/4 lg:w-2/5 mx-auto py-5 leading-relaxed">
            <p class="mb-8">
              A photograph aims not only to be seen, but to be felt. Unravel the
              stories behind what you feel in those captured moments. From the
              bliss, agony, and wonder behind those lenses after each shot, let
              us understand and feel its hidden message.
            </p>
            <p class="mb-8">
              For this year's photography folio, Dekunstrukt: Shifted gives you
              the platform to tell the stories even without words—photographs
              that spark emotions. Here, the captured story matters more than
              what you used to take the photographs.
            </p>
            <p class="mb-8">
              Tell your stories and capture the change whether before, after or
              during the birth of the new normal.
            </p>
            <p class="mb-8">
              A photograph aims not only to be seen, but to be felt. Unravel the
              stories behind what you feel in those captured moments. From the
              bliss, agony, and wonder behind those lenses after each shot, let
              us understand and feel its hidden message.
            </p>
          </div>
        </div>
      </div>
      <div class="parallax bg-cover bg-center"></div>
      <div class="latter bg-gritty pt-32">
        <div class="container minionpro-regular text-ash">
          <div class="w-3/4 lg:w-2/5 mx-auto py-5 leading-relaxed mb-16">
            <p class="mb-8">
              A photograph aims not only to be seen, but to be felt. Unravel the
              stories behind what you feel in those captured moments. From the
              bliss, agony, and wonder behind those lenses after each shot, let
              us understand and feel its hidden message.
            </p>
            <p class="mb-8">
              For this year's photography folio, Dekunstrukt: Shifted gives you
              the platform to tell the stories even without words—photographs
              that spark emotions. Here, the captured story matters more than
              what you used to take the photographs.
            </p>
            <p class="mb-8">
              Tell your stories and capture the change whether before, after or
              during the birth of the new normal.
            </p>
            <p class="mb-8">
              A photograph aims not only to be seen, but to be felt. Unravel the
              stories behind what you feel in those captured moments. From the
              bliss, agony, and wonder behind those lenses after each shot, let
              us understand and feel its hidden message.
            </p>
            <div class="my-16">
              <h3 class="chivo-bold text-mango text-2xl">NINA CUDAL</h3>
              <p class="minionpro-regular text-ash text-xs tracking-widest">
                PHOTO EDITOR, THE BENILDEAN PRESS CORPS
              </p>
            </div>
          </div>
          <hr class="mx-12" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style scoped lang="scss">
.body {
  transform: translatey(96px);
}
.parallax {
  height: 80vh;
  background-attachment: fixed;
  background-image: url("../assets/images/dekunstrukt/editornote2.jpg");
  transform: translatey(-96px);
}
.latter {
  transform: translatey(-96px);
}
@media only screen and (orientation: portrait) {
  .parallax {
    height: 70vh;
  }
}
</style>
