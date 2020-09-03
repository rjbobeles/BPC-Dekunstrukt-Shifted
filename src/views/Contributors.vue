<template>
  <div class="contributors">
    <div class="body bg-ash w-full">
      <div class="container flex justify-center mx-auto px-5 py-24">
        <div class="chivo-bold mx-auto tracking-tight">
          <h1
            class="chivo-bold text-mango bg-gritty px-3 py-2 inline-block text-xl mb-12"
          >
            CONTRIBUTORS
          </h1>
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
</template>

<script>
export default {
  mounted: function () {
    this.$emit("showLogo", true);
  },
  data() {
    return {
      contributors: [
        "AJ Surema",
        "Alexiandria Chavez",
        "Alleison Llenes Dimatulac",
        "Andrea Faye Palla Salio",
        "Anne Valmeo",
        "Chinnie Chavez",
        "Corlisse Nicolas",
        "Daniella Verzosa",
        "Darren Angelo Rodriguez",
        "Denise Paule",
        "Edison Lin",
        "Enrique Bejar",
        "Erin Ruselle De Leon",
        "Fritz Reyes",
        "Janina Olfindo",
        "Jean Evangelista",
        "Jonn Aaron Metierre",
        "Joshua Carlo Bugayong",
        "Joshua Clement Dionela",
        "Joshua Ryan Rellera",
        "Lance Mitchell Sy",
        "Mae Anne Pormento",
        "Maria Francesca Ocampo",
        "Michael Ambion",
        "Miguel Belen",
        "Niña Cudal",
        "Rochellea Giganto Dizon",
        "Samantha Sandoval",
        "Sofia Emille Platon",
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
