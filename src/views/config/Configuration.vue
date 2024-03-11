<template>
<v-container>
  <v-row>
    <v-col>
      <v-text-field clearable label="Nome" variant="solo-filled"></v-text-field>
      <v-text-field clearable label="Cargo" variant="solo-filled"></v-text-field>

    </v-col>
    <v-col>
      <v-text-field clearable label="Email" variant="solo-filled"></v-text-field>
      <v-text-field clearable label="Password" variant="solo-filled"></v-text-field>

    </v-col>
  </v-row>

  <v-btn>
    entrou em: 20/12/2003
  </v-btn>

</v-container>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()
 onMounted(() => {
  console.log(route);
   })
</script>

<style lang="scss" scoped>

</style>