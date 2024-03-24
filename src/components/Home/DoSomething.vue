<script setup lang="ts"></script>
<template>
  <div class="flex max-w-6xl flex-col mb-16 mx-auto px-4">
    <h1 class="text-center text-3xl font-bold">{{ $t('doSometing.label.title') }}</h1>
    <div class="flex mt-8 gap-x-3">
      <!-- 卡片1 -->
      <div
        class="flex flex-col items-center justify-start bg-white rounded-lg shadow-card py-4 px-2 mx-2 w-1/3 transition-all duration-500 ease-in-out hover:scale-[1.1]"
      >
        <i className="bi bi-cup-straw text-button-blue text-5xl my-4"></i>
        <h2 class="mb-2.5 text-2xl my-4">{{ $t('doSometing.label.card1.title') }}</h2>
        <p class="my-4 text-gray-500 text-center">{{ $t('doSometing.label.card1.content') }}</p>
      </div>
      <!-- 卡片2 -->
      <div
        class="flex flex-col items-center justify-start bg-white rounded-lg shadow-card py-4 px-2 mx-2 w-1/3 transition-all duration-500 ease-in-out hover:scale-[1.1]"
      >
        <i className="bi bi-cup-straw text-button-blue text-5xl my-4"></i>
        <h2 class="mb-2.5 text-2xl my-4">{{ $t('doSometing.label.card2.title') }}</h2>
        <p class="my-4 text-gray-500 text-center">
          {{ $t('doSometing.label.card2.content') }}
        </p>
      </div>
      <!-- 卡片3 -->
      <div
        class="flex flex-col items-center justify-start bg-white rounded-lg shadow-card py-4 px-2 mx-2 w-1/3 transition-all duration-500 ease-in-out hover:scale-[1.1]"
      >
        <i className="bi bi-cup-straw text-button-blue text-5xl my-4"></i>
        <h2 class="mb-2.5 text-2xl my-4">{{ $t('doSometing.label.card3.title') }}</h2>
        <p class="my-4 text-gray-500 text-center">
          {{ $t('doSometing.label.card3.content') }}
        </p>
      </div>
    </div>
  </div>
</template>
