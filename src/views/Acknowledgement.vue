<template>
  <div class="acknoledgements">
    <div class="body bg-ash w-full">
      <div
        class="bg absolute top-0 left-0 h-screen w-screen bg-center bg-cover"
      ></div>
      <div class="container py-32">
        <div
          class="w-5/6 sm:w-2/3 lg:w-5/12 mx-auto minionpro-regular relative z-10"
        >
          <h1
            class="chivo-bold text-mango bg-gritty px-3 py-2 inline-block text-xl mb-12"
          >
            ACKNOWLEDGEMENTS
          </h1>
          <p class="mb-8 leading-relaxed">
            The Benildean Press Corps would like to thank everyone who turned
            <span class="minionpro-bold-italic">Dekunstrukt: Shifted</span> into
            a reality. Despite the unexpected turn of events that happened
            during the process, the exceptional dedication of the team had paved
            the way for the folio’s completion and success.
          </p>
          <p class="mb-8 leading-relaxed">
            Thank you Sir JM, Ms. Riza, Ms. Cathy, and Ms. Dayan for your
            endless guidance and support, especially for trusting our decisions
            on the creative direction and production of this folio.
          </p>
          <p class="mb-8 leading-relaxed">
            Most importantly, we would like to express our unending gratitude to
            the Editorial Board, especially Bea, Ivy, and Chen for their endless
            encouragement and dedication. Dekunstrukt would not be possible
            without your creative guidance and input.
          </p>
          <p class="mb-8 leading-relaxed">
            We would also like to thank the staffers who poured their time and
            energy for this folio’s fruition. To the sections of Art + Design
            and Layout, thank you for your creative ideas and outlines in
            helping make this as beautiful as we envisioned. Thank you as well
            to Ryan and Gel, our awesome Web Developers, who executed our
            website perfectly. Thank you to the Managing section, especially
            Julia; your passion helped the production and kept everything on
            schedule. Of course, thank you Photo and Digital Media sections for
            your continuous commitment starting day one in pitching and
            producing our visuals.
          </p>

          <p class="mb-8 leading-relaxed">
            Shout out to Mom, Dad, Ate Dayan, Shaki, and Paul. Thank you for the
            never-ending love, support, and encouragement throughout the entire
            process of Shifted.
          </p>

          <p class="mb-8 leading-relaxed">
            Most importantly, thank you to all the Benildean students who
            contributed, for sharing your stories and letting us be a part of
            it. You are the main reason we consider this folio a triumph. We are
            proud and grateful for your works.
          </p>

          <div class="flex flex-row justify-between pt-4 items-center">
            <img
              src="../assets/images/orgs/aisec.png"
              style="height: 40px"
              alt="aisec-logo"
              class="mb-6"
            />
            <img
              src="../assets/images/orgs/cba.png"
              style="height: 70px"
              alt="cba-logo"
              class="mb-6"
            />
            <img
              src="../assets/images/orgs/saga.png"
              style="height: 70px"
              alt="saga-logo"
              class="mb-6"
            />
          </div>
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

<style lang="scss" scoped>
.body {
  .bg {
    background: linear-gradient(
        rgba(252, 252, 252, 0.7),
        rgba(252, 252, 252, 0.8),
        rgba(252, 252, 252, 1)
      ),
      url("../assets/images/dekunstrukt/acknowledgements.jpg");
  }
}
</style>
