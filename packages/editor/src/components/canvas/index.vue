<template>
  <div class="content">
    <template v-if="!store.list.length">
      <el-empty description="暂无组件" />
    </template>
    <draggable :list="store.list" item-key="id">
      <template #item="{ element }">
        <div class="list-group-item" @click="handleClick(element)">
          <div style="width: 100%; display: flex; justify-content: end">
            <Delete
              style="width: 18px; height: 18px; cursor: pointer"
              @click="handleRemove($event, element)"
            />
          </div>
          <component :is="element.Comp" />
        </div>
      </template>
    </draggable>
  </div>
</template>

<script lang="ts" setup>
import draggable from "vuedraggable";
import { useStore } from "@/store";
const store = useStore();

const handleClick = (element: any) => {
  if (element.id === store.configSchema.id) return;
  const config = store.cacheConfigSchema.find(
    (item: any) => item.id === element.id
  );
  if (config) return store.setConfigSchema(config);
  // 初始化表单数据
  const data: any = {};
  Object.keys(element.schema).forEach(
    (item) => (data[item] = element.schema[item].value)
  );
  const schema = { ...element.schema, id: element.id, data };
  store.addCacheConfigSchema(schema);
  store.setConfigSchema(schema);
};

const handleRemove = (e: any, element: any) => {
  store.removeList(element);
  store.removeCacheConfigSchema(element);
  // 如果删除的元素 是正在配置的参数 则需要清空config列表
  if (element.id === store.configSchema.id) {
    store.configSchema = {};
  }
  e.stopPropagation();
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
