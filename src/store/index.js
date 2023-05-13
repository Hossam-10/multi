import actions from './actions'
import mutations from './mutations'

import { createStore } from 'vuex'

export default createStore({
  state: {
    step: 0,
    formData: {}
  },
  mutations,
  actions
})
