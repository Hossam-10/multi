<template>
  <v-card class="sidebar-container" height="560">
    <div class="d-flex flex-column steps-container ml-8 mt-8">
      <div class="d-flex" v-for="(step, index) in steps" :key="step.title">
        <div
          class="d-flex justify-center align-center step-number"
          :class="setActiveStepClass(index)"
        >
          {{ index + 1 }}
        </div>
        <div class="d-flex flex-column ml-4">
          <span class="step-title"> {{ step.title }}</span>
          <span class="font-weight-medium step-description"> {{ step.description }} </span>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'FormSidebar',
  data() {
    return {
      steps: [
        {
          title: 'STEP1',
          description: 'YOUR INFO'
        },
        {
          title: 'STEP2',
          description: 'SELECT PLAN'
        },
        {
          title: 'STEP3',
          description: 'ADD-ONS'
        },
        {
          title: 'STEP4',
          description: 'SUMMARY'
        }
      ]
    }
  },
  computed: {
    ...mapState(['step'])
  },
  methods: {
    setActiveStepClass(index) {
      return this.step === index ? 'active-step' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-container {
  background: url('../../assets/images/svgs/sidebar-background.svg');
  .steps-container {
    row-gap: 50px;
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
    .step-title {
      color: #9699ab;
      font-size: 14px;
    }
    .step-description {
      color: #ffffff;
    }
  }
}
</style>
