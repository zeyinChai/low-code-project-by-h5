import { Desc } from "../common";

export interface ImgConfig {
  src: Desc<string>;
  link?: Desc<string>;
}

const config: ImgConfig = {
  src: {
    title: "资源地址",
    value: "",
  },
  link: {
    title: "跳转链接",
    value: "",
  },
};

export default config;
