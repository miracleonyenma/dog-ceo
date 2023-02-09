<script setup>
import { RouterView } from "vue-router";
import SiteNav from "./components/SiteNav.vue";
import SiteNavBtn from "./components/SiteNavBtn.vue";
import SiteHeader from "./components/SiteHeader.vue";
import useSWRV from "swrv";
import { useStore } from "vuex";
import { watch } from "vue";

const store = useStore();
const { data, error } = useSWRV(
  "dogs",
  () =>
    fetch(`https://dog.ceo/api/breeds/image/random/5`).then((res) =>
      res.json()
    ),
  {
    revalidateOnFocus: false,
  }
);

watch(data, (newData) => {
  console.log({
    newData,
  });
  store.dispatch("setDogs", newData.message);
});

console.log({
  data,
  error,
});
</script>

<template>
  <SiteHeader>
    <SiteNav />
    <SiteNavBtn />
  </SiteHeader>

  <RouterView />
</template>
