<template>
  <v-app>
    <v-main>
      <Bible/>
    </v-main>
  </v-app>
</template>

<script>
import Bible from './components/Bible';

export default {
  name: 'App',

  components: {
    Bible,
  },

  data: () => ({
    //
  }),
};
</script>
