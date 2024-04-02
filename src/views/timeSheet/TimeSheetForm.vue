
<template>
  <div>
    <v-list class="bg-orange-lighten-5">
      <TimeSheetCellItem v-for="(mark, index) in typesMarking" :key="mark" :cellData="{ index, mark }">{{ mark }}
      </TimeSheetCellItem>
    </v-list>
  </div>
</template>

<script setup>
import TimeSheetCellItem from "@/components/TimeSheetCellItem.vue";
import { useTimeSheetStore } from '@/store/markTimeSheet'
import { onMounted } from "vue";
import { storeToRefs } from 'pinia';

import formatarDate from "@/helpers/formatDate";
const typesMarking = ['Entrada', 'Entrada-Almoço', 'Saída-Almoço', 'Saída']
const store = useTimeSheetStore()
const { fetchTimeSheetUserData } = store
const { SheetInfo } = storeToRefs(store)

onMounted(() => {
  async function getTimeSheetData() {
    await fetchTimeSheetUserData()
      .then(data => {

        const { in_time, launch_in, launch_out, out_time } = data.timeSheetEmployee
        const hoursTimeSheet = [in_time, launch_in, launch_out, out_time]

        SheetInfo.value.map((item, index) => {
          item.hours = formatarDate(hoursTimeSheet[index])
        })
      })
      .catch((error => {
        console.log(error);
        console.log('timehseetform.vue folha de ponto veio vazia');
      }))
  }
  getTimeSheetData()

})


</script>

