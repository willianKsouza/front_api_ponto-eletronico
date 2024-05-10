<template>
  <v-file-input
    @change="uploadFile"
    name="avatar"
    variant="solo-filled"
    label="File input"
  ></v-file-input>
</template>

<script setup>
const apiUrl = import.meta.env.VITE_UPLOAD_FILE;
function uploadFile(event) {
  const securityData = localStorage.getItem('securityData');
  const securityDataParse = JSON.parse(securityData);
  const formData = new FormData();
  formData.append('avatar', event.target.files[0]);

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      Employee_id: securityDataParse.employee_id,
    },
    body:formData,
  })
    .then(response => console.log('deu certo', response))
    .catch(error => {
      console.log('deu erro');
      console.log(error);
    });
}
</script>
