<template>
  <div>
    <img :src="entry.entries[0].url" :alt="entry.description" />
  </div>
</template>

<script>
export default {
  props: {
    entry: {
      default: null,
      type: Array,
    },
  },
};
</script>
