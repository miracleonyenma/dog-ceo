<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const isNavActive = computed(() => store.state.isNavActive);
</script>
<template>
  <nav :class="`site-nav ${isNavActive ? 'active' : ''}`">
    <div class="wrapper">
      <ul class="links">
        <li class="link-item">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <!-- <li class="link-item">
          <RouterLink to="/">Breeds</RouterLink>
        </li> -->
      </ul>
    </div>
  </nav>
</template>
<style scoped>
.site-nav {
  @apply invisible opacity-0 pointer-events-none;
  @apply lg:visible lg:opacity-100 lg:pointer-events-auto;
  @apply fixed lg:relative top-0 left-0 w-full lg:w-auto h-full lg:p-2 lg:px-6  bg-white;
}

.site-nav > .wrapper {
  @apply flex flex-col justify-center items-center  gap-4 h-full;
}

.site-nav .links {
  @apply flex flex-col lg:flex-row gap-4;
}

.site-nav .link-item {
  @apply font-semibold text-4xl lg:text-base text-slate-500 hover:text-slate-800;
}

.site-nav.active {
  @apply visible opacity-100 pointer-events-auto;
}
</style>
