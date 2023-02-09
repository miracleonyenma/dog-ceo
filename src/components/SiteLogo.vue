<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="site-logo">
    <RouterLink to="/">
      <h1>Dog CEO</h1>
    </RouterLink>
  </div>
</template>
<style scoped>
.site-logo {
  @apply px-6;
}
</style>
