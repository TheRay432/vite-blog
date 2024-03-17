<script setup lang="ts">
import { InputLength, InputType } from '@/share/enum';
import type { BaseInputProps } from '@/share/interface';
import { Field as VField } from 'vee-validate';

const props = withDefaults(defineProps<BaseInputProps>(), {
  /** input長度 */
  inputLength: InputLength.Normal,
  /** 預設顯示文字 */
  placeholder: '請輸入欄位',
  /** input類型 */
  inputType: InputType.Text,
});
const model = defineModel<string>();
</script>

<template>
  <div class="flex flex-col">
    <v-field
      class="px-4 py-2 rounded-md border border-gray-300 outline-none focus:ring-blue-500 focus:border-blue-300 relative"
      :class="{
        small: inputLength === InputLength.Small,
        normal: inputLength === InputLength.Normal,
        large: inputLength === InputLength.Large,
      }"
      :type="inputType"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :rules="rules"
      v-model="model"
      autocomplete="off"
    />
    <BaseErrMsg :name="name" />
  </div>
</template>

<style scoped>
.small {
  @apply w-32;
}
.normal {
  @apply w-64;
}
.large {
  @apply w-96;
}
</style>
