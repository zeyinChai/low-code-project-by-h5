import { Desc } from "../common";

export interface BtnConfig {
  color: Desc<string>;
  backgroundColor?: Desc<string>;
}

const btnConfig: BtnConfig = {
  color: {
    title: "文字颜色",
    value: "",
  },
  backgroundColor: {
    title: "背景色",
    value: "",
  },
};

export default btnConfig;
