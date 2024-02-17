import { defineStore } from "pinia";
import { reactive } from "vue";

export const useTimeSheetStore = defineStore("timeSheet", () => {
    // const isMarkingTimeSheet = reactive({
  //   entrada: true,
  //   entrada_almoço: false,
  //   saida_almoço: false,
  //   saida: false,
  // });
  const SheetInfo = reactive([
    {
      typeMarking:'Entrada',
      hours:null,
      isMarking:true
    },
    {
      typeMarking:'Entrada-Almoço',
      hours:null,
      isMarking:true
    },
    {
      typeMarking:'Saída-Almoço',
      hours:null,
      isMarking:true
    },
    {
      typeMarking:'entrada',
      hours:null,
      isMarking:true
    }
  ]);

  function setSheetData(index, hours, boolean) {
    SheetInfo[index].hours = hours
    SheetInfo[index].isMarking = boolean
  }




  async function fetchTimeSheetUserData() {
    const fetchUser = await fetch(`http://localhost:3002/timesheet/`, {
      method: "GET",
      credentials:'include',
      headers: {
        "Content-Type": "application/json",
      }
    });

    return await fetchUser.json();
  }
  async function fetchMarkTimeSheet(typeMarking, currentTimeStamp, workLoad) {
    const fetchUser = await fetch("http://localhost:3002/timesheet", {
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

  return { fetchTimeSheetUserData, fetchMarkTimeSheet, SheetInfo, setSheetData };
});
