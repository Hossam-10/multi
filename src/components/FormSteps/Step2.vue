<template>
  <div class="d-flex flex-column justify-space-between h-100">
    <div>
      <h1>Select your plan</h1>
      <h3 class="description">You have the option of monthly or yearly billing</h3>
      <v-row class="mt-5">
        <v-col v-for="plan in plans" :key="plan.name" cols="4">
          <v-card
            height="180"
            class="plan-container pl-2 pt-4 pb-2"
            :class="{ 'active-plan': selectedPlan.name === plan.name }"
            @click="selectPlan(plan)"
          >
            <div class="d-flex flex-column justify-space-between h-100">
              <v-img
                max-width="35"
                max-height="35"
                :src="getImagePath(`svgs/plans/${plan.iconName}.svg`)"
              ></v-img>
              <div>
                <p class="font-weight-bold">{{ plan.name }}</p>
                <p class="price-text">${{ getPlanPrice(plan) }}</p>
                <p class="free-period">2 months free</p>
              </div>
            </div>
          </v-card>
        </v-col>
        <div
          class="period-switch-container w-100 d-flex justify-center align-center py-2 mx-3 mt-4"
        >
          <span :class="{ 'active-period': isMonthlyPeriod }">Monthly</span>
          <v-switch hide-details color="#02295a" v-model="isMonthlyPeriod"></v-switch>
          <span :class="{ 'active-period': !isMonthlyPeriod }">Yearly</span>
        </div>
      </v-row>
    </div>
    <div class="d-flex justify-space-between mx-3 mb-8">
      <v-btn flat color="white" class="text-none back-button" @click="decrementStep">Go Back</v-btn>
      <v-btn
        class="text-none"
        flat
        color="#02295a"
        :disabled="!!!selectedPlan.name"
        @click="nextStep"
        >Next Step</v-btn
      >
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import getImagePath from '@/helpers/getImagePath'
const { dispatch } = useStore()

const plans = ref([
  {
    name: 'Arcade',
    monthly: 10,
    yearly: 90,
    iconName: 'arcade'
  },
  {
    name: 'Advanced',
    monthly: 40,
    yearly: 120,
    iconName: 'advanced'
  },
  {
    name: 'Pro',
    monthly: 70,
    yearly: 150,
    iconName: 'pro'
  }
])
const isMonthlyPeriod = ref(true)
const selectedPlan = ref({})

const getPlanPrice = (plan) => {
  return isMonthlyPeriod.value ? `${plan.monthly}/mo` : `${plan.yearly}/yr`
}
const selectPlan = (plan) => {
  selectedPlan.value = plan
}
const decrementStep = () => {
  dispatch('decrementStep')
}
const nextStep = () => {
  const payload = {
    plan: { ...selectedPlan.value, isMonthlyPeriod: isMonthlyPeriod.value }
  }
  dispatch('setFormData', payload)
  dispatch('incrementStep')
}
</script>

<style lang="scss" scoped>
.plan-container {
  cursor: pointer;
  border: 1px solid#d6d9e6;
  .price-text {
    color: #9699ab;
  }
  .free-period {
    color: #02295a;
  }
}
.active-plan {
  border: 1px solid #473dff;
  background: #fafbff;
}
.period-switch-container {
  background-color: #fafbff;
  column-gap: 20px;
  height: 50px;
  color: #9699ab;
  font-weight: 500;
  border-radius: 10px;
}
.active-period {
  color: #02295a;
  font-weight: bold;
}
.v-switch {
  display: contents;
}
</style>
