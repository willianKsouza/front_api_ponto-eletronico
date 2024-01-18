<template>
  <v-list-item>
    <v-container fluid>
      <v-row>
        <v-col
          sm="6"
          class="d-flex justify-space-around align-center rounded-pill bg-orange-lighten-3"
        >
          <v-list-item-title><slot></slot></v-list-item-title>
          <p>00:00:10</p>
          <v-btn color="brown-darken-1">Marcado</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-list-item>
</template>

<script setup>
const typesMarkingBackend = {
  Entrada:''
}
console.log('TimeSheetCellItem');
</script>

<style lang="scss" scoped>
</style>