<script setup lang="ts">
import infoImage from '@/assets/image/info.jpg';
</script>
<template>
  <div class="flex max-w-6xl items-center pt-8 mb-8 px-4 mx-auto">
    <img :src="infoImage" class="w-1/2 pr-2 max-w-full h-auto" />
    <div class="flex flex-col pl-2 w-1/2">
      <h1 class="text-3xl">{{ $t('life.label.title') }}!</h1>
      <p class="text-gray-500 leading-[3.25]">
        {{ $t('life.label.content.1') }}
        <br />
        {{ $t('life.label.content.2') }}
        <br />
        {{ $t('life.label.content.3') }}
        <br />
        {{ $t('life.label.content.4') }}
      </p>
    </div>
  </div>
</template>
