<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/ClassyBible2.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Bible Memory App
        </h1>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <!-- <h2 class="headline font-weight-bold mb-3">
          Enter a passage
        </h2> -->
        <v-row>
          <v-spacer/>
          <v-col cols="3">
            <v-form>
              <v-text-field
                v-model="passage"
                label="Passage"
              ></v-text-field>
            </v-form>
          </v-col>
          <v-col cols="1">
            <v-btn
              @click="querybible()"
            >Submit</v-btn>
          </v-col>
          <v-spacer/>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer/>
      <v-col cols="12" xs="12" sm="10" md="8" lg="6" xl="6">
        <div v-for="verse in passageText.verses" :key="verse.verse">
          <p>
            <span>[{{ verse.verse }}] </span>
            <span>{{ verse.hint }} </span>
            <v-hover
              v-slot="{ hover }"
              open-delay="200"
            >
              <span>
                <span v-for="r in verse.rest" :key="r" :class="{ 'on-hover': !hover }">
                  {{ r }}
                </span>
              </span>
            </v-hover>
          </p>
        </div>
      </v-col>
      <v-spacer/>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.on-hover{
	color: transparent;
	text-shadow: 0 0 8px #000;
  transition: .4s ease-in-out;
}

</style>

<script>
  // import queryBible from '@/utils/request';

  export default {
    name: 'Bible',
    data: () => ({
      passage: "",
      passageText: "",
    }),
    mounted: function() {
    },
    methods: {
      async querybible() {
        const url = `http://127.0.0.1:8000/passage/${this.passage}`;
        const response = await fetch(url);
        const data = await response.json();
        this.passageText = data;
        // let passage = data.verses.map(
        //   x => `[${x.verse}] ${x.hint} ${x.rest}`
        // );
        // this.passageText = passage.join(" ");
      }
    },
  }
</script>
