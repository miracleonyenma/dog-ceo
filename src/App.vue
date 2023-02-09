<script setup>
import { RouterView } from "vue-router";
import SiteNav from "./components/SiteNav.vue";
import SiteNavBtn from "./components/SiteNavBtn.vue";
import SiteHeader from "./components/SiteHeader.vue";
</script>

<template>
  <SiteHeader>
    <SiteNav />
    <SiteNavBtn />
  </SiteHeader>

  <RouterView />
</template>
