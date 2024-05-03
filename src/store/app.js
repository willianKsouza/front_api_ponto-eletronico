// Utilities
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useProfile = defineStore('profile', () => {
  let perfilInfo = ref({});

  function addPerfil(obj) {
    perfilInfo.value = obj;
  }
  
  const computedPerfilInfo = computed(() => perfilInfo.value);



  async function fetchProfileData() {


    try {
    
      const securityData = localStorage.getItem('securityData');
      const securityDataParse = JSON.parse(securityData);
      if (securityDataParse.employee_id) {
        const fetchEmployee = await fetch(import.meta.env.VITE_FIND_EMPLOYEE, {
          headers: {
            'Content-Type': 'application/json',
            employee_id: securityDataParse.employee_id,
          },
        });
        return await fetchEmployee.json();
      }
    } catch (error) {
      console.log(error);
      console.log('deu erro no fetchProfileData');
    }
  }

  return { fetchProfileData, addPerfil, computedPerfilInfo, perfilInfo };
});
