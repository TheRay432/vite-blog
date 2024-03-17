<script setup lang="ts">
import { ButtonType } from '@/share/enum';
</script>
<template>
  <section class="imgBg">
    <div class="flex flex-col justify-start items-center m-auto">
      <h1 class="text-white text-7xl">
        {{ $t('navbar.label.feel.title.1') }}
        <span class="text-red-500">{{ $t('navbar.label.feel.title.2') }}</span>
      </h1>
      <p class="text-white text-3xl my-8">
        {{ $t('navbar.label.feel.content') }}
      </p>
      <ButtonPost
        :button-type="ButtonType.Large"
        :data-option="{ content: 'navbar.label.feel.goToPost' }"
      />
    </div>
  </section>
</template>
<style scoped lang="scss">
.imgBg {
  @apply w-full h-[40rem] bg-cover bg-bottom flex;
  background-image: url('@/assets/image/home_bg.jpg');
}
</style>
