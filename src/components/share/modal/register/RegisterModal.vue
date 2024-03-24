<script setup lang="ts">
import { ButtonType, InputLength } from '@/share/enum';
const a = ref('');
</script>
<template>
  <div class="w-full">
    <BaseForm v-slot="{ errors }">
      <ButtonFill
        :button-type="ButtonType.Large"
        :data-option="{ content: 'register.label.button.upload', leftIcon: 'bi bi-card-image' }"
      ></ButtonFill>
      <!-- 姓名 -->
      <div class="my-4">
        <!-- <label for="userName">{{ $t('register.label.useranme') }}</label> -->
        <BaseInput
          :input-length="InputLength.Full"
          :name="'userName'"
          :placeholder="$t('register.label.placeHolder.userName')"
          :errors="errors"
          v-model="a"
        />
      </div>
      <!-- 信箱 -->
      <div class="my-4">
        <label for="userName">{{ $t('register.label.email') }}</label>
        <BaseInput
          :input-length="InputLength.Full"
          :name="'email'"
          :placeholder="$t('register.label.placeHolder.email')"
          :errors="errors"
        />
      </div>
      <!-- 密碼 -->
      <div class="my-4">
        <label for="userName">{{ $t('register.label.password') }}</label>
        <BaseInput
          :input-length="InputLength.Full"
          :name="'password'"
          :placeholder="$t('register.label.placeHolder.password')"
          :errors="errors"
        />
      </div>
    </BaseForm>
  </div>
</template>
<style scoped lang="scss"></style>
