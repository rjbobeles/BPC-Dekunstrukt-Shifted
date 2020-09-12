<template>
  <div class="bg-gritty flex flex-col items-center">
    <img
      :src="entry.entries[0].url"
      :alt="entry.description"
      class="sm:w-full xl:w-1/2 lg:pt-2 pb-4"
    />
    <img
      :src="entry.entries[1].url"
      :alt="entry.description"
      class="sm:w-full xl:w-1/2 pt-4"
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
