<template>
  <div class="bg-gritty flex flex-col justify-around items-center">
    <img
      :src="entry.entries[0].url"
      :alt="entry.description"
      class="w-full md:w-screen-3/5 lg:w-screen-1/2 pb-4"
      :class="entry.entries[1].class"
    />

    <img
      :src="entry.entries[1].url"
      :alt="entry.description"
      :class="entry.entries[1].class"
      class="w-full md:w-screen-3/5 lg:w-screen-1/2 pt-4"
    />
  </div>
</template>

<script>
export default {
  props: {
    entry: {
      default: null,
      type: Object,
    },
  },
};
</script>

<style>
.vw-50 {
  width: 50vw;
}
</style>
