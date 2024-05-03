<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="12" md="6" sm="3">
        <v-card class="bg-orange-lighten-5" elevation="12">
          <v-card-title class="bg-orange-darken-1"> Login </v-card-title>
          <v-container>
            <v-form id="loginForm">
              <v-text-field
                name="email"
                label="Email"
                type="input"
                hint="Enter your Email to access this website"
              ></v-text-field>
              <v-text-field
                name="password"
                class="mt-2"
                label="Password"
                type="input"
                hint="Enter your password to access this website"
              ></v-text-field>
              <div class="d-flex justify-end">
                <v-btn
                  tag="input"
                  type="submit"
                  value="Entrar"
                  id="btnSubmit"
                  class="bg-brown-darken-1 mt-2"
                  size="large"
                  @click.prevent="check"
                  >Login</v-btn
                >
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
import { useProfile } from '@/store/app';
import Footer from '@/components/Footer.vue';
const store = useProfile();



const router = useRouter();
function check() {
  const loginForm = document.getElementById('loginForm');
  const submit = document.getElementById('btnSubmit');
  const formData = new FormData(loginForm, submit);

  fetch(import.meta.env.VITE_API_LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: formData.get('email').trim(),
      password: formData.get('password').trim(),
    }),
  }).then(response => {
    console.log(response);
    const securityData = {
      token: response.headers.get('Token'),
      auth: response.headers.get('Auth'),
      employee_id: response.headers.get('Employee_id'),
      time_sheet_id: response.headers.get('Time_sheet_id'),
      function_employee: response.headers.get('Function_employee'),
      name_employee: response.headers.get('Name_employee'),
      email: response.headers.get('Email'),
    };
    store.addPerfil(securityData)
    if (securityData.auth) {
      console.log('entrou no if do securityData.auth', securityData.auth);
      localStorage.setItem('securityData', JSON.stringify(securityData));
      router.push({ name: 'Home' });
    } else {
      router.push({ name: 'Login' });
    }
  });
}

</script>

<style lang="scss" scoped></style>
