<template>
  <div class="flex flex-col sm:flex-row mb-6 md:mb-8 lg:mb-12">
    <div
      class="minionpro-regular text-marble pt-2"
      :class="[isCurrentItem ? 'text-opacity-75' : 'text-opacity-50']"
    >
      <span><span v-if="idno < 10">0</span>{{ idno }}</span>
    </div>
    <div class="sm:pl-8 sm:pl-12">
      <router-link :to="'/entries/' + slug">
        <h3
          class="chivo-bold text-xl md:text-2xl uppercase"
          :class="[
            isCurrentItem ? 'text-mango' : 'text-marble text-opacity-75 ',
          ]"
        >
          {{ title }}
        </h3>
      </router-link>
      <div
        class="overflow-hidden transition-all duration-700 ease-in-out"
        :class="[isCurrentItem ? 'showDetails' : 'hideDetails']"
      >
        <p
          class="minionpro-regular text-marble text-opacity-100 mb-8 xl:w-2/3 pl-3 leading-relaxed mt-6"
          :class="{ fadeInRight: isCurrentItem }"
        >
          {{ description }}
        </p>
        <p
          class="minionpro-regular text-marble text-opacity-100 mb-5 uppercase text-xs tracking-widest pl-3"
          :class="{ fadeIn: isCurrentItem }"
        >
          By {{ author }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    title: {
      type: String,
      default: null,
    },
    idno: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      default: null,
    },
    slug: {
      type: String,
      default: null,
    },
    isCurrentItem: {
      type: Boolean,
      default: false,
    },
    author: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped lang="scss">
.showDetails {
  max-height: 250px;
}
.hideDetails {
  max-height: 0;
}

.fadeInRight {
  animation: fadeInRight 0.5s ease;
  animation-fill-mode: both;
}

.fadeIn {
  animation: fadeIn 0.5s ease 0.4s;
  animation-fill-mode: both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translatex(-50px);
  }
  to {
    opacity: 1;
    transform: translatex(0px);
  }
}

@media only screen and (max-width: 639px) {
  .showDetails {
    max-height: 360px;
  }
}
</style>
