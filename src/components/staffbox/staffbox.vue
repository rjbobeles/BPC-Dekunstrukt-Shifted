<template>
  <div>
    <div v-for="section in staffbox" :key="section.section" class="mb-8">
      <h3
        v-for="human in section.members"
        :key="human.id"
        class="text-mango chivo-bold text-2xl uppercase"
      >
        {{ human }}
      </h3>
      <p class="minionpro-bold uppercase text-xs tracking-widest">
        {{ section.section }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Staffbox",
  props: {
    staffbox: {
      type: Object,
      default: null,
    },
  },
};
</script>
