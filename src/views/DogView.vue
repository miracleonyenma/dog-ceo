<script setup>
import { useRoute } from "vue-router";
import { getBreed } from "../utils/helpers";
const route = useRoute();
const src = `https://images.dog.ceo/breeds${route.path}.jpg`;

const breed = getBreed(src);

console.log({
  route: route.path,
  breed,
});
</script>
<template>
  <header class="site-section">
    <div class="wrapper !max-w-xl">
      <span>You're looking at a </span>
      <h1 class="text-4xl font-bold capitalize">{{ breed }}</h1>
      <div class="img-cont dog-image">
        <img :src="`https://images.dog.ceo/breeds${route.path}.jpg`" alt="" />
      </div>
    </div>
  </header>
</template>
<style scoped>
.dog-image {
  @apply w-full h-full my-8;
}

.dog-image img {
  @apply w-full h-full object-cover rounded-2xl;
}
</style>
