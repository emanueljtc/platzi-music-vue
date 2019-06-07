<template lang="pug">
  .container
    .content.has-text-centered
      slot(name="msj")
        h1 Cargando ...
</template>

<style lang="scss" scoped>
.content {
  padding: 20px;
  min-height: 40vh;
}
</style>