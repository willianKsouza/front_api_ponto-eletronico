<template>
  <div>
    <v-navigation-drawer
      :expand-on-hover="vNavHover"
      rail
      class="bg-orange-lighten-5"
      elevation="3"
      mobile-breakpoint="sm"
      v-model="drawer"
    >
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          title="Sandra Adams"
          subtitle="sandra_a9@gmailcom"
        ></v-list-item>
        <v-divider></v-divider>
        <v-list-item
          prepend-icon="mdi-account-multiple"
          title="Time Sheet"
          value="#naosei1"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account-multiple"
          title="Configuration"
          value="#naosei2"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="orange-darken-1" elevation="5">
      <v-app-bar-title>Application2</v-app-bar-title>
      <v-app-bar-nav-icon
        v-if="width <= 600"
        variant="text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main class="bg-orange-lighten-5">
      <router-view />
    </v-main>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useDisplay } from "vuetify";
import { useRoute } from "vue-router";
import { useProfile } from "@/store/app";
import { storeToRefs } from "pinia";
const { width } = useDisplay();
const vNavHover = ref(true);
const drawer = ref(true);
const route = useRoute();


onMounted(() => {
  const store = useProfile
  const { profile, fetchProfileData } = storeToRefs(store)

  console.log(profile,fetchProfileData);
})
</script>
