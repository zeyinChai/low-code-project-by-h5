import { defineStore } from "pinia";
import uiData from "@czy/ui-config";

interface State {
  list: any[];
  configSchema: any;
  [key: string]: any;
}

export const useStore = defineStore("editor", {
  state: (): State => {
    return {
      uiData,
      list: [],
      configSchema: {},
    };
  },
  actions: {
    addList(item: any) {
      this.list.push(item);
    },
    addListData(id: any, data: any) {
      this.list.find((item, index) => {
        if (id === item.id) {
          this.list.splice(index, 1, { ...item, data });
        }
      });
    },
    removeList(item: any) {
      const newList = this.list.filter((listItem) => listItem.id !== item.id);
      this.list = newList;
    },
    setConfigSchema(schema: any) {
      this.configSchema = schema;
    },
  },
});
