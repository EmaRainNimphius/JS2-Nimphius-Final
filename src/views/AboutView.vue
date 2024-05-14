<script>
import ContentBlocks from "@/components/aboutComponents/ContentBlocks.vue";

export default {
  name: 'AboutView',
  components: {ContentBlocks},
}
</script>

<template>

  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <ContentBlocks/>
      </div>

      <div class="col-md-6 align-self-center">
        <span class="bg-screen">
          <img id="gallary" src="/src/assets/water-brain.jpg" alt="image" class="mt-5 ms-4">
        </span>
      </div>

    </div>
  </div>

</template>

<style lang="scss" scoped>
@import "src/scss/_variables.scss";

#gallary {
  width: 95%;
}

@media (max-width: 770px) {
  .bg-screen {
    display: none;
  }
}

</style>
