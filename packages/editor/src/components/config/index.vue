<template>
  <div class="content">
    <template v-if="Object.keys(form).length">
      <el-form
        ref="ruleFormRef"
        style="max-width: 100%"
        :model="form"
        :rules="rules"
        status-icon
        label-width="auto"
        label-position="top"
      >
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            提交
          </el-button>
          <el-button @click="resetForm(ruleFormRef)">重置为初始状态</el-button>
        </el-form-item>
        <template v-for="item in Object.keys(configSchema)" :key="item">
          <template v-if="configSchema[item].type === 'string'">
            <el-form-item
              :label="configSchema[item].label"
              :prop="item"
              :required="configSchema[item].require"
            >
              <el-input
                v-model="form[item]"
                :disabled="configSchema[item].disabled"
                @input="handleFormChange(configSchema[item].onChange)"
              />
            </el-form-item>
          </template>
          <template v-if="configSchema[item].type === 'boolean'">
            <el-form-item
              :label="configSchema[item].label"
              :prop="item"
              :required="configSchema[item].require"
            >
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
import { FormInstance, ElMessage } from "element-plus";

const store = useStore();
const form = ref<any>({});
const rules = ref<any>({});
const ruleFormRef = ref<FormInstance>();
const { configSchema } = storeToRefs(store);
watch(
  () => configSchema.value,
  () => {
    form.value = {};
    rules.value = {};
    Object.keys(configSchema.value).forEach((item: any) => {
      if (item === "id" || item === "data") return;
      form.value[item] = configSchema.value.data?.[item];
      if (configSchema.value[item].validator) {
        const validator = new Function(
          "rule",
          "value",
          "callback",
          configSchema.value[item].validator
        );
        rules.value[item] = [{ validator, trigger: "blur" }];
      }
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
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      ElMessage({
        message: "提交成功!",
        type: "success",
        plain: true,
      });
      store.addListData(configSchema.value.id, form.value);
    } else {
      ElMessage({
        message: "提交失败，请检查表单项是否有误",
        type: "error",
        plain: true,
      });
    }
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
