<template lang="pug">
  main
    transition(name="move")
      PMNotification(v-show="notificationShow", :typeNotification="totalTracks > 0 ? 'is-success' : 'is-danger'")
        p(slot="body")
          span(v-if="totalTracks > 0") Se encontraron {{ totalTracks }} resultados
          span(v-else) No se encontraron resultados
    transition(name="move")
      PMLoader(v-show="isLoading")
        h1(slot="msj") Buscando Cancion ...
    section.section(v-show="!isLoading")
      .container
        nav.nav
          .field.has-addons
            .control
              input.input(
                type="text",
                placeholder="Buscar canciones",
                v-model="searchQuery",
                @keyup.enter="search")
            .control
                button.button.is-info(@click="search") Buscar
            .control
                button.button.is-danger &times;
        .container
          p {{searchMessage}}
      .container.customs.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="track in tracks")
            PMTrack(
              v-blur="track.preview_url"
              :class="{'is-active': track.id === selectedTrack }"
              :track="track",
              @select="setSelectedTrack")
</template>

<script>
import trackService from "@/services/track";
import PMTrack from "@/components/Track.vue";
import PMLoader from "@/components/shared/Loader.vue";
import PMNotification from "@/components/shared/Notification.vue";

export default {
  name: "App",
  components: {
    PMTrack,
    PMLoader,
    PMNotification
  },
  data() {
    return {
      searchQuery: "",
      tracks: [],
      isLoading: false,
      selectedTrack: "",
      notificationShow: false,
      totalTracks: 0
    };
  },
  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`;
    }
  },
  watch: {
    notificationShow() {
      if (this.notificationShow) {
        setTimeout(() => {
          this.notificationShow = false;
        }, 3000);
      }
    }
  },
  methods: {
    search() {
      if (!this.searchQuery) {
        return;
      }
      this.isLoading = true;

      trackService.search(this.searchQuery).then(res => {
        this.notificationShow = true;
        this.totalTracks = res.tracks.total;
        this.tracks = res.tracks.items;
        this.isLoading = false;
      });
    },

    setSelectedTrack(id) {
      this.selectedTrack = id;
    }
  }
};
</script>

<style lang="scss">
.results {
  margin-top: 50px;
}

.is-active {
  border: 1px solid #23d150;
}
</style>
