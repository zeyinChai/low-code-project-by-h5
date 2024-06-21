<template>
  <div class="box">
    <div class="header"><Header /></div>
    <div class="container">
      <div class="list"><List /></div>
      <iframe
        class="iframeEl"
        ref="iframeEl"
        :src="iframeLocation"
        width="375"
      ></iframe>
      <div class="config"><Config /></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from "../header/index.vue";
import List from "../list/index.vue";
import Config from "../config/index.vue";
import { onMounted, ref, watch } from "vue";
import { useStore } from "@/store";
import { listFormat } from "@/utils/format";
const store = useStore();
const iframeLocation = window.location.href + "about";

onMounted(() => {
  window.addEventListener("message", (data) => {
    // console.log("父接收到消息", data);
    const type = data.data.type;
    const curData = data.data.element;
    if (type === "setConfigSchema") {
      setConfigSchema(curData);
    }
    if (type === "removeElement") {
      removeItem(curData);
    }
    if (type === "changePosition") {
      store.list = curData;
    }
  });
});

watch(
  () => store.list,
  () => {
    const data = listFormat(store.list);
    fatherSend(data);
  },
  { deep: true }
);

const iframeEl = ref<any>(null);

const fatherSend = (data: any) => {
  iframeEl.value.contentWindow.postMessage(data, iframeLocation);
};

const setConfigSchema = (element: any) => {
  if (element.id === store.configSchema.id) return;
  const config = store.list.find((item: any) => item.id === element.id);
  if (config)
    return store.setConfigSchema({
      data: config.data || {},
      id: config.id,
      ...config.schema,
    });
  // 初始化表单数据
  const data: any = {};
  Object.keys(element.schema).forEach(
    (item) => (data[item] = element.schema[item].value)
  );
  const schema = { ...element.schema, id: element.id, data };
  store.setConfigSchema(schema);
};

const removeItem = (element: any) => {
  store.removeList(element);
  // 如果删除的元素 是正在配置的参数 则需要清空config列表
  if (element.id === store.configSchema.id) {
    store.configSchema = {};
  }
};
</script>

<style lang="scss" scoped>
.box {
  height: 100vh;
  width: 100%;
  .header {
    width: 100%;
    height: fit-content;
  }
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #f2eaea;
    .list {
      width: 300px;
      height: 100%;
    }
    .iframeEl {
      border: medium none;
    }
    .render {
      width: 600px;
      height: 100%;
    }
    .config {
      width: 300px;
      height: 100%;
      padding: 20px;
      border: 1px solid #eee;
    }
  }
}
</style>
