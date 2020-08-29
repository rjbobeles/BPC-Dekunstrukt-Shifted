<template>
  <div class="entries">
    <Navbar />
    <div style="padding-top: 200px">
      <router-link to="/entries/asd">ASD</router-link>
      <br />
      <router-link to="/entries/asd2">ASD2</router-link>
      <h1>This is an entires page {{ this.currentEntry.title }}</h1>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar/navbar";

export default {
  components: {
    Navbar,
  },
  mounted() {
    this.loadEntry(this.$route.params.title);
  },
  methods: {
    loadEntry(slug) {
      const entry = this.entries.find(function (elem) {
        if (elem.slug == slug) return true;
      });
      this.currentEntry = entry;
    },
  },
  data() {
    return {
      currentEntry: {},
      entries: [
        {
          id: 1,
          title: "This is the Entry title",
          author: "Adam Levine",
          description: "This is the description",
          slug: "asd",
          entries: [
            { photoId: 1, url: "http://google.com" },
            { photoId: 2, url: "http://google.com" },
          ],
          template: "Template of choice",
        },
        {
          id: 2,
          title: "Lorem ipsum dolor ",
          author: "Adam Levine",
          description: "This is the description",
          slug: "asd2",
          entries: [
            { photoId: 1, url: "http://google.com" },
            { photoId: 2, url: "http://google.com" },
          ],
          template: "Template of choice",
        },
      ],
    };
  },
  beforeUpdate() {
    this.loading = true;
    setTimeout(() => (this.loading = false), 500);
  },
  watch: {
    $route(to, from) {
      if (to.name == "Entries" && from.name == "Entries") {
        this.loadEntry(to.params.title);
      }
    },
  },
};
</script>
