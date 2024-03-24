<script setup lang="ts">
import { ButtonType } from '@/share/enum';
import type { ButtonPrimaryProps } from '@/share/interface';

const props = withDefaults(defineProps<ButtonPrimaryProps>(), {
  /** 按鈕大小 */
  buttonType: ButtonType.Normal,
});
const emit = defineEmits<{
  /** 按鈕點擊事件 */
  clickEvent: [];
}>();
</script>
<template>
  <button
    class="text-button-green border border-button-green rounded-md py-2 px-3 flex items-center justify-between transition ease-in hover:bg-button-green hover:text-white"
    :class="{
      small: buttonType === ButtonType.Small,
      normal: buttonType === ButtonType.Normal,
      large: buttonType === ButtonType.Large,
    }"
    @click="$emit('clickEvent')"
  >
    <div>
      <i class="text-lg" :class="dataOption.leftIcon" v-if="dataOption.leftIcon"></i>
    </div>
    <text-body2>{{ $t(dataOption.content) }}</text-body2>
    <div>
      <i class="text-lg" :class="dataOption.rightIcon" v-if="dataOption.rightIcon"> </i>
    </div>
  </button>
</template>

<style scoped lang="scss">
.small {
  @apply w-24;
}
.normal {
  @apply w-32;
}
.large {
  @apply w-64;
}
</style>
