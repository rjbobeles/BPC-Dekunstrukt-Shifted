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
        "Miguel Belen",
        "Erin Ruselle T. De Leon",
        "Alleison Llenes Dimatulac",
        "Janina Olfindo",
        "Fritz Ryan B. Reyes",
        "Jean A. Evangelista",
        "Alexiandria Chavez",
        "Andrea Faye Palla Salio",
        "Mae Anne A.Pormento",
        "Maria Francesca A. Ocampo",
        "Daniella C. Verzosa",
        "Chinnie Chavez",
        "Joshua Carlo N. Bugayong",
        "Samantha Sandoval",
        "Sofia Emille M. Platon",
        "Corlisse Nicolas",
        "Darren Angelo C. Rodriguez",
        "Edison C. Lin",
        "AJ Surema",
        "Denise Paule",
        "Michael Mark A. Ambion",
        "Enrique Bejar",
        "Anne Valmeo",
        "Jonn Aaron D. Metierre",
        "Lance Mitchell B. Sy",
        "Joshua Ryan A. Rellera",
        "Rochellea Giganto Dizon",
        "Niña Cudal",
        "Joshua Clement V. Dionela",
        "Denise Paule",
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
