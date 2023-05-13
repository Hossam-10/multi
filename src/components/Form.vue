<template>
  <div class="ml-7 mt-4 mr-4 h-100" v-if="!isMobileWidth">
    <keep-alive>
      <component :is="componentName" />
    </keep-alive>
  </div>
  <v-card class="pa-4" min-height="100%" v-else>
    <keep-alive>
      <component :is="componentName" />
    </keep-alive>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import Step1 from './FormSteps/Step1.vue'
import Step2 from './FormSteps/Step2.vue'
import Step3 from './FormSteps/Step3.vue'
import Step4 from './FormSteps/Step4.vue'
import SuccessfulConfirm from './SuccessfulConfirm.vue'
export default {
  name: 'Form',
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
    SuccessfulConfirm
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['step']),
    componentName() {
      switch (this.step) {
        case 0:
          return 'Step1'
        case 1:
          return 'Step2'
        case 2:
          return 'Step3'
        case 3:
          return 'Step4'
        case 4:
          return 'SuccessfulConfirm'
      }
    },
    isMobileWidth() {
      return this.$vuetify.display.mobile
    }
  }
}
</script>
