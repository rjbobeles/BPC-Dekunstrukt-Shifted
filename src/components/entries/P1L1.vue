<template>
  <div>
    {{ entry.title }}
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
