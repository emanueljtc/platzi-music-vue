<template lang="pug">
  section.hero.is-success
    .hero-head
      header.nav
        .container
          .nav-left
            .nav-item
              strong 📻 Platzi Music
          .nav-right.nav-menu
            router-link.nav-item(to="/") Buscar
            router-link.nav-item(to="about") Nosotros
    .hero-body
      .container.has-text-centered
        h1.title Platzi Music
        h2.subtitle Canciones que estan Vue-nisimas 😄
        PMPlayer
</template>
<script>
import PMPlayer from "@/components/Player.vue";

export default {
  components: { PMPlayer }
};
</script>

<style lang="scss">
.hero-head {
  .nav {
    .container {
      .nav-left {
        .nav-item {
          strong {
            color: white;
          }
        }
      }
    }
  }
}
</style>
