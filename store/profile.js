const state = () => ({
  currentUser: {
    authenticated: false
  }
})

const mutations = {
  $update(state, payload) {
    state.currentUser = payload
  }
}

const actions = {
  signin({ commit }, payload) {
    commit('$update', Object.assign({}, payload, { authenticated: true }))
  },
  signout({ commit }) {
    this.$router.replace('/users/signin')
    commit('$update', Object.assign({}, { authenticated: false }))
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
