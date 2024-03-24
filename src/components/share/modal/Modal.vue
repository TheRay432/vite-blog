<script setup lang="ts">
import { useModalStore } from '@/stores/modal/modal';

const modalStore = useModalStore();
</script>

<template>
  <div class="modal-bg">
    <component :is="modalStore.modalComponent" />
  </div>
</template>

<style scoped lang="scss">
.modal-bg {
  @apply fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[120] flex justify-center items-center;
}
.bg-active {
  @apply visible opacity-100;
}
</style>
