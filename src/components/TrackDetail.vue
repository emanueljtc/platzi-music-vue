<template lang="pug">
  .container(v-if="track && track.id")
    .columns
      .column.is-5.is-offset-4
        PmLoader(v-if="isLoading")
          h1(slot="msj") Cargando ...
    .columns
      .column.is-3.has-text-black
        figure.media-left
          p.image
            img(:src="track.album.images[0].url")
          p.button-bar.has-text-centered
            a.button.is-primary.is-large
              span.icon(@click="selectedTrack") ⏯
      .column.is-8
        .panel
          .panel-heading
            h1.title {{trackTitle}}
          .panel.block
            article.media
              .media-content
                .content
                  ul(v-for="(v, k) in track")
                    li
                      strong {{ k }}:&nbsp;
                      span {{ v }}
              nav.level
                .level-left
                  a.level-item
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
// import trackService from "@/services/track";
import PmLoader from "@/components/shared/Loader.vue";
import trackMixin from "@/mixins/track";
export default {
  components: {
    PmLoader
  },
  mixins: [trackMixin],
  data() {
    return {
      //track: {},
      isLoading: true
    };
  },
  computed: {
    ...mapState(["track"]),
    ...mapGetters(["trackTitle"])
  },
  created() {
    const id = this.$route.params.id;
    if (!this.track || !this.track.id || this.track.id !== id) {
      this.getTrackById({ id }).then(() => {
        this.isLoading = false;
        console.log("track Loaded", this.isLoading);
      });
    }
    /* trackService.getById(id).then(res => {
      this.track = res;
    }); */
  },
  methods: {
    ...mapActions(["getTrackById"])
  }
};
</script>
<style lang="scss" scoped>
.columns,
.button-bar {
  margin: 20px;
}
</style>

