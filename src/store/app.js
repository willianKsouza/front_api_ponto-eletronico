// Utilities
import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

export const useProfile = defineStore("profile", () => {


  async function fetchProfileData() {
    const fetchUser = await fetch("http://localhost:3002/findemployee", {
      method:'GET',
      credentials:'include',

    });

    return await fetchUser.json();
  }




  return { fetchProfileData };
});
