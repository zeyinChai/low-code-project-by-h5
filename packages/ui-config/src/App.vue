<template>
  <Button :data="{ a: 123, b: 456 }" a="123" />
  <ImageComp :data="{ a: 123, b: 312 }" a="456" />
</template>

<script lang="ts" setup>
import Button from "./components/Button/index.vue";
import ImageComp from "./components/Image/index.vue";
</script>

<style lang="scss" scoped>
.box {
  width: 375px;
  font-size: 20px;
  background-color: red;
}
</style>
