<template>
  <div class="bg-gritty flex flex-col items-center">
    <img :src="entry.entries[0].url" :alt="entry.description" class="w-full" />
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
