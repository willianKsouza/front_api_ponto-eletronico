// Utilities
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useProfile = defineStore("profile", () => {
  const profile = reactive({
    name: null,
    entrada: true,
    entrada_almoço: false,
    saida_almoço: false,
    saida: false,
  });

const fetchProfileData = async (email) => {
    return await fetch("http://localhost:3002/searchemployee", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((value) => {
        return value.json();
      })
      .then((value) => {
        console.log(value);
      });
  }
  return {profile, fetchProfileData}
});


