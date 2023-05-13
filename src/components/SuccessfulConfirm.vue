<template>
  <div class="w-100 h-100 d-flex justify-center align-center">
    <div class="w-75 text-center">
      <v-img class="mx-auto" max-width="80" max-height="80" :src="getImage('confirmed')"></v-img>
      <h1 class="mt-4">Thank you!</h1>
      <p class="message">{{ succefulMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuccessfulConfirm',
  data() {
    return {
      succefulMessage: `Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us atsupport@loremgaming.com`
    }
  },
  methods: {
    getImage(imageName) {
      return new URL(`../assets/images/svgs/${imageName}.svg`, import.meta.url).href
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
  color: #9699ab;
}
</style>
