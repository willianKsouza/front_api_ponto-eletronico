
<template>
  <div>
    <v-list class="bg-orange-lighten-5">
      <TimeSheetCellItem v-for="(mark, index) in typesMarking" :key="mark" :cellData="{index, mark}" >{{mark}}</TimeSheetCellItem>
    </v-list>
  </div>
</template>

<script setup>
import TimeSheetCellItem from "@/components/TimeSheetCellItem.vue";
const typesMarking = ['Entrada', 'Entrada-Almoço', 'Saída-Almoço', 'Saída']

</script>

