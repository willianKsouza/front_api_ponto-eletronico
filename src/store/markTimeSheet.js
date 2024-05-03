import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import { useProfile } from '@/store/app';

export const useTimeSheetStore = defineStore('timeSheet', () => {
  // const isMarkingTimeSheet = reactive({
  //   entrada: true,
  //   entrada_almoço: false,
  //   saida_almoço: false,
  //   saida: false,
  // });

  const typesMarkingBackend = {
    Entrada: 'in_time',
    'Entrada-Almoço': 'launch_in',
    'Saída-Almoço': 'launch_out',
    Saída: 'out_time',
  };
  const SheetInfo = reactive([
    {
      typeMarking: 'Entrada',
      hours: null,
      isMarking: false,
    },
    {
      typeMarking: 'Entrada-Almoço',
      hours: null,
      isMarking: false,
    },
    {
      typeMarking: 'Saída-Almoço',
      hours: null,
      isMarking: false,
    },
    {
      typeMarking: 'entrada',
      hours: null,
      isMarking: false,
    },
  ]);
  const store = useProfile();

  const securityData = localStorage.getItem('securityData');
  const securityDataParse = JSON.parse(securityData);

  function setSheetData(index, hours) {
    SheetInfo[index].hours = hours;
    SheetInfo[index].isMarking = !SheetInfo[index].isMarking;
  }

  async function fetchTimeSheetUserData() {
    if (securityDataParse.time_sheet_id) {
      try {
        console.log('Time_sheet_id', securityDataParse.time_sheet_id);
        const fetchUser = await fetch(import.meta.env.VITE_FIND_TIMESHEET, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Time_sheet_id': securityDataParse.time_sheet_id,
          },
        });
        console.log('fetchTimeSheetUserData', securityDataParse.time_sheet_id);
        return await fetchUser.json();
      } catch (error) {
        console.log(error);
      }
    }
    return null;
  }
  async function fetchMarkTimeSheet(typeMarking, currentTimeStamp, workLoad) {
    const fetchUser = await fetch(import.meta.env.VITE_MARK_TIMESHEET, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        time_sheet_id: securityDataParse.time_sheet_id,
        employee_id: securityDataParse.employee_id,
      },
      body: JSON.stringify({
        current_time_stamp: currentTimeStamp,
        type_marking: typeMarking,
        work_load: workLoad,
      }),
    });
    if (typeMarking == 'in_time') {
      securityDataParse['time_sheet_id'] =
        fetchUser.headers.get('Time_sheet_id');
      localStorage.setItem(
        'securityData',
        JSON.stringify(securityDataParse),
      );
    }

    console.log('1', securityDataParse);

    if (
      fetchUser.status == 200 &&
      fetchUser.statusText == 'OK' &&
      typeMarking == 'out_time'
    ) {
      securityDataParse['time_sheet_id'] = ""
      localStorage.setItem(
        'securityData',
        JSON.stringify(securityDataParse),
      );
      
    }
    return await fetchUser.json();
  }

  return {
    fetchTimeSheetUserData,
    fetchMarkTimeSheet,
    SheetInfo,
    setSheetData,
    typesMarkingBackend,
  };
});
