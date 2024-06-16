import { Desc } from "../common";

export interface ImgConfig {
  src: Desc<string>;
  link?: Desc<string>;
  isOpen: Desc<boolean>;
}

const config: ImgConfig = {
  src: {
    label: "资源地址",
    value: "",
    type: "string",
    validator:
      "if(value === '123'){callback(new Error('输入的内容不能是123'))} else{callback()}",
    require: true,
    onChange: "$ctx.isOpen=true",
    attributes: {},
  },
  link: {
    label: "跳转链接",
    value: "",
    type: "string",
  },
  isOpen: {
    label: "是否打开",
    value: false,
    type: "boolean",
    disabled: true,
  },
};

export default config;
