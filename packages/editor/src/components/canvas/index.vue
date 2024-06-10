<template>
  <div class="content">
    <template v-if="!store.list.length">
      <el-empty description="暂无组件" />
    </template>
    <draggable :list="store.list" item-key="id">
      <template #item="{ element }">
        <div class="list-group-item">
          <div style="width: 100%; display: flex; justify-content: end">
            <Delete
              style="width: 18px; height: 18px; cursor: pointer"
              @click="store.removeList(element)"
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
