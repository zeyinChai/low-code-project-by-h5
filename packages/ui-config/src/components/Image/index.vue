<template>
  <div>Image456</div>
  <el-button primary>按钮</el-button>
  <div>{{ JSON.stringify(props) }}</div>
</template>

<script lang="ts" setup>
import {} from "vue";
const props = defineProps<{ data: any; a: string }>();
console.log(props);
</script>

<style lang="scss" scoped></style>
