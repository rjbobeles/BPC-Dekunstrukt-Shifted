<template>
  <div class="about">
    <Navbar />
    <div class="body">
      <div class="bg-gritty text-ash">
        <div class="container mx-auto px-5">
          <hr />
          <div
            class="w-full flex justify-center sm:justify-start sm:w-2/3 md:w-7/12 lg:w-2/5 xl:w-1/3 mx-auto py-16"
          >
            <div>
              <h6 class="mb-3">Student Publications Office</h6>
              <h1 class="chivo-bold text-4xl leading-none">
                Benildean Press Corps
              </h1>
              <h2 class="chivo-bold text-2xl">P.Y. 2019-2020</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-ash py-16">
        <div class="container mx-auto px-5">
          <div class="w-full sm:w-2/3 md:w-7/12 lg:w-2/5 xl:w-1/3 mx-auto">
            <EditorialBoard :eb="eb" />
          </div>
        </div>
      </div>
      <div class="parallax bg-cover bg-center"></div>
      <div class="bg-marble py-16 staff">
        <div class="container mx-auto px-5">
          <div class="w-full sm:w-2/3 md:w-7/12 lg:w-2/5 xl:w-1/3 mx-auto">
            <Staffbox :staffbox="staffbox" />
            <div class="mt-24">
              <p class="minionpro-regular text-gritty text-sm">
                Dekunstrukt is the official photography folio of the students of
                De La Salle-College of Saint Benilde (DLS-CSB). No part of this
                folio may be reproduced whether by photocopying, scanning, or by
                any other means without written permission from the Student
                Publications Office (SPO). Copyright 2020. For inquiries, visit
                the SPO at 2F Miguel Febres Cordero Bldg., DLS-CSB, 2544 Taft
                Avenue, Manila.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar/navbar.vue";
import EditorialBoard from "@/components/staffbox/editorialBoard.vue";
import Staffbox from "@/components/staffbox/staffbox.vue";

export default {
  components: {
    Navbar,
    EditorialBoard,
    Staffbox,
  },
  data() {
    return {
      eb: [
        [
          { name: "Chenelle Navidad", position: "Editor-in-Chief" },
          { name: "Beatrice Quirante", position: "Associate Editor for Print" },
          {
            name: "Chenelle Navidad",
            position: "Acting Associate Editor for Digital Media",
          },
          { name: "Julia Elaine Lim", position: "Managing Editor" },
          { name: "Ivy Berces", position: "Acting Creative Director" },
        ],
        [
          { name: "Beatrice Mendoza", position: "News Editor" },
          { name: "Jillian Cu", position: "Sports Editor" },
          { name: "Marinel Peroy", position: "Features Editor" },
          {
            name: "Beatrice Quirante",
            position: "Gumaganap na Patnugot ng Filipino",
          },
          { name: "Jella Gonzaga", position: "Literary Editor" },
          { name: "Ivy Berces", position: "Art + Design Editor" },
          { name: "Nina Cudal", position: "Photo Editor" },
          { name: "Vince Zarate", position: "Digital Media Editor" },
          { name: "Michael Ambion ", position: "Layout Editor" },
        ],
        [
          { name: "Mr. Juan Miguel Lago", position: "Head" },
          {
            name: "Ms. Dayanara T. Cudal",
            position: "Publication Coordinator",
          },
          {
            name: "Ms. Rizalyn Lagman-Manalili",
            position: "Student Development and Training Coordinator",
          },
          {
            name: "Ms. Catherine Bucud-Valles",
            position: "Operations Assistant",
          },
        ],
      ],
      staffbox: {
        photostaffers: {
          section: "Photo Staffers",
          members: [
            "Michael Ambion",
            "Ben Allie Antonio",
            "Joshua Paul Gaces",
            "John David Miranda",
            "Andrea Vicencio",
          ],
        },
        layout: {
          section: "Layout Artists",
          members: [
            "Michael Ambion",
            "Ben Allie Antonio",
            "Joshua Paul Gaces",
            "John David Miranda",
            "Andrea Vicencio",
          ],
        },
        web: {
          section: "Web Developers",
          members: ["Ryan Jandrick Obeles", "Gabrielle Angela Gamoras"],
        },
        managers: {
          section: "Managers",
          members: ["Ryan Jandrick Obeles", "Gabrielle Angela Gamoras"],
        },
        artdesign: {
          section: "Art + Design Staffers",
          members: [
            "Michael Ambion",
            "Ben Allie Antonio",
            "Joshua Paul Gaces",
            "John David Miranda",
            "Andrea Vicencio",
          ],
        },
        videogs: {
          section: "Video Producers ",
          members: [
            "Michael Ambion",
            "Ben Allie Antonio",
            "Joshua Paul Gaces",
            "John David Miranda",
            "Andrea Vicencio",
          ],
        },
      },
    };
  },
};
</script>

<style scoped lang="scss">
.body {
  transform: translatey(96px);
}
.parallax {
  height: 80vh;
  background-attachment: fixed;
  background-image: url("../assets/images/dekunstrukt/editornote2.jpg");
  transform: translatey(-96px);
}
.staff {
  transform: translatey(-96px);
}
</style>
