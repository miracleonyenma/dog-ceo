<script setup>
import ImgCard from "./ImgCard.vue";

defineProps({
  dogs: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <ul class="dog-list">
    <li v-for="dog in dogs" :key="dog" class="dog">
      <ImgCard :dog="dog" />
    </li>
  </ul>
</template>
<style scoped>
.dog-list {
  @apply columns-2 lg:columns-3 gap-4;
}
</style>
