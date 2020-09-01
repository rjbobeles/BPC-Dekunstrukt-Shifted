<template>
  <div class="bg-gritty flex flex-col lg:flex-row justify-center items-center">
    <img
      :src="entry.entries[1].url"
      :alt="entry.description"
      class="pt-3 px-0 w-full md:w-screen-4/5 lg:pt-0 lg:w-auto lg:h-screen-2/5 lg:px-2 xl:h-screen-3/5"
    />

    <img
      :src="entry.entries[0].url"
      :alt="entry.description"
      class="pb-3 px-0 w-full md:w-screen-4/5 lg:pb-0 lg:w-auto lg:h-screen-2/5 lg:px-2 xl:h-screen-3/5"
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
