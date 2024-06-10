<template>
  <div class="box">
    <div class="header"><Header /></div>
    <div class="container">
      <div class="list"><List /></div>
      <div class="render"><Render /></div>
      <div class="config"><Config /></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from "../header/index.vue";
import List from "../list/index.vue";
import Config from "../config/index.vue";
import Render from "../canvas/index.vue";
import {} from "vue";
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
    .list {
      flex: 1;
      height: 100%;
    }
    .render {
      width: 600px;
      height: 100%;
    }
    .config {
      flex: 1;
      height: 100%;
    }
  }
}
</style>
