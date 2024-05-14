<script>
import { Book } from "@/models/Media.js";

export default {
  name: "BookDetails",
  props: {
    item: {
      type: Book,
    },
  },

}
</script>

<template>
  <div class="book">
    <h3 class="card-title">{{ item.collectionName }}</h3>
    <p class="card-text">By: {{ item.artistName }}</p>
  </div>
</template>

<style scoped lang="scss">
@import "../../scss/variables";

h3{
  color: #2c3e50;
}

</style>