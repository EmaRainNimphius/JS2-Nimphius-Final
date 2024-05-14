<script>
import { AudioBook } from "@/models/Media.js";

export default {
  name: "AudiobookDetails",
  props: {
    item: {
      type: AudioBook,
    },
  },

}
</script>

<template>
  <div class="audiobook">
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