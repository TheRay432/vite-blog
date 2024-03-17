<script setup lang="ts">
import { ButtonType } from '@/share/enum';
</script>
<template>
  <header class="sticky top-0 z-50 shadow-md">
    <div class="max-w-6xl flex justify-between items-center py-4 mx-auto">
      <!-- 標題 -->
      <div class="flex items-center text-button-blue text-2xl">
        <i className="bi bi-book-half mr-2"></i>
        <text-body-title>{{ $t('navbar.label.title') }}</text-body-title>
      </div>
      <!-- 功能選項 -->
      <div class="flex items-center">
        <!-- 搜尋 -->
        <div class="flex items-baseline mr-16">搜尋</div>
        <!-- 功能連結 -->
        <ul class="flex mr-10">
          <router-link to="/">
            <text-body2 class="font-bold">
              {{ $t('navbar.label.home') }}
            </text-body2>
          </router-link>
          <router-link to="/1">
            <text-body2 class="font-bold">
              {{ $t('navbar.label.post') }}
            </text-body2>
          </router-link>
          <router-link to="/2">
            <text-body2 class="font-bold">
              {{ $t('navbar.label.myPost') }}
            </text-body2>
          </router-link>
          <router-link to="/3">
            <text-body2 class="font-bold">
              {{ $t('navbar.label.write') }}
            </text-body2>
          </router-link>
        </ul>
        <!-- 登入註冊 -->
        <div class="flex gap-x-4">
          <ButtonPrimary
            :buttonType="ButtonType.Small"
            :dataOption="{ content: 'common.label.login' }"
          />
          <ButtonSuccess
            :buttonType="ButtonType.Small"
            :dataOption="{ content: 'common.label.register' }"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
ul a {
  @apply text-gray-500 inline-block relative mr-8;
  transition: 0.5s ease;
}
ul a:hover {
  @apply text-button-blue;
}
ul a::after {
  @apply absolute w-0 h-0.5 left-0 -bottom-2 bg-button-blue;
  content: '';
  transition: width 0.5s linear;
}
ul a:hover::after {
  @apply w-full;
}
ul a.navActive {
  @apply text-button-blue;
}
ul a.navActive::after {
  @apply absolute w-full h-0.5 left-0 -bottom-2 bg-button-blue;
  content: '';
}
</style>
