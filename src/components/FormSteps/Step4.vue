<template>
  <div class="d-flex flex-column justify-space-between h-100">
    <div>
      <h1>Finishing up</h1>
      <h3 class="description">Double-check everything looks OK before confirming</h3>
      <v-card class="summary-container mt-8 pa-4 d-flex flex-column" elevation="0">
        <div class="d-flex justify-space-between align-center">
          <div>
            <p class="font-weight-bold">{{ planDetails }}</p>
            <span
              class="text-decoration-underline font-weight-medium change-plan"
              @click="setStep(1)"
              >Change</span
            >
          </div>
          <span class="font-weight-bold">{{ planPrice }}</span>
        </div>
        <v-divider></v-divider>
        <div
          class="d-flex justify-space-between align-center px-1 font-14"
          v-for="addon in addons"
          :key="addon.title"
        >
          <p class="addon-title font-weight-medium">{{ addon.title }}</p>
          <span class="font-weight-medium">+${{ addon.price }}/mo</span>
        </div>
      </v-card>
      <div class="mt-4 d-flex justify-space-between align-center mx-4">
        <p class="addon-title font-weight-medium">Total (per month)</p>
        <p class="total-price">+${{ totalPrice }}/mo</p>
      </div>
    </div>
    <div class="d-flex justify-space-between mx-3 mb-8">
      <v-btn flat color="white" class="text-none back-button" @click="decrementStep">Go Back</v-btn>
      <v-btn class="text-none" flat color="#02295a" @click="confirm" :loading="isRequestLoading"
        >Confirm</v-btn
      >
    </div>

    <v-snackbar
      color="error"
      :multi-line="true"
      :timeout="3000"
      class="mt-8"
      shaped
      transition="slide-y-transition"
      v-model="snackbarState"
    >
      <span>Confirming game plan failed please try again</span>
      <v-btn density="compact" icon="mdi-close" color="grey" class="ml-2"></v-btn>
    </v-snackbar>
  </div>
</template>

<script setup>
import { confirmService } from '@/services'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
const { state, dispatch } = useStore()

const selectedPlan = computed(() => state.formData.plan)
const addons = computed(() => state.formData.addons)
const gamePlanData = computed(() => state.formData)
const planDetails = computed(() => {
  const planPeriod = selectedPlan.value.isMonthlyPeriod ? 'Monthly' : 'Yearly'
  return `${selectedPlan.value.name} (${planPeriod})`
})

//Plan pricing
const planPrice = computed(() => {
  const planPrice = selectedPlan.value.isMonthlyPeriod
    ? selectedPlan.value.monthly
    : selectedPlan.value.yearly
  const planPeriod = selectedPlan.value.isMonthlyPeriod ? 'mo' : 'yr'
  return `$${planPrice}/${planPeriod}`
})
const totalPrice = computed(() => {
  const planPrice = selectedPlan.value.isMonthlyPeriod
    ? selectedPlan.value.monthly
    : selectedPlan.value.yearly / 12
  let totalAddonsPrice = 0
  addons.value.forEach((addon) => {
    totalAddonsPrice += addon.price
  })
  return planPrice + totalAddonsPrice
})

//snackbar
const snackbarState = ref(false)
const setSnackbar = (val) => {
  snackbarState.value = val
}
const showSnackbar = () => {
  setSnackbar(true)
  setTimeout(() => {
    setSnackbar(false)
  }, 3000)
}

//steps functionality
const setStep = () => {
  dispatch('setStep')
}
const decrementStep = () => {
  dispatch('decrementStep')
}

//Send final plan details to api
const isRequestLoading = ref(false)
const confirm = async () => {
  try {
    isRequestLoading.value = true
    await confirmService.confirmPlan(this.gamePlanData)
    dispatch('incrementStep')
  } catch {
    showSnackbar()
  } finally {
    isRequestLoading.value = false
  }
}
</script>

<script>
import { mapState, mapActions } from 'vuex'
import { confirmService } from '@/services'
export default {
  name: 'Step4',
  data() {
    return {
      isRequestLoading: false,
      snackbarState: false
    }
  },
  computed: {
    ...mapState({
      selectedPlan: (state) => state.formData.plan,
      addons: (state) => state.formData.addons,
      gamePlanData: (state) => state.formData
    }),

    planDetails() {
      const planPeriod = this.selectedPlan?.isMonthlyPeriod ? 'Monthly' : 'Yearly'
      return `${this.selectedPlan?.name} (${planPeriod})`
    },
    planPrice() {
      const planPrice = this.selectedPlan?.isMonthlyPeriod
        ? this.selectedPlan?.monthly
        : this.selectedPlan?.yearly
      const planPeriod = this.selectedPlan?.isMonthlyPeriod ? 'mo' : 'yr'
      return `$${planPrice}/${planPeriod}`
    },
    totalPrice() {
      const planPrice = this.selectedPlan?.isMonthlyPeriod
        ? this.selectedPlan?.monthly
        : this.selectedPlan?.yearly / 12
      let totalAddonsPrice = 0
      this.addons.forEach((addon) => {
        totalAddonsPrice += addon.price
      })
      return planPrice + totalAddonsPrice
    }
  },
  methods: {
    ...mapActions(['decrementStep', 'incrementStep', 'setStep']),

    async confirm() {
      try {
        this.isRequestLoading = true
        await confirmService.confirmPlan(this.gamePlanData)
        this.incrementStep()
      } catch {
        this.showSnackbar()
      } finally {
        this.isRequestLoading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.summary-container {
  background-color: #fafbff;
  row-gap: 20px;
  .change-plan {
    cursor: pointer;
    color: #9699ab;
    font-size: 14px;
  }
}
.addon-title {
  color: #9699ab;
}
.total-price {
  font-size: 20px;
  font-weight: bold;
  color: #473dff;
}
</style>
