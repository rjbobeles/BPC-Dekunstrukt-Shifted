<template>
  <div class="flex flex-col sm:flex-row mb-6 md:mb-12">
    <div
      class="minionpro-regular text-marble pt-2"
      :class="[isCurrentItem ? 'text-opacity-75' : 'text-opacity-50']"
    >
      <span><span v-if="idno < 10">0</span>{{ idno }}</span>
    </div>
    <div class="sm:pl-8 sm:pl-12">
      <router-link :to="'/entries/' + slug">
        <h3
          class="chivo-bold text-xl md:text-2xl uppercase"
          :class="[
            isCurrentItem ? 'text-mango' : 'text-marble text-opacity-75 ',
          ]"
        >
          {{ title }}
        </h3>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    title: {
      type: String,
      default: null,
    },
    idno: {
      type: Number,
      default: 0,
    },
    slug: {
      type: String,
      default: null,
    },
    isCurrentItem: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss"></style>
