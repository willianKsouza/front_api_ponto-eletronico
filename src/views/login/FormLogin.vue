<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="12" md="6" sm="3">
        <v-card class="bg-orange-lighten-5" elevation="12">
          <v-card-title class="bg-orange-darken-1"> Login </v-card-title>
          <v-container>
            <v-form id="loginForm">
              <v-text-field name="email" label="Email" type="input"
                hint="Enter your Email to access this website"></v-text-field>
              <v-text-field name="password" class="mt-2" label="Password" type="input"
                hint="Enter your password to access this website"></v-text-field>
              <div class="d-flex justify-end">
                <v-btn tag="input" type="submit" value="Entrar" id="btnSubmit" class="bg-brown-darken-1 mt-2" size="large"
                  @click.prevent="check">Login</v-btn>
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
import { useRouter } from 'vue-router'
import { useProfile } from '@/store/app';
import Footer from "@/components/Footer.vue";



const router = useRouter()
function check() {
  const loginForm = document.getElementById("loginForm");
  const submit = document.getElementById("btnSubmit");
  const formData = new FormData(loginForm, submit);
  // as been blocked by CORS policy: Request header field credentials is not allowed by Access-Control-Allow-Headers in preflight response.
  fetch("http://localhost:3002/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials:'include',
    body: JSON.stringify({
      email: formData.get("email").trim(),
      password: formData.get("password").trim(),
    }),
  }).then((value) => {
    return value.json()
  }).then((data) => {
    console.log(data);
    if (data.auth) {
      return router.push({ name: 'Home' })
    }
    return router.push({ name: 'Login' })
  })
}


</script>

<style lang="scss" scoped></style>