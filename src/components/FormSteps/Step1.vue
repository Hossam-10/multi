<template>
  <div>
    <h1>Personal info</h1>
    <h3 class="description">Please provide your name, email address and phone number</h3>
    <v-form class="mt-4" v-model="isValid">
      <h5 class="mb-2">Name</h5>
      <v-text-field
        density="compact"
        variant="solo"
        single-line
        hide-details="auto"
        placeholder="Your name"
        required
        :rules="[(v) => !!v || 'Please enter your name']"
        v-model="personalInfo.name"
      >
      </v-text-field>
      <h5 class="mt-6 mb-2">Email address</h5>
      <v-text-field
        density="compact"
        variant="solo"
        single-line
        hide-details="auto"
        placeholder="Your email address"
        required
        :rules="emailRules"
        v-model="personalInfo.email"
      >
      </v-text-field>
      <h5 class="mt-6 mb-2">Phone Number</h5>
      <v-text-field
        density="compact"
        variant="solo"
        single-line
        hide-details="auto"
        placeholder="e.g +201000000000"
        required
        :rules="phoneRules"
        v-model="personalInfo.phoneNumber"
      >
      </v-text-field>
    </v-form>
    <div class="mt-16 text-right">
      <v-btn class="text-none" flat color="#02295a" :disabled="!isValid" @click="nextStep"
        >Next Step</v-btn
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useStore } from 'vuex'
const { dispatch } = useStore()

//Define input rules for validation
const emailRules = ref([
  (v) =>
    (!!v && /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)) || 'Please enter a valid email'
])
const phoneRules = ref([
  (v) =>
    (!!v && /^(002)?(02)?(\+2)?01[1025][0-9]{8}$/.test(v)) || 'Please enter a valid phone number'
])

const isValid = ref(false)
const personalInfo = reactive({name:'',email:'',phoneNumber:''})

//Save step data
const nextStep = () => {
  dispatch('setFormData', { personalInfo })
  dispatch('incrementStep')
}
</script>
