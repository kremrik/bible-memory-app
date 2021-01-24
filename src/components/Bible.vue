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
      <v-col cols="8">
        <p v-for="verse in passageText.verses" :key="verse.verse">
          <v-hover 
            v-slot:default="{ hover }"
            open-delay="200"
          >
            <div>
              <span>
                [{{ verse.verse }}] {{ verse.hint }} 
              </span>
              <span :class="{ 'on-hover': !hover }">
                {{ verse.rest }}
              </span>
            </div>
          </v-hover>
        </p>
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
