import { defineStore } from "pinia";
import uiData from "@czy/ui-config";

export const useStore = defineStore("editor", {
  state: () => {
    return {
      uiData,
      list: [],
    };
  },
  actions: {
    addList(item: any) {
      this.list.push(item);
    },
    removeList(item: any) {
      const newList = this.list.filter((listItem) => listItem.id !== item.id);
      this.list = newList;
    },
  },
});
