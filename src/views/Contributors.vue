<template>
  <div class="contributors">
    <Navbar />
    <div class="body">
      <div class="bg-ash">
        <div class="container flex justify-center mx-auto px-5 py-16">
          <div class="chivo-bold mx-auto tracking-tight">
            <h1 class="text-gritty text-4xl sm:text-5xl mb-8">Contributors.</h1>
            <div>
              <h3
                v-for="human in contributors"
                :key="human.id"
                class="uppercase text-mango text-xl sm:text-2xl leading-snug"
              >
                {{ human }}
              </h3>
            </div>
          </div>
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
  data() {
    return {
      contributors: [
        "Aayat Mccoy",
        "Suman Bradley",
        "Adrian Bruce",
        "Zaydan Macdonald",
        "Megan Walker",
        "Colm Hammond",
        "Benas Flynn",
        "Rex Hatfield",
        "Lubna Sheppard",
        "Kerys Ortega",
        "Kieran Dale",
        "Rhianna Armitage",
        "Jamie-lee Mccray",
        "Ziggy Lancaster",
        "Aniela Alford",
        "Giselle Rivas",
        "Rayhan Le",
        "Jadan Horne",
        "T-Jay Cabrera",
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.body {
  transform: translatey(96px);
}
</style>
