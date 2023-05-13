const mutations = {
  incrementStep(state) {
    state.step++
  },
  decrementStep(state) {
    state.step--
  },
  setStep(state, stepNumber) {
    state.step = stepNumber
  },
  collectFormData(state, payload) {
    state.formData = { ...state.formData, ...payload }
  }
}

export default mutations
