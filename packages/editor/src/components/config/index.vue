<template>
  <div class="content">
    <template v-if="Object.keys(form).length">
      <el-form
        ref="ruleFormRef"
        style="max-width: 100%"
        :model="form"
        status-icon
        label-width="auto"
        label-position="top"
      >
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            提交
          </el-button>
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
        <template
          v-for="(item, index) in Object.keys(configSchema)"
          :key="index"
        >
          <template v-if="configSchema[item].type === 'string'">
            <el-form-item :label="configSchema[item].label" :prop="item">
              <el-input
                v-model="form[item]"
                :disabled="configSchema[item].disabled"
                @input="handleFormChange(configSchema[item].onChange)"
              />
            </el-form-item>
          </template>
          <template v-if="configSchema[item].type === 'boolean'">
            <el-form-item :label="configSchema[item].label" :prop="item">
              <el-switch
                v-model="form[item]"
                :disabled="configSchema[item].disabled"
              />
            </el-form-item>
          </template>
        </template>
      </el-form>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { watch, ref } from "vue";
import { useStore } from "@/store";
import { storeToRefs } from "pinia";
import type { FormInstance } from "element-plus";
const store = useStore();
const form = ref<any>({});
const ruleFormRef = ref<FormInstance>();
const { configSchema } = storeToRefs(store);
watch(
  () => configSchema.value,
  () => {
    form.value = {};
    Object.keys(configSchema.value).forEach((item: any) => {
      if (item === "id") return;
      form.value[item] = configSchema.value.data?.[item];
    });
  },
  {
    deep: true,
  }
);
const handleFormChange = (code: string) => {
  if (!code) return;
  const $ctx = form.value;
  const cb = new Function("$ctx", code);
  cb($ctx);
};
const submitForm = (formEl: FormInstance | undefined) => {
  store.setCacheConfigSchema({
    ...configSchema.value,
    data: form.value,
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  padding-top: 10px;
}
</style>
