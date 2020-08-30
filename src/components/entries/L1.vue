<template>
  <div>
    L1
    {{ entry.title }}
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
