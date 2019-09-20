<template>
  <div class="container">
    <div class="title is-1">Signin</div>
    <form id="singin" novalidate @submit.prevent="singin">
      <b-field
        label="Email"
        :message="errors.first('email')"
        :type="{ 'is-danger': errors.has('email') }"
      >
        <b-input
          v-model="email"
          v-validate="'required|email'"
          name="email"
          type="email"
          size="is-large"
        />
      </b-field>
      <b-field
        label="Password"
        :message="errors.first('password')"
        :type="{ 'is-danger': errors.has('password') }"
      >
        <b-input
          v-model="password"
          name="password"
          type="password"
          size="is-large"
        />
      </b-field>
      <b-button type="is-primary" size="is-large" native-type="submit"
        >Submit</b-button
      >
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    async singin() {
      const response = await this.$validator.validateAll()
      if (response) {
        const { email, password } = this
        this.$buefy.toast.open({
          message: 'Formulário validado',
          type: 'is-success',
          position: 'is-bottom'
        })
        this.signin({ email, password })
        this.$router.replace('/')
        return
      }
      this.$buefy.toast.open({
        message: 'Formulário inválido! Verifique os campos.',
        type: 'is-danger',
        position: 'is-bottom'
      })
    },
    ...mapActions('profile', ['signin'])
  }
}
</script>

<style scoped></style>
