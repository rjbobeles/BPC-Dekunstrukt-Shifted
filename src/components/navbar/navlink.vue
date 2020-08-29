<template>
  <router-link :to="'/' + navitem.slug" @click.native="$emit('triggermenu')">
    <tr @mouseover="$emit('over')" @mouseleave="$emit('leave')">
      <td>
        <span class="minionpro-regular">{{ navitem.number }}</span>
      </td>
      <td class="pl-10">
        <span class="minionpro-regular">{{ navitem.subtitle }}</span>
        <h1
          class="chivo-bold text-mango text-5xl sm:text-2xl md:text-3xl lg:text-5xl leading-none"
          style="margin: -2px"
        >
          {{ navitem.title }}
        </h1>
      </td>
    </tr>
  </router-link>
</template>

<script>
export default {
  name: "Navlink",
  props: {
    navitem: {
      type: Object,
      default: null,
    },
  },
};
</script>
