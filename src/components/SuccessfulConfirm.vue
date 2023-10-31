<template>
  <div class="w-100 h-100 d-flex justify-center align-center">
    <div class="w-75 text-center">
      <v-img
        class="mx-auto"
        max-width="80"
        max-height="80"
        :src="getImagePath('svgs/confirmed.svg')"
      ></v-img>
      <h1 class="mt-4">Thank you!</h1>
      <p class="message">{{ successfulMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import getImagePath from '@/helpers/getImagePath'
import { ref } from 'vue'

const successfulMessage = ref(
  'Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us hossammahmoud515@gmail.com'
)
</script>

<style lang="scss" scoped>
.message {
  color: #9699ab;
}
</style>
