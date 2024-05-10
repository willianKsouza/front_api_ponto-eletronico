<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="12" md="6" sm="3">
        <v-card class="bg-orange-lighten-5" elevation="12">
          <v-card-title class="bg-orange-darken-1">
            Recuperação de senha
          </v-card-title>
          <v-container>
            <v-form id="loginForm">
              <v-text-field
                name="email"
                label="Email"
                type="input"
                hint="Enter your Email to access this website"
              ></v-text-field>

              <div class="d-flex justify-space-between align-baseline">
                <p>{{ responseText }}</p>

                <v-btn
                v-if="!responseText"
                  tag="input"
                  type="submit"
                  value="Enviar"
                  id="btnSubmit"
                  class="bg-brown-darken-1 mt-2"
                  size="large"
                  rounded="lg"
                  @click.prevent="forgotPassword"
                ></v-btn>
              </div>
            </v-form>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <Footer></Footer>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Footer from '@/components/Footer.vue';
import { ref } from 'vue';
let responseText = ref();

const router = useRouter();
function forgotPassword() {
  const loginForm = document.getElementById('loginForm');
  const submit = document.getElementById('btnSubmit');
  const formData = new FormData(loginForm, submit);
  responseText.value = ' '
  fetch(import.meta.env.VITE_FORGOT_PASSWORD, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: formData.get('email').trim(),
    }),
  }).then(response => {
    if (response.status == 200 && response.statusText === 'OK') {
      responseText.value = 'Email enviado com sucesso, cheque sua caixa de entrada';
      setTimeout(() => {
        router.push({ name: 'Login' });
      }, 6000);
    }else {
        responseText.value = 'Tente novamente';
    }
  });
}
</script>

<style lang="scss" scoped></style>
