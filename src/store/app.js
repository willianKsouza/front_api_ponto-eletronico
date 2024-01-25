// Utilities
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useProfile = defineStore("profile", () => {
  const profile = ref({
    name: null,
    entrada: true,
    entrada_almoço: false,
    saida_almoço: false,
    saida: false,
  });

  const showProfile = computed(() => profile.value)

  async function fetchProfileData(email) {
    const fetchUser = await fetch("http://localhost:3002/searchemployee", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });

    return await fetchUser.json();
  }

  return { showProfile, fetchProfileData };
});
