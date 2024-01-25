
<template>
  <div>
    <v-list class="bg-orange-lighten-5">
      <TimeSheetCellItem v-for="mark in typesMarking" :key="mark">{{mark}}</TimeSheetCellItem>
    </v-list>
  </div>
</template>

<script setup>
import TimeSheetCellItem from "@/components/TimeSheetCellItem.vue";


const typesMarking = ['Entrada', 'Entrada-Almoço', 'Saida-Almoço', 'Saida']
console.log('timesheetform');
</script>

<style lang="scss" scoped>

</style>
