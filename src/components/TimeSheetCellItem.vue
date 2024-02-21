<template>
  <v-list class="bg-orange-lighten-5" v-if="showContent">
    <v-list-item>
      <v-container fluid>
        <v-row>
          <v-col sm="7" class="d-flex justify-space-around align-center rounded-pill bg-orange-lighten-3">
            <v-list-item-title>
              <slot></slot>
            </v-list-item-title>
            <p>{{ SheetInfo[props.cellData.index].hours }}</p>
            <v-btn color="brown-darken-1" @click="markCell" v-if="!SheetInfo[props.cellData.index].isMarking">Marcar</v-btn>
            <v-btn color="brown-darken-1" v-else="SheetInfo[props.cellData.index].isMarking">Marcado</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-list-item>
  </v-list>
  <v-list class="bg-orange-lighten-5" v-else="showContent">
    <v-list-item>
      <v-container fluid>
        <v-row>
          <v-col sm="7" class="d-flex justify-space-around align-center rounded-pill bg-orange-lighten-3">
            <v-list-item-title>
              erro ao marcar
            </v-list-item-title>
            <p>erro ao marcar</p>
            <v-btn color="brown-darken-1" @click="markCell">Marcado</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-list-item>
  </v-list>
</template>

<script setup>
import { useTimeSheetStore } from '@/store/markTimeSheet';
import getDate from '@/helpers/getDate'
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
const showContent = ref(true)
const store = useTimeSheetStore()
const { fetchMarkTimeSheet, setSheetData, typesMarkingBackend  } = store
const { SheetInfo } = storeToRefs(store)
const props = defineProps(['cellData'])
async function markCell() {

  console.log(typesMarkingBackend[props.cellData.mark]);
  fetchMarkTimeSheet(typesMarkingBackend[props.cellData.mark], getDate('fullDate'), 8)
    .then(response => {
      setSheetData(props.cellData.index ,getDate())
    })
    .catch(erro => {
      showContent.value = !showContent.value
    })

}

</script>

<style lang="scss" scoped></style>