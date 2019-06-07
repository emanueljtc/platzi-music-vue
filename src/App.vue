<template lang="pug">
   #app
    PMHeader
    router-view
    PMFooter
</template>

<script>
import PMHeader from "@/components/layout/Header.vue";
import PMFooter from "@/components/layout/Footer.vue";

export default {
  name: "App",
  components: {
    PMHeader,
    PMFooter
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
