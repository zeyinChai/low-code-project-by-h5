<template>
  <div class="content">
    <el-page-header :icon="null">
      <template #content>
        <div class="flex items-center">
          <el-avatar
            :size="32"
            class="mr-3"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <span>H5页面搭建工作台</span>
        </div>
      </template>
      <template #extra>
        <div class="flex items-center">
          <el-button @click="openPreview">预览</el-button>
          <el-button type="primary" class="ml-2">发布</el-button>
        </div>
      </template>
    </el-page-header>
    <el-dialog v-model="dialogVisible" title="预览" width="500" class="model">
      <div class="preview">
        <iframe
          class="iframeEl"
          ref="iframeEl"
          :src="iframeLocation"
          width="375"
        ></iframe>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">确认</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "@/store";
import { getUIMap, listFormat } from "@/utils/format";
import { ref } from "vue";
const store = useStore();
const dialogVisible = ref(false);
const iframeLocation = window.location.href + "about";
const iframeEl = ref<any>(null);

const openPreview = () => {
  dialogVisible.value = true;
  setTimeout(() => {
    iframeEl?.value?.contentWindow?.postMessage(
      listFormat(store?.list),
      iframeLocation
    );
  }, 1000);
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding-top: 5px;
  background-color: #eee;
}
.model{
  width: 100%;
  height: fit-content;
}
.preview {
  /* width: 750px; */
  height: 400px;
  margin: 0 auto;
  text-align: center;
  .iframeEl {
    height: 100%;
    border: medium none;
  }
}
</style>
