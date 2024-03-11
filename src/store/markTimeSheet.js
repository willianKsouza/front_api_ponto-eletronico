import { defineStore } from "pinia";
import { computed, reactive } from "vue";

export const useTimeSheetStore = defineStore("timeSheet", () => {
    // const isMarkingTimeSheet = reactive({
  //   entrada: true,
  //   entrada_almoço: false,
  //   saida_almoço: false,
  //   saida: false,
  // });

  const typesMarkingBackend = {
    'Entrada': "in_time",
    'Entrada-Almoço': "launch_in",
    'Saída-Almoço': "launch_out",
    'Saída': "out_time"
  }
  const SheetInfo = reactive([
    {
      typeMarking:'Entrada',
      hours:null,
      isMarking:false
    },
    {
      typeMarking:'Entrada-Almoço',
      hours:null,
      isMarking:false
    },
    {
      typeMarking:'Saída-Almoço',
      hours:null,
      isMarking:false
    },
    {
      typeMarking:'entrada',
      hours:null,
      isMarking:false
    }
  ]);



  function setSheetData(index, hours) {
    SheetInfo[index].hours = hours
    SheetInfo[index].isMarking = !SheetInfo[index].isMarking
  }




  async function fetchTimeSheetUserData() {
    try {
      const fetchUser = await fetch(`https://api-ponto-eletronico-deploy.onrender.com/timesheet/`, {
        method: "GET",
        credentials:'include',
        headers: {
          "Content-Type": "application/json",
        }
      });
  
      return await fetchUser.json();
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchMarkTimeSheet(typeMarking, currentTimeStamp, workLoad) {
    const fetchUser = await fetch("https://api-ponto-eletronico-deploy.onrender.com/timesheet", {
      method: "POST",
      credentials:'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        current_time_stamp:currentTimeStamp,
        type_marking:typeMarking,
        work_load:workLoad,
      }) 
    });

    return await fetchUser.json();
  }

  return { fetchTimeSheetUserData, fetchMarkTimeSheet, SheetInfo, setSheetData, typesMarkingBackend };
});
