
import { defineStore } from "pinia";
import { ref } from "vue";

export const useMarkSheetStore = defineStore("timeSheet", () => {
  const marking = ref(false);

  return { marking };
});
