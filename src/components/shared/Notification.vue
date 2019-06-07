<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        .notification(:class="typeNotification")
          slot(name="body") Algo anduvo mal

</template>
<script>
export default {
  props: {
    typeNotification: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.notification {
  margin: 10px;
}
</style>
