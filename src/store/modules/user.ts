import { defineStore } from "pinia";

export const useUserStore = defineStore({
  // id 必填，且需要唯一
  id: "user",
  state: () => {
    return {
      name: "Administrator",
    };
  },
  actions: {
    updateName(name: string): void {
      this.name = name;
    },
  },
});
