<script setup>
import { XMarkIcon, Bars2Icon } from "@heroicons/vue/24/solid";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const isNavActive = computed(() => store.state.isNavActive);
const toggleNav = () => {
  store.dispatch("toggleNavActive");
};
</script>
<template>
  <button
    @click="toggleNav"
    :class="`site-nav-btn cta ${isNavActive ? 'active' : ''}`"
  >
    <Bars2Icon v-if="!isNavActive" class="icon" />
    <XMarkIcon v-else class="icon" />
  </button>
</template>
<style scoped>
.site-nav-btn {
  @apply lg:hidden block  relative z-50;
}
</style>
