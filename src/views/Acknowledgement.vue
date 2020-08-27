<template>
  <div class="acknoledgements">
    <Navbar :showLogo="true" />
    <div class="body bg-ash py-32 relative">
      <div
        class="bg absolute top-0 left-0 h-screen w-screen bg-center bg-cover"
      ></div>
      <div class="container">
        <div
          class="w-5/6 sm:w-2/3 lg:w-5/12 mx-auto minionpro-regular relative z-10"
        >
          <h1
            class="chivo-bold text-mango bg-gritty px-3 py-2 inline-block text-xl mb-12"
          >
            ACKNOWLEDGEMENTS
          </h1>
          <p class="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            ligula turpis, dapibus tincidunt semper id, accumsan in urna.
            Curabitur tincidunt pulvinar tellus ut iaculis. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Nunc malesuada posuere erat at dignissim.
          </p>
          <p class="mb-8 leading-relaxed">
            Sed sed dolor non libero gravida eleifend quis in tellus. Ut
            molestie efficitur erat, et sagittis urna vulputate et. Aliquam
            consequat purus nisi, sit amet placerat nisi lobortis et. Nunc
            tempor, quam a viverra auctor, risus ipsum placerat lorem, viverra
            rhoncus enim nibh ac nisl.
          </p>
          <p class="mb-8 leading-relaxed">
            Morbi in facilisis ante. Cras turpis magna, venenatis ac sagittis
            et, facilisis et arcu. Ut at nisl quis nibh volutpat pretium et
            vitae diam.
          </p>
          <p class="mb-8 leading-relaxed">
            In interdum molestie metus, et bibendum elit ornare nec. Mauris
            facilisis velit sit amet nisi dictum, sed sodales felis consequat.
          </p>

          <p class="mb-8 leading-relaxed">
            Aliquam faucibus ligula a auctor venenatis. Etiam aliquet fringilla
            mattis. Sed accumsan nulla eleifend neque tempus, ac condimentum
            lectus eleifend. Sed vel fermentum odio. In hac habitasse platea
            dictumst. Curabitur at enim ut quam iaculis feugiat. Cras eu diam
            tincidunt libero aliquam venenatis. Curabitur vitae turpis quis eros
            tempus congue. Suspendisse vulputate, purus vel mollis eleifend,
            turpis ipsum tincidunt nisi, in facilisis justo leo a sem. Nulla
            ullamcorper quis dolor vel porttitor. Donec at dapibus libero, id
            lobortis tellus. Sed sollicitudin eros urna, et hendrerit tellus
            ultricies non. Sed semper sapien aliquet diam molestie tincidunt.
          </p>

          <p class="mb-8 leading-relaxed">
            Nulla vitae ultrices erat, vel efficitur dui. Quisque eget purus at
            urna pharetra gravida. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Aenean id ex arcu. Cras luctus elementum
            pellentesque. Mauris a hendrerit mi, lacinia finibus dui. Sed quis
            lobortis augue, eget luctus ligula.
          </p>

          <p class="mb-8 leading-relaxed">
            Phasellus malesuada elementum pellentesque. Etiam ultricies enim non
            erat tempus imperdiet. Suspendisse dictum orci non fringilla
            tristique. Vivamus eu libero pharetra, ultrices orci placerat,
            pellentesque dui. Morbi fringilla, leo eget finibus euismod, felis
            dui accumsan leo, quis sodales sapien arcu sed tortor. Fusce
            placerat nunc in ante dignissim, sit amet malesuada lacus porttitor.
            Nullam efficitur est et vestibulum feugiat. Morbi at metus at ligula
            porttitor tristique. Vivamus urna purus, hendrerit eget interdum
            vel, blandit a ipsum. Etiam nec dignissim lectus. Cras at orci
            vulputate, vestibulum turpis viverra, maximus arcu. In venenatis
            ullamcorper risus, id ornare ex lobortis non. Sed vitae varius quam,
            sit amet pellentesque eros. Suspendisse maximus diam quam, ut
            volutpat sapien cursus id. Mauris tincidunt aliquam diam, at
            condimentum justo condimentum sed. Nullam maximus mollis neque,
            vitae porta turpis dignissim a.
          </p>

          <p class="mb-8 leading-relaxed">
            Fusce id nibh eros. Donec sed accumsan est. Donec vitae venenatis
            ex. Ut nec diam tellus. Donec accumsan mi magna, nec molestie sem
            luctus ut. Proin suscipit suscipit convallis. Duis sem ante, dictum
            et enim suscipit, placerat tristique lacus. Nunc non molestie ante.
          </p>
        </div>
      </div>
    </div>
    <h1>This is the acknowledgements page</h1>
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
.body {
  transform: translateY(96px);
  .bg {
    background: linear-gradient(
        rgba(252, 252, 252, 0.7),
        rgba(252, 252, 252, 0.8),
        rgba(252, 252, 252, 1)
      ),
      url("../assets/images/dekunstrukt/acknowledgements.jpg");
  }
}
</style>
