<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field
          clearable
          label="Nome"
          variant="solo-filled"
        ></v-text-field>
        <v-text-field
          clearable
          label="Cargo"
          variant="solo-filled"
        ></v-text-field>
          <v-file-input @change="uploadFile" variant="solo-filled" accept="image/png, image/jpeg" label="File input"></v-file-input>
      </v-col>
      <v-col>
        <v-text-field
          clearable
          label="Email"
          variant="solo-filled"
        ></v-text-field>
        
        <v-text-field
          clearable
          label="Password"
          variant="solo-filled"
        ></v-text-field>

      </v-col>
    </v-row>
    <v-btn> entrou em: 20/12/2003 </v-btn>
  </v-container>
</template>

<script setup>
import { onMounted } from 'vue';
const apiUrl = import.meta.VITE_UPLOAD_FILE
const uploadFile = (event) => console.log(event.target.files);
onMounted(() => {



});
</script>

<style lang="scss" scoped></style>
