<template>

    <v-list class="bg-orange-lighten-5">
      <time-sheet-cell-item f>Entrada</time-sheet-cell-item>
    </v-list>

</template>

<script setup>
import TimeSheetCellItem from "@/components/TimeSheetCellItem.vue";


const typesMarking = ['Entrada', 'Entrada-Almoço', 'Saida-Almoço','Saida']
</script>