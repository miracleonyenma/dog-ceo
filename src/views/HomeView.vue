<script setup>
import { computed, watchEffect } from "vue";
import { useStore } from "vuex";
import DogList from "../components/DogList.vue";

const store = useStore();

const dogs = computed(() => store.state.dogs);

watchEffect(() => {
  console.log({
    dogs: dogs.value,
  });
});
</script>

<template>
  <main class="site-main">
    <header class="site-hero site-section">
      <div class="wrapper">
        <h1 class="font-bold text-5xl">Hello!</h1>
        <p>This is about to be a dogs site</p>
      </div>
    </header>
    <section class="site-section">
      <div class="wrapper">
        <DogList :dogs="dogs" />
      </div>
    </section>
  </main>
</template>
<style scoped>
.site-hero {
  @apply flex flex-col justify-center min-h-[24rem];
}
</style>
