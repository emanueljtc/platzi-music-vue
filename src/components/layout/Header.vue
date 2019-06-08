<template lang="pug">
  section.hero.is-success
    .hero-head
      header.navbar(role="navegation", arial-label="main navegation")
        .navbar-brand
            strong.navbar-item 📻 Platzi Music
            a.navbar-burger.burger(aria-label="menu", aria-expanded="false", data-target="navMenu")
              span(aria-hidden="true")
              span(aria-hidden="true")
              span(aria-hidden="true")
        .navbar-menu(id="navMenu")
          .navbar-start
            router-link.navbar-item(to="/") {{ $t('search') }}
            router-link.navbar-item(to="about") {{ $t('about') }}
          .navbar-end
            a.navbar-item(@click="selectLang('en')") en 🏴
            a.navbar-item(@click="selectLang('es')") es 🏳️
    .hero-body
      .container.has-text-centered
        h1.title Platzi Music
        h2.subtitle Canciones que estan Vue-nisimas 😄
        PMPlayer
</template>
<script>
import PMPlayer from "@/components/Player.vue";

export default {
  components: { PMPlayer },

  methods: {
    selectLang(lang) {
      this.$i18n.locale = lang;
    }
  }
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
