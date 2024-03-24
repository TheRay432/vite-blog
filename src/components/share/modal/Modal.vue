<script setup lang="ts">
import { useModalStore } from '@/stores/modal/modal';
import { storeToRefs } from 'pinia';

const modalStore = useModalStore();
const { modalConfig } = storeToRefs(modalStore);
</script>

<template>
  <div class="modal-bg" :class="{ 'bg-active': modalStore.isModalOpen }">
    <div
      class="modal"
      :class="{
        'modal-active': modalStore.isModalOpen,
        [modalConfig.borderColor]: modalStore.isModalOpen,
        'border-t-4': modalConfig.borderColor,
      }"
    >
      <div class="w-full">
        <div class="w-full text-end">
          <i
            className="bi bi-x-circle cursor-pointer text-2xl"
            @click="modalStore.closeModal()"
          ></i>
        </div>
        <component :is="modalStore.modalComponent" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-bg {
  @apply fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 invisible opacity-0 z-[120] flex justify-center items-center;
  &.bg-active {
    @apply visible opacity-100;
  }
}
.modal {
  @apply bg-white w-[30%] shadow-card transform scale-50 flex justify-center items-center flex-col p-8 transition-all duration-500;
  &.modal-active {
    @apply scale-100;
  }
}
</style>
