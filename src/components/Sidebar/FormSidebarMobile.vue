<template>
  <div class="sidebar-background d-flex justify-center pt-8">
    <div
      v-for="(stepNumber, index) in 4"
      :key="stepNumber"
      class="d-flex align-center justify-center step-number"
      :class="{ 'active-step': index === step }"
    >
      {{ stepNumber }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'FormSidebarMobile',
  computed: {
    ...mapState(['step'])
  }
}
</script>

<style lang="scss" scoped>
.sidebar-background {
  height: 150px;
  background: url('../../assets/images/svgs/mobile-sidebar-background.svg') no-repeat;
  background-size: cover;
  column-gap: 30px;
  .step-number {
    width: 30px;
    height: 30px;
    border: 1px solid #ffffff;
    border-radius: 50%;
    color: #ffffff;
    font-size: 14px;
  }
  .active-step {
    background-color: #adbeff;
    color: #000000;
    border-color: transparent;
  }
}
</style>
