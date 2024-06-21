<template>
  <div class="content">
    <div class="demo-collapse">
      <el-collapse>
        <el-collapse-item title="基本组件" name="1">
          <div class="component-list">
            <div
              class="component"
              v-for="value in store.uiData"
              :key="value?.name"
              @click="handleClick(value)"
            >
              {{ value?.name }}
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "@/store";
const store = useStore();

const handleClick = (item: any) => {
  store.addList({ ...item, id: Date.now(), Comp: item.key });
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  padding-left: 10px;
  .demo-collapse {
    ::v-deep(.ed-el-collapse-item .ed-el-collapse-item__header) {
      font-weight: bolder;
      font-size: 16px;
    }
    .component-list {
      width: 100%;
      height: fit-content;
      display: flex;
      flex-wrap: wrap;
      .component {
        width: 50px;
        height: 50px;
        margin: 10px;
        box-sizing: border-box;
        border: 1px solid red;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
