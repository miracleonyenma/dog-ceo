<script setup>
import { useRoute } from "vue-router";
import { getBreed } from "../utils/helpers";
import { useStore } from "vuex";
import { computed } from "vue";
import DogList from "../components/DogList.vue";
const route = useRoute();
const src = `https://images.dog.ceo/breeds${route.path}`;
const breed = getBreed(src);

const store = useStore();

const breeds = computed(() => store.state.breeds);

console.log({
  route: route.path,
  breeds,
});
</script>
<template>
  <header class="site-section">
    <div class="wrapper">
      <span>You're browsing for </span>
      <h1 class="text-4xl font-bold capitalize">{{ breed }}s</h1>
    </div>
  </header>
  <section class="site-section">
    <div class="wrapper">
      <DogList :dogs="dogs" />
    </div>
  </section>
</template>
