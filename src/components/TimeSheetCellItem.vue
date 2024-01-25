<template>
  <v-list class="bg-orange-lighten-5">
  <v-list-item>
    <v-container fluid>
      <v-row>
        <v-col
          sm="7"
          class="d-flex justify-space-around align-center rounded-pill bg-orange-lighten-3"
        >
          <v-list-item-title><slot></slot></v-list-item-title>
          <p>00:00:10</p>
          <v-btn color="brown-darken-1">Marcado</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-list-item>
  </v-list>
</template>

<script setup>
const typesMarkingBackend = {
  Entrada:''
}

</script>

<style lang="scss" scoped>
</style>