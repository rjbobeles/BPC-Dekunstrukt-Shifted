<template>
  <router-link :to="'/' + navitem.slug" @click.native="$emit('triggermenu')">
    <div class="flex">
      <div>
        <span class="minionpro-regular">{{ navitem.number }}</span>
      </div>
      <div class="pl-8 sm:pl-10">
        <span class="minionpro-regular">{{ navitem.subtitle }}</span>
      </div>
    </div>
    <div>
      <div class="invisible hidden sm:inline">
        <span class="minionpro-regular">{{ navitem.number }}</span>
      </div>
      <!-- eslint-disable-next-line -->
      <h1 @mouseover="$emit('over')" @mouseleave="$emit('leave')" class="inline chivo-bold text-mango sm:pl-10 sm:text-4xl md:text-5xl lg:text-5xl leading-none" style="margin: -2px">{{ navitem.title }}</h1>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Navlink",
  props: {
    navitem: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 639px) {
  h1 {
    font-size: 9vw;
  }
}
</style>
