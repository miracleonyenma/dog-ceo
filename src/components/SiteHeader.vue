<script setup>
import SiteLogo from "./SiteLogo.vue";
</script>
<template>
  <header class="site-header">
    <div class="wrapper">
      <SiteLogo />
      <slot />
    </div>
  </header>
</template>
<style scoped>
.site-header {
  @apply sticky top-0 p-4 z-50;
}

.site-header > .wrapper {
  @apply flex justify-between items-center gap-4 p-3 bg-white border border-slate-100 max-w-7xl m-auto rounded-full;
}
</style>
