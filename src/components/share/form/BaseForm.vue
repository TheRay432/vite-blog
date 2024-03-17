<script setup lang="ts">
import { Form as VForm } from 'vee-validate';

const emit = defineEmits(['submitEvent']);

function handelSubmit(): void {
  emit('submitEvent');
}
</script>
<template>
  <v-form @submit="handelSubmit">
    <slot></slot>
  </v-form>
</template>
