const actions = {
  incrementStep({ commit }) {
    commit('incrementStep')
  },
  decrementStep({ commit }) {
    commit('decrementStep')
  },
  setStep({ commit }, stepNumber) {
    commit('setStep', stepNumber)
  },
  setFormData({ commit }, payload) {
    commit('collectFormData', payload)
  }
}

export default actions
