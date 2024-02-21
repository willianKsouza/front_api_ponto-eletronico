<template>
  <div>
    <v-navigation-drawer :expand-on-hover="vNavHover" rail class="bg-orange-lighten-5" elevation="3"
      mobile-breakpoint="sm" v-model="drawer">
      <v-list>
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" :title="profileData.name_employee"
          :subtitle="profileData.email"></v-list-item>
        <v-divider></v-divider>
        <v-list-item prepend-icon="mdi-account-multiple" title="Time Sheet" value="#naosei1" to="/timesheet">
        </v-list-item>
        <v-list-item prepend-icon="mdi-account-multiple" title="Configuration" value="#naosei2"
          to="/configuration"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="orange-darken-1" elevation="5">
      <v-app-bar-title>Time Sheet Corp.</v-app-bar-title>
      <v-app-bar-nav-icon v-if="width <= 600" variant="text" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main class="bg-orange-lighten-5">
      
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from "vue";
import { useDisplay } from "vuetify";
import router from "@/router";
import { useProfile } from "@/store/app";


const { width } = useDisplay();
const vNavHover = ref(true);
const drawer = ref(true);
let profileData = reactive({})


onMounted(() => {
  const { fetchProfileData } = useProfile()
  async function fetchUser() {
    const response = await fetchProfileData()
    const { name_employee, email } = response.employee
    profileData = { name_employee, email }
  }
  fetchUser()

  router.push({ name: 'TimeSheetForm' })

})
</script>
