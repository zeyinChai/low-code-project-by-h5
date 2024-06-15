import { defineStore } from "pinia";
import uiData from "@czy/ui-config";

interface State {
  list: any[];
  configSchema: any;
  cacheConfigSchema: any[];
  [key: string]: any;
}

export const useStore = defineStore("editor", {
  state: (): State => {
    return {
      uiData,
      list: [],
      configSchema: {},
      cacheConfigSchema: [],
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
    setConfigSchema(schema: any) {
      this.configSchema = schema;
    },
    addCacheConfigSchema(schema: any) {
      this.cacheConfigSchema.push(schema);
    },
    setCacheConfigSchema(obj: any) {
      this.cacheConfigSchema.find((item, index) => {
        if (item.id === obj.id) {
          this.cacheConfigSchema.splice(index, 1, obj);
        }
      });
    },
    removeCacheConfigSchema(item: any) {
      const newList = this.cacheConfigSchema.filter(
        (listItem) => listItem.id !== item.id
      );
      this.cacheConfigSchema = newList;
    },
  },
});
