// Utilities
import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

export const useProfile = defineStore("profile", () => {


  async function fetchProfileData() {

    try {
      const fetchUser = await fetch("https://api-ponto-eletronico-deploy.onrender.com/findemployee", {
        method:'GET',
        credentials:'include',
  
      });

      return await fetchUser.json();
    } catch (error) {
      console.log('deu erro no fetchProfileData');
    }
  }




  return { fetchProfileData };
});
