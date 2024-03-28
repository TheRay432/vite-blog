<script setup lang="ts">
import { ButtonType, InputLength, InputType } from '@/share/enum';
import { RegisterForm } from './class';
const userInfo = ref<RegisterForm>(new RegisterForm());
function handleRegister(data: RegisterForm): void {
  console.log('check data', data);
}
</script>
<template>
  <div class="w-full">
    <BaseForm @submit-event="handleRegister" v-slot="{ errors }">
      <!-- 上傳圖片 -->
      <div class="my-4 flex flex-col gap-y-2">
        <label for="profilePicture">{{ $t('register.label.button.upload') }}</label>
        <BaseInput
          style="display: none"
          :name="'profilePicture'"
          :input-type="InputType.File"
          :errors="errors"
          v-model="userInfo.profilePicture"
        />
      </div>
      <!-- 姓名 -->
      <div class="my-4 flex flex-col gap-y-2">
        <label for="userName">{{ $t('register.label.useranme') }}</label>
        <BaseInput
          :input-length="InputLength.Full"
          :name="'userName'"
          :placeholder="$t('register.label.placeHolder.userName')"
          :errors="errors"
          v-model="userInfo.userName"
        />
      </div>
      <!-- 信箱 -->
      <div class="my-4 flex flex-col gap-y-2">
        <label for="userName">{{ $t('register.label.email') }}</label>
        <BaseInput
          :input-length="InputLength.Full"
          :name="'email'"
          :placeholder="$t('register.label.placeHolder.email')"
          :errors="errors"
          v-model="userInfo.email"
        />
      </div>
      <!-- 密碼 -->
      <div class="my-4 flex flex-col gap-y-2">
        <label for="userName">{{ $t('register.label.password') }}</label>
        <BaseInput
          :input-length="InputLength.Full"
          :input-type="InputType.Password"
          :name="'password'"
          :placeholder="$t('register.label.placeHolder.password')"
          :errors="errors"
          v-model="userInfo.password"
        />
      </div>
      <div class="flex justify-center mt-8">
        <ButtonFill :data-option="{ content: 'common.label.register' }"></ButtonFill>
      </div>
    </BaseForm>
  </div>
</template>
<style scoped lang="scss"></style>
