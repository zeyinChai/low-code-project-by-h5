<template>
  <div class="content">
    <template v-if="!list.length">
      <el-empty description="暂无组件" />
    </template>
    <template v-else>
      <draggable :list="list" item-key="id" @end="dragEnd">
        <template #item="{ element }">
          <div class="list-group-item" @click="handleClick(element)">
            <div style="width: 100%; display: flex; justify-content: end">
              <Delete
                style="width: 18px; height: 18px; cursor: pointer"
                @click="handleRemove($event, element)"
              />
            </div>
            <component :is="element.Comp" :data="element.data" />
          </div>
        </template>
      </draggable>
    </template>
  </div>
</template>

<script lang="ts" setup>
import draggable from "vuedraggable";
import { onMounted, ref } from "vue";
import { getUIMap, dataFormat, listFormat } from "@/utils/format";
const list = ref<any[]>([]);

onMounted(() => {
  const uiMap = getUIMap();
  window.addEventListener("message", (data) => {
    const curData: any[] = data.data || [];
    curData?.forEach((item) => {
      item.Comp = uiMap[item.Comp];
    });
    list.value = curData;
  });
});

const handleClick = (element: any) => {
  send("setConfigSchema", dataFormat(element));
};

const handleRemove = (e: any, element: any) => {
  send("removeElement", dataFormat(element));
  e.stopPropagation();
};

const send = (type: string, element: any) => {
  window.parent.postMessage({ type, element }, window.location.href);
};

const dragEnd = () => {
  const data = listFormat(list.value);
  data.forEach((item: any) => {
    item.Comp = item.key;
  });
  send("changePosition", data);
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 15px;
  background-color: #f5f7fa;
  .list-group-item {
    padding: 10px;
    border: 1px solid #eee;
  }
  .sortable-chosen {
    opacity: 0.5;
  }
  .sortable-ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
}
</style>
