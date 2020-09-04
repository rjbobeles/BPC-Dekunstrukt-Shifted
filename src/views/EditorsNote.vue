<template>
  <div class="editors-note">
    <div class="body w-full">
      <div class="bg-ash pt-8 pb-24 lg:pb-32">
        <div class="w-screen h-48 bg-gritty absolute top-0"></div>
        <div class="container px-8 flex flex-col md:flex-row relative z-10">
          <div
            class="w-full md:w-1/2 flex justify-center sm:justify-start md:justify-end items-start"
          >
            <img
              src="../assets/images/dekunstrukt/editornote1.jpg"
              class="w-full md:w-full lg:w-5/6 xl:w-5/6 mb-12 md:mb-0"
            />
          </div>
          <div
            class="w-full flex justify-end md:justify-start md:w-1/2 pl-0 md:pl-16 xl:pl-24"
          >
            <div class="h-inherit w-full xl:w-3/4 flex flex-col justify-end">
              <img
                src="../assets/images/icons/quot.png"
                width="45px"
                class="mb-5"
              />
              <p
                class="chivo-light text-gritty text-3xl text-2xl lg:text-4xl mb-24"
              >
                See the story and feel the emotion in every photo, for a
                photograph aims not only to be seen but to be felt.
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
      <div class="bg-gritty py-32">
        <div class="container minionpro-regular text-ash">
          <div class="w-3/4 lg:w-2/5 mx-auto py-5 leading-relaxed">
            <p class="mb-8">
              As the COVID-19 pandemic continuously changes everyone’s way of
              living, we now have to embrace the new normal. Capturing these
              abrupt changes serves as a reminder of this monumental change in
              history.
            </p>
            <p>
              This year’s Dekunstrukt, the official photography folio of the
              students of De La Salle-College of Saint Benilde, exhibits stories
              that will let you safely witness the outside world, along with how
              it’s adapting to the necessary changes.
            </p>
          </div>
        </div>
      </div>
      <div class="parallax bg-cover bg-center"></div>
      <div class="latter bg-gritty pt-32">
        <div class="container minionpro-regular text-marble">
          <div class="w-3/4 lg:w-2/5 mx-auto py-5 leading-relaxed mb-16">
            <p class="mb-8">
              Welcome to
              <span class="minionpro-bold-italic">Dekunstrukt: Shifted</span>, a
              testament by Benildeans to the new normal.
            </p>
            <p class="mb-8">
              This first ever online photography folio of the College has called
              Benildeans to take part in leaving a mark along with the rest of
              the world; capturing scenes before and after the new normal.
            </p>
            <p class="mb-8">
              In this new experience, learn more about the country we live in
              today through the emotions and the eyes of the photographer. See
              the story and feel the emotion in every photo, for a photograph
              aims not only to be seen but to be felt.
            </p>
            <p class="mb-8">
              With most of us limited to the confines of our houses, let these
              images speak for what your very eyes cannot see for themselves
              yet.
            </p>
            <div class="my-16">
              <h3 class="chivo-bold text-mango text-2xl">NIÑA CUDAL</h3>
              <p class="minionpro-regular text-ash text-xs tracking-widest">
                PHOTO EDITOR, THE BENILDEAN PRESS CORPS
              </p>
            </div>
          </div>
          <hr class="mx-8" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function () {
    this.$emit("showLogo", true);
  },
};
</script>

<style scoped lang="scss">
.parallax {
  height: 80vh;
  background-attachment: fixed;
  background-image: url("../assets/images/dekunstrukt/editornote2.jpg");
}
@media only screen and (orientation: portrait) {
  .parallax {
    height: 50vh;
  }
}
</style>
