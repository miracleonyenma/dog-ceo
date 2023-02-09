<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
import { getBreed, getDog, getRoute } from "../utils/helpers.js";
const props = defineProps(["dog"]);

const breed = getBreed(props.dog);
const path = getRoute(props.dog);
console.log({
  dog: props.dog,
  breed: getBreed(props.dog),
  path,
  DOG: getDog(props.dog),
});
</script>
<template>
  <article class="img-card">
    <RouterLink :to="path">
      <img :src="dog" alt="dog" class="dog-img" loading="lazy" />
      <footer class="img-card-footer">
        <div class="wrapper">
          <h2 class="text-2xl capitalize">{{ breed }}</h2>
        </div>
      </footer>
    </RouterLink>
  </article>
</template>
<style scoped>
.img-card {
  @apply relative w-full mb-4 rounded-2xl cursor-pointer overflow-hidden;
}

.dog-img {
  @apply w-full;
}

.img-card-footer {
  @apply transition-opacity opacity-0;
  @apply absolute bottom-0 left-0 h-full w-full;
}

.img-card-footer > .wrapper {
  @apply flex items-end p-8 h-full w-full bg-slate-900/50 text-slate-50;
}
.img-card:hover .img-card-footer {
  @apply opacity-100;
}
</style>
