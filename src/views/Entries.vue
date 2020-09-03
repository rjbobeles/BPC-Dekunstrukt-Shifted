<template>
  <div class="entries">
    <div class="body">
      <div class="relative">
        <div class="absolute top-0 left-0 z-20">
          <div
            class="flex cursor-pointer transition-all duration-500"
            @mouseover="overLabel"
            @mouseleave="leaveLabel"
            @click="openTOC"
          >
            <div>
              <div class="bg-mango">
                <img src="../assets/images/icons/toc.png" width="40px" />
              </div>
            </div>
            <div
              ref="toclabel"
              class="chivo-bold bg-mango text-gritty text-xl pt-1 tracking-tight w-0 overflow-hidden transition-all duration-500 whitespace-no-wrap"
            >
              Table of Contents
            </div>
          </div>
        </div>
        <vue-drawer-layout
          ref="drawerLayout"
          :animatable="true"
          :z-index="30"
          class="h-full"
        >
          <div class="drawer h-full pt-8 md:pt-16 lg:pt-24" slot="drawer">
            <div
              class="absolute top-0 left-0 pt-2 sm:pt-4 pl-4 md:pt-8 md:pl-8"
            >
              <img
                src="../assets/images/icons/close.png"
                class="w-3 md:w-5 lg:w-6 opacity-50 cursor-pointer"
                @click="closeTOC"
              />
            </div>
            <div
              class="relative h-full w-screen flex pl-3 sm:pl-4 md:pl-12 lg:pl-16"
            >
              <div
                class="w-4/5 sm:w-2/3 lg:w-1/2"
                :class="{ fadeIn: isDrawerOpen, fadeOut: !isDrawerOpen }"
              >
                <h3
                  class="text-marble chivo-bold text-2xl text-opacity-75 mb-4 sm:mb-8 lg:mb-12 pl-5 sm:pl-8 md:pl-12 lg:pl-16"
                >
                  PHOTO ENTRIES
                </h3>
                <div
                  id="toc"
                  class="toc w-full overflow-y-auto pl-5 sm:pl-8 md:pl-12 lg:pl-16"
                >
                  <div>
                    <navItem
                      v-for="entry in entries"
                      :key="entry.id"
                      :idno="entry.id"
                      :title="entry.title"
                      :author="entry.author"
                      :description="entry.description"
                      :slug="entry.slug"
                      :isCurrentItem="entry.id == currentEntry.id"
                      :id="entry.id == currentEntry.id ? 'currentItem' : ''"
                    />
                  </div>
                </div>
              </div>
              <div class="w-1/5 sm:w-1/3 lg:w-1/2" @click="closeTOC"></div>
            </div>
          </div>
          <div class="content" slot="content">
            <div class="body">
              <div class="invisible">
                <L1
                  v-if="this.currentEntry.template == 'L1'"
                  :entry="this.currentEntry"
                />
                <L1P1
                  v-if="this.currentEntry.template == 'L1P1'"
                  :entry="this.currentEntry"
                />
                <L2
                  v-if="this.currentEntry.template == 'L2'"
                  :entry="this.currentEntry"
                />
                <P1
                  v-if="this.currentEntry.template == 'P1'"
                  :entry="this.currentEntry"
                />
                <P1L1
                  v-if="this.currentEntry.template == 'P1L1'"
                  :entry="this.currentEntry"
                />
                <P2
                  v-if="this.currentEntry.template == 'P2'"
                  :entry="this.currentEntry"
                />
              </div>
            </div>
          </div>
        </vue-drawer-layout>
        <L1
          v-if="this.currentEntry.template == 'L1'"
          :entry="this.currentEntry"
        />
        <L1P1
          v-if="this.currentEntry.template == 'L1P1'"
          :entry="this.currentEntry"
        />
        <L2
          v-if="this.currentEntry.template == 'L2'"
          :entry="this.currentEntry"
        />
        <P1
          v-if="this.currentEntry.template == 'P1'"
          :entry="this.currentEntry"
        />
        <P1L1
          v-if="this.currentEntry.template == 'P1L1'"
          :entry="this.currentEntry"
        />
        <P2
          v-if="this.currentEntry.template == 'P2'"
          :entry="this.currentEntry"
        />
      </div>
    </div>
  </div>
</template>

<script>
import L1 from "@/components/entries/L1";
import L1P1 from "@/components/entries/L1P1";
import L2 from "@/components/entries/L2";
import P1 from "@/components/entries/P1";
import P1L1 from "@/components/entries/P1L1";
import P2 from "@/components/entries/P2";
import NavItem from "@/components/entries/navItem";

export default {
  components: {
    L1,
    L1P1,
    L2,
    P1,
    P1L1,
    P2,
    NavItem,
  },
  mounted() {
    this.$emit("showLogo", true);
    this.loadEntry(this.$route.params.title);
  },
  methods: {
    loadEntry(slug) {
      const entry = this.entries.find(function (elem) {
        if (elem.slug == slug) return true;
      });
      this.currentEntry = entry;
    },
    openTOC() {
      this.$refs.drawerLayout.toggle(true);
      this.isDrawerOpen = true;
      this.scrollToNavItem();
    },
    closeTOC() {
      this.$refs.drawerLayout.toggle(false);
      this.isDrawerOpen = false;
    },
    overLabel() {
      if (
        !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        this.$refs.toclabel.classList.add("labelOpen");
        this.$refs.toclabel.classList.remove("w-0");
      }
    },
    leaveLabel() {
      if (
        !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        this.$refs.toclabel.classList.remove("labelOpen");
        this.$refs.toclabel.classList.add("w-0");
      }
    },
    scrollToNavItem() {
      const itemPos = document.getElementById("currentItem").offsetTop - 100;
      document.getElementById("toc").scrollTop = itemPos;
    },
  },
  beforeUpdate() {},
  watch: {
    $route(to, from) {
      if (to.name == "Entries" && from.name == "Entries") {
        this.loadEntry(to.params.title);
      }
    },
  },
  data() {
    return {
      currentEntry: {},
      isDrawerOpen: false,
      entries: [
        {
          id: 1,
          title: "C. Homecoming",
          author: "Miguel Belen",
          description:
            "A man, probably a dad working in manila with a family in Cebu. Coming from a childhood in which my mom did the same thing i wouldn't say my guess if too far fetched. Homecoming is usually celebrated, but maybe not when you're not sure what he's coming home with.",
          slug: "c-homecoming",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/001_BELEN/1.jpg"),
            },
            {
              photoId: 2,
              url: require("../assets/images/entries/001_BELEN/2.jpg"),
            },
          ],
          template: "L2",
        },
        {
          id: 2,
          title: "Karera Pauwi",
          author: "Erin Ruselle T. De Leon",
          description: "Sino ang unang makakauwi? Mga nasa itaas o nasa ibaba?",
          slug: "karera-pauwi",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/002_DELEON/1.jpg"),
            },
            {
              photoId: 2,
              url: require("../assets/images/entries/002_DELEON/2.jpg"),
            },
          ],
          template: "P2",
        },
        {
          id: 3,
          title: "Pila",
          author: "Alleison Llenes Dimatulac",
          description:
            "Dati rati’y sa counter lang pila. Ngayon, abot labas na ang hantayan.",
          slug: "pila",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/003_DIMATULAC/1.jpg"),
            },
            {
              photoId: 2,
              url: require("../assets/images/entries/003_DIMATULAC/2.jpg"),
            },
          ],
          template: "L2",
        },
        {
          id: 4,
          title: "Little Things",
          author: "Janina Olfindo",
          description:
            "Taken in the slums of Manila, these photos focus on finding the happiness in the little things despite the harsh reality of life.",
          slug: "little-things",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/004_OLFINDO/1.jpg"),
            },
            {
              photoId: 2,
              url: require("../assets/images/entries/004_OLFINDO/2.jpg"),
            },
          ],
          template: "L2",
        },
        {
          id: 5,
          title: "False Hope",
          author: "Fritz Ryan B. Reyes",
          description:
            "Photos were taken at the very start of the General Community Quarantine wherein people were less restricted to move and to go out of their homes. It has given me the chance to understand people and by the looks of it, we are getting false hope from the government. None of the real problems have been resolved, the rich are still getting richer, and the poor are just getting poorer.",
          slug: "false-hope",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/005_REYES/1.jpg"),
            },
            {
              photoId: 2,
              url: require("../assets/images/entries/005_REYES/2.jpg"),
            },
          ],
          template: "L2",
        },
        {
          id: 6,
          title: '"Para sa Kultura" and "Kamay ni Lola"',
          author: "Jean A. Evangelista",
          description:
            "A tagbanua tribe member hoping for a better future. The sacrifice of a mother can be seen in their hands",
          slug: "para-sa-kultura",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/006_EVANGELISTA/1.jpg"),
            },
            {
              photoId: 2,
              url: require("../assets/images/entries/006_EVANGELISTA/2.jpg"),
            },
          ],
          template: "P1L1",
        },
        {
          id: 7,
          title: "Panalangin at mga Hiling",
          author: "Alleison Llenes Dimatulac",
          description:
            "Likhang madasalin ang mga pilipino. Nananatili ang pag-asa sa puso at pananampalataya. Hiling ang makasabay sa pagbabago ng ikot ng mundo.",
          slug: "panalangin",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/007_DIMATULAC/1.jpg"),
            },
            {
              photoId: 2,
              url: require("../assets/images/entries/007_DIMATULAC/2.jpg"),
            },
          ],
          template: "L2",
        },
        {
          id: 8,
          title: "covered",
          author: "Alexiandria Chavez",
          description: "behind these masks, their struggles are seen",
          slug: "covered",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/008_CHAVEZ/1.jpg"),
            },
          ],
          template: "L1",
        },
        {
          id: 9,
          title: "Hanggang sa Muli",
          author: "Andrea Faye Palla Salio",
          description:
            "Sa hindi inaasahang pangyayari, ang nakasanayan ay panandaliang tumigil. Kailan kaya ulit makakalaro ang mga bata sa labas at makaka-biyahe si Manong?",
          slug: "hanggang-sa-muli",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/009_SALIO/1.jpg"),
            },
            {
              photoId: 2,
              url: require("../assets/images/entries/009_SALIO/2.jpg"),
            },
          ],
          template: "P2",
        },
        {
          id: 10,
          title: "Bagong Taon sa Mundo ng Binondo",
          author: "Mae Anne A. Pormento",
          description:
            "Pilit binubuhay ang mga sarili sa mundong dayuhan ang naghahari.",
          slug: "bagong-taon",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/010_PORMENTO/1.jpg"),
            },
            {
              photoId: 2,
              url: require("../assets/images/entries/010_PORMENTO/2.jpg"),
            },
          ],
          template: "L2",
        },
        {
          id: 11,
          title: "ID 120",
          author: "Maria Francesca A. Ocampo",
          description:
            "When we used to forget our IDs when going out - it wasn't that big of a deal, but now forgetting our passes when going out - it is a big deal.",
          slug: "id-120",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/011_OCAMPO/1.jpg"),
            },
            {
              photoId: 2,
              url: require("../assets/images/entries/011_OCAMPO/2.jpg"),
            },
          ],
          template: "L2",
        },
        {
          id: 12,
          title: "What Was, What Is, and What Will",
          author: "Daniella C. Verzosa",
          description:
            "A tale of what was, what is and what will. Life is not a linear journey but a sequence of continuous experiences. The youth is one's past and at the same time represents the future. Similarly, the adults are reflections of one's past and the past's future. The change to address the mistakes of the past for a better future is needed today. For the present is what defines both.",
          slug: "what-was-what-is",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/012_VERSOZA/1.jpg"),
            },
            {
              photoId: 2,
              url: require("../assets/images/entries/012_VERSOZA/2.jpg"),
            },
          ],
          template: "L2",
        },
        {
          id: 13,
          title: "Siesta",
          author: "Chinnie Chavez",
          description:
            "Taking a rest has become a real luxury nowadays, but we should always remember how valuable it can be. The constant demands of a rapidly changing world has taken a great toll on all of us. We tend to overwork ourselves to keep up with the pace until we realize it too late that we can become burned out too.",
          slug: "siesta",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/013_CHAVEZ/1.jpg"),
            },
          ],
          template: "L1",
        },
        {
          id: 14,
          title: "Yes/No",
          author: "Miguel Belen",
          description: "No access, access road.",
          slug: "yes-no",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/014_BELEN/1.jpg"),
            },
          ],
          template: "L1",
        },
        {
          id: 15,
          title: "Inside",
          author: "Joshua Carlo N. Bugayong",
          description:
            "I cannot fully remember the feeling of being outside anymore. As a photographer, outside is the place where I cultivate my craft. Recently, La Union is under Enhanced Community Quarantine due to new cases of COVID-19. Now, people in my neighborhood are strictly keeping precautions by staying inside their homes.",
          slug: "inside",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/015_BUGAYONG/1.jpg"),
            },
            {
              photoId: 2,
              url: require("../assets/images/entries/015_BUGAYONG/2.jpg"),
            },
          ],
          template: "P1L1",
        },
        {
          id: 16,
          title: "Time Traveling to Tayabas",
          author: "Samantha Sandoval",
          description:
            "Manong Rogelio is a farmer in Tayabas, Quezon. Pre-lockdown, he walked me through his tasks around the farmstead, including how he fed and tended to his favorite chickens. Surrounded by the greenery of crops and trees, life had never felt simpler, still blind to the pandemic about to enter our lands.",
          slug: "time-travelling",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/016_SANDOVAL/1.jpg"),
            },
            {
              photoId: 2,
              url: require("../assets/images/entries/016_SANDOVAL/2.jpg"),
            },
          ],
          template: "L2",
        },
        {
          id: 17,
          title: "Time Split",
          author: "Sofia Emille M. Platon",
          description:
            "A student who faces the change. It shows how we are before versus how we are right now. That the struggles are different. We can be stress but we enjoy what we do, or having to do it because we are forced. That change can mean a good or bad thing.",
          slug: "time-split",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/017_PLATON/1.jpg"),
            },
          ],
          template: "L1",
        },
        {
          id: 18,
          title: "Tinig ng Resistensya",
          author: "Corlisse Nicolas",
          description:
            "Bagama't may takot sa kilusan ng pakikibaka, sisibol ang pagbabago kontra sistema at siyang magdiriwang ang gising at mulat sa katotohanan. Ang siyang bulag ay mananatiling bulag. Ang siyang silaw ay pupuksain. Darating ang araw na mananaig ang hustisya at maiintindihan ng lahat ang saysay ng himagsikan.",
          slug: "tinig-ng-resistensya",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/018_NICOLAS/1.jpg"),
            },
            {
              photoId: 2,
              url: require("../assets/images/entries/018_NICOLAS/2.jpg"),
            },
          ],
          template: "P2",
        },
        {
          id: 19,
          title: "Kayod",
          author: "Darren Angelo C. Rodriguez",
          description: "A lady managing a laundry shop.",
          slug: "kayod",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/019_RODRIGUEZ/1.jpg"),
            },
          ],
          template: "L1",
        },
        {
          id: 20,
          title: "The Life Before The Pandemic",
          author: "Edison C. Lin",
          description:
            "When everything was still normal where face masks and physical distancing were not yet required.",
          slug: "before-the-pandemic",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/020_LIN/1.jpg"),
            },
            {
              photoId: 2,
              url: require("../assets/images/entries/020_LIN/2.jpg"),
            },
          ],
          template: "P2",
        },
        {
          id: 21,
          title: "Innocence Lost",
          author: "AJ Surema",
          description:
            "The pandemic has isolated us from others. With our only interactions with others trickled down to mere screens and blips, seeing these empty playgrounds made me feel the loss of socialization and connection with others. Our days of forming human connections now feel like nothing but silhouettes of the past.",
          slug: "innocence-lost",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/021_SUREMA/1.jpg"),
            },
            {
              photoId: 2,
              url: require("../assets/images/entries/021_SUREMA/2.jpg"),
            },
          ],
          template: "L2",
        },
        {
          id: 22,
          title: "Iglot",
          author: "Denise Paule",
          description:
            "Before the pandemic, I got the chance to meet Iglot in Gawad Kalinga. She is a child full of hope and positivity. A reminder that life can be messy, but you have control over how you will spend it.",
          slug: "iglot",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/022_PAULE/1.jpg"),
            },
            {
              photoId: 2,
              url: require("../assets/images/entries/022_PAULE/2.jpg"),
            },
          ],
          template: "P2",
        },
        {
          id: 23,
          title: "Lalabas ka ba?",
          author: "Michael Mark A. Ambion",
          description:
            "ha? ano? hindi ka natatakot? pano pag-uwi mo sa bahay? pano kung may nakuha kang sakit? hindi ka ba natatakot mahawahan sila? lalabas ka pa ba? hindi ka natatakot?",
          slug: "lalabas-ka-ba",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/023_AMBION/1.jpg"),
            },
          ],
          template: "L1",
        },
        {
          id: 24,
          title: "No Facemask- No Entry",
          author: "Alleison Llenes Dimatulac",
          description:
            "Sa pagsakay ng taxi, no facemask no entry na. Para sa iyong kaligatasan at sa iyong kapwa.",
          slug: "no-facemask-no-entry",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/024_DIMATULAC/1.jpg"),
            },
            {
              photoId: 2,
              url: require("../assets/images/entries/024_DIMATULAC/2.jpg"),
            },
          ],
          template: "L2",
        },
        {
          id: 25,
          title: "Same location a month apart.",
          author: "Enrique Bejar",
          description:
            "The haunting absence of people in ordinarily busy public places.",
          slug: "a-month-apart",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/025_BEJAR/1.jpg"),
            },
            {
              photoId: 2,
              url: require("../assets/images/entries/025_BEJAR/2.jpg"),
            },
          ],
          template: "L2",
        },
        {
          id: 26,
          title: "Masked, But Not Silenced",
          author: "Anne Valmeo",
          description:
            "In the middle of a pandemic, the Filipino people were forced to go out in the streets to fight a deadlier virus –– the Duterte administration –– who uses COVID-19 as a pretext to target and silence critics. But no mask can silence dissenting voices.",
          slug: "but-not-silenced",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/026_VALMEO/1.jpg"),
            },
            {
              photoId: 2,
              url: require("../assets/images/entries/026_VALMEO/2.jpg"),
            },
          ],
          template: "P2",
        },
        {
          id: 27,
          title: "Isolation",
          author: "Jonn Aaron D. Metierre",
          description:
            "Going back to the times when we can get to choose to be alone or surrounded by people.",
          slug: "isolation",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/027_METIERRE/1.jpg"),
            },
          ],
          template: "L1",
        },
        {
          id: 28,
          title: "Aliwan",
          author: "Lance Mitchell B. Sy",
          description:
            "The alarming threat posed by the COVID-19 virus have caused the people to start isolating themselves. With schools halting operations, children lack of access to their friends and the outside world. Physical distancing as protocol. Will it ever be the same as it was again?",
          slug: "aliwan",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/028_SY/1.jpg"),
            },
            {
              photoId: 2,
              url: require("../assets/images/entries/028_SY/2.jpg"),
            },
          ],
          template: "L2",
        },
        {
          id: 29,
          title: "Nakakapanibagong Katahimikan",
          author: "Alleison Llenes Dimatulac",
          description:
            "Ang dating matao, naging tahimik. Nakakapanibago, ngunit naniniwala akong di naman ito magtatagal.",
          slug: "nakakapanibagong-katahimikan",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/029_DIMATULAC/1.jpg"),
            },
            {
              photoId: 2,
              url: require("../assets/images/entries/029_DIMATULAC/2.jpg"),
            },
          ],
          template: "L2",
        },
        {
          id: 30,
          title: '"Hope amidst adversity".',
          author: "Joshua Ryan A. Rellera",
          description: "Faces during pandemic.",
          slug: "amidst-adversity",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/030_RELLERA/1.jpg"),
            },
            {
              photoId: 2,
              url: require("../assets/images/entries/030_RELLERA/2.jpg"),
            },
          ],
          template: "L2",
        },
        {
          id: 31,
          title: '"The Cost of Education"',
          author: "Rochellea Giganto Dizon",
          description:
            "Not every children has access to education during the pandemic. This child who risks his life outside while asking for financial help for the sake of his education, made me realize that it’s a terrible thing how we easily take things for granted while others bear the brunt of everyday.",
          slug: "cost-of-education",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/031_DIZON/1.jpg"),
            },
          ],
          template: "P1",
        },
        {
          id: 32,
          title: "Distanced Unity",
          author: "Niña Cudal",
          description:
            "It’s been months since I covered a rally. For a person who loves documenting raw and unfiltered emotions where untamed individuals freely shout and express what they feel and stand for, being present here has made me feel the indestructible unity of our people.",
          slug: "distanced-unity",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/032_CUDAL/1.jpg"),
            },
            {
              photoId: 2,
              url: require("../assets/images/entries/032_CUDAL/2.jpg"),
            },
          ],
          template: "L2",
        },
        {
          id: 33,
          title: "Silent Voices",
          author: "Niña Cudal",
          description:
            "Voices through signages that serve as the people's platform to be seen. ",
          slug: "silent-voices",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/033_CUDAL/1.jpg"),
            },
            {
              photoId: 2,
              url: require("../assets/images/entries/033_CUDAL/2.jpg"),
            },
          ],
          template: "L2",
        },
        {
          id: 34,
          title: "The New Local Scene",
          author: "Joshua Clement V. Dionela",
          description:
            "Took a walk and still managed captured the relentless energy of the people despite the situation.",
          slug: "new-local-scene",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/034_DIONELA/1.jpg"),
            },
            {
              photoId: 2,
              url: require("../assets/images/entries/034_DIONELA/2.jpg"),
            },
          ],
          template: "P2",
        },
        {
          id: 35,
          title: "NEW TREND IN FASHION- Full Gear",
          author: "Alleison Llenes Dimatulac",
          description:
            "Kailangan mo na ng headress para complete outfit. Para di MAHÚLI sa fashion.",
          slug: "full-gear",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/035_DIMATULAC/1.jpg"),
            },
            {
              photoId: 2,
              url: require("../assets/images/entries/035_DIMATULAC/2.jpg"),
            },
          ],
          template: "L2",
        },
        {
          id: 36,
          title: "Pagupit",
          author: "Denise Paule",
          description:
            "These trying times made us miss how easier it was; the normal things and errands we usually do daily. But despite the pandemic, we continue to strive in order to live while we hope for better days.",
          slug: "pagupit",
          entries: [
            {
              photoId: 1,
              url: require("../assets/images/entries/036_PAULE/1.jpg"),
            },
            {
              photoId: 2,
              url: require("../assets/images/entries/036_PAULE/2.jpg"),
            },
          ],
          template: "L2",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.rotateArrow {
  transform: rotate(180deg);
}
.labelOpen {
  width: 190px;
  padding-left: 1rem;
  padding-right: 1rem;
}
.drawer {
  background-image: linear-gradient(
    to right,
    rgb(0, 0, 0),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
  .toc {
    max-height: 60%;
    direction: rtl;
    scroll-behavior: smooth;
  }
  .toc > * {
    direction: ltr;
  }
  .toc::-webkit-scrollbar {
    width: 6px;
    background-color: rgba(0, 0, 0, 0);
  }
  .toc::-webkit-scrollbar-thumb {
    background-color: rgba(220, 220, 220, 0.5);
    border-radius: 20px;
  }
}

@media only screen and (max-width: 1023px) {
  .drawer .toc {
    max-height: 75%;
  }
}
</style>
