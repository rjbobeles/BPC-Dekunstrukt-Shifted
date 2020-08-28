<template>
  <div>
    <div v-for="group in eb" :key="group.id" class="mb-24">
      <div v-for="human in group" :key="human.position" class="mb-8">
        <h3 class="text-mango chivo-bold text-2xl uppercase">
          {{ human.name }}
        </h3>
        <p class="minionpro-bold uppercase text-xs tracking-widest">
          {{ human.position }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditorialBoard",
  props: {
    eb: {
      type: Array,
      default: null,
    },
  },
};
</script>
