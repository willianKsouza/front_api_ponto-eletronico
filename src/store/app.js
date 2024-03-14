// Utilities
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProfile = defineStore("profile", () => {


  let perfilInfo = ref({})


  async function fetchProfileData() {

    try {
      const fetchUser = await fetch(import.meta.env.VITE_FIND_EMPLOYEE, {
        method:'GET',
        credentials:'include',
  
      });

      return await fetchUser.json();
    } catch (error) {
      console.log('deu erro no fetchProfileData');
    }
  }




  return { fetchProfileData, perfilInfo };
});
