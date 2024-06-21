import uiData from "@czy/ui-config";
import { cloneDeep } from "lodash";

export const getUIMap = () => {
  const obj = {};
  Object.keys(uiData).forEach((item) => {
    const curObj = uiData[item];
    obj[curObj.key] = curObj.Comp;
  });
  return obj;
};

export const dataFormat = (element: any) => {
  const data = cloneDeep(element);
  data.Comp = data.key;
  return data;
};

export const listFormat = (list: any) => {
  return cloneDeep(list);
};
