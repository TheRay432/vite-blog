<script setup lang="ts">
import { useModalStore } from './stores/modal/modal';

const modalStore = useModalStore();
</script>

<template>
  <NavBar />
  <router-view></router-view>
  <Modal v-if="modalStore.isModalOpen" />
</template>

<style scoped></style>
