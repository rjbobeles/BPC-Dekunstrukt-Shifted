<template>
  <div class="bg-gritty flex flex-col justify-center items-center">
    <img
      :src="entry.entries[1].url"
      :alt="entry.description"
      class="pb-3 px-0 w-full md:w-screen-4/5 lg:pt-0 lg:h-auto lg:w-screen-2/5 lg:px-2 xl:h-auto xl:w-screen-1/2"
    />

    <img
      :src="entry.entries[0].url"
      :alt="entry.description"
      class="pt-3 px-0 w-full md:w-screen-4/5 lg:pb-0 lg:h-auto lg:w-screen-2/5 lg:px-2 xl:h-auto xl:w-screen-1/2"
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
