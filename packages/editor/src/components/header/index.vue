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
          <el-button>预览</el-button>
          <el-button type="primary" class="ml-2">发布</el-button>
        </div>
      </template>
    </el-page-header>
  </div>
</template>

<script lang="ts" setup>
import {} from "vue";
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding-top: 5px;
  background-color: #eee;
}
</style>
