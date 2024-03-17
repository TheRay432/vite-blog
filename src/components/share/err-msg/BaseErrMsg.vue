<script setup lang="ts">
import type { BaseErrMsgProps } from '@/share/interface';
import { ErrorMessage } from 'vee-validate';
const props = defineProps<BaseErrMsgProps>();
</script>
<template>
  <ErrorMessage class="text-red-500" :name="name" />
</template>
