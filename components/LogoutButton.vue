<template>
  <b-button type="is-danger" @click="signout">Logout</b-button>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'BLogout',
  computed: {
    authenticated() {
      return this.currentUser.authenticated
    },
    ...mapState('profile', ['currentUser'])
  },
  methods: {
    ...mapActions('profile', ['signout'])
  }
}
</script>

<style scoped></style>
