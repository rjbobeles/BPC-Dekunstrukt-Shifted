<template>
  <div class="bg-gritty flex flex-col items-center">
    <img
      :src="entry.entries[0].url"
      :alt="entry.description"
      class="w-full md:w-screen-3/5 lg:w-screen-1/3"
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
