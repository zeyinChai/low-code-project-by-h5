import { Desc } from "../common";

export interface BtnConfig {
  color: Desc<string>;
  backgroundColor?: Desc<string>;
}

const btnConfig: BtnConfig = {
  color: {
    label: "文字颜色",
    value: "",
    type: "string",
  },
  backgroundColor: {
    label: "背景色",
    value: "",
    type: "string",
  },
};

export default btnConfig;
