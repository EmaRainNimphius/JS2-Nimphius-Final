<script>
import { meeplesDb } from "@/firebase.js";


export default {
  name: 'AccountStatistics',
  data() {
    return {
      documents: [],
    }
  },
  firestore: {
    documents: meeplesDb,
  },
  mounted() {

  },
  methods: {
    display(){

    }
  }
}
</script>

<template>
  <div class="container mt-4">
    <hr>
    <h3>Your Statistics</h3>

    <div v-for="document in documents" :key="document.type" >
      {{ document.meepleName}}
    </div>






  </div>
</template>

<style lang="scss" scoped>
@import "src/scss/_variables.scss";

</style>