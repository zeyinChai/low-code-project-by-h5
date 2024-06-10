<template>
  <div class="buttonBox">
    {{ num }}
    <button @click="handleClick()">click</button>
    <el-button primary>按钮</el-button>
  </div>
</template>

<script lang="ts" setup name="zy-button">
import { ref } from "vue";
const num = ref(0);

const handleClick = () => {
  console.log("click");
  num.value = num.value + 1;
};
</script>

<style lang="scss" scoped>
.buttonBox {
  width: 100%;
  height: 30px;
  font-size: 20px;
  background-color: blue;
  color: yellow;
  ::v-deep(.el-button) {
    background-color: black;
  }
}
</style>
