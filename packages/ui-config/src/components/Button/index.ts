import Button from "./index.vue";

import { markRaw } from "vue";

import ButtonSchema from "./schema";

export default {
  name: "按钮",
  key: "zy-button",
  Comp: markRaw(Button),
  schema: ButtonSchema,
};
