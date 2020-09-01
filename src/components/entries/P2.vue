<template>
  <div class="bg-gritty flex flex-col lg:flex-row justify-around items-center">
    <img
      :src="entry.entries[0].url"
      :alt="entry.description"
      class="w-full md:w-screen-3/5 lg:w-screen-1/3 pb-4"
    />

    <img
      :src="entry.entries[1].url"
      :alt="entry.description"
      class="w-full md:w-screen-3/5 lg:w-screen-1/3 pt-4"
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
