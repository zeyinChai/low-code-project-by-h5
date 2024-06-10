import Image from "./index.vue";

import ImageSchema from "./schema";

import { markRaw } from "vue";

export default {
  name: "图片",
  key: "zy-image",
  schema: ImageSchema,
  Comp: markRaw(Image),
};
