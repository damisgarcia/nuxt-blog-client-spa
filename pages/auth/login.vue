<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">¡Hola! ¿Qué tal?</h2>

          <Notification v-if="error" :message="error" />

          <form method="post" novalidate @submit.prevent="login">
            <b-field
              label="Email"
              :message="errors.first('email')"
              :type="{ 'is-danger': errors.has('email') }"
            >
              <b-input
                v-model="email"
                v-validate="'required|email'"
                type="email"
                name="email"
                autocomplete="off"
                size="is-large"
              ></b-input>
            </b-field>
            <b-field
              label="Password"
              :message="errors.first('password')"
              :type="{ 'is-danger': errors.has('password') }"
            >
              <b-input
                v-model="password"
                v-validate="'required'"
                type="password"
                name="password"
                size="is-large"
              ></b-input>
            </b-field>
            <div class="control">
              <b-button
                class="is-fullwidth"
                type="is-primary"
                size="is-large"
                native-type="submit"
              >
                Signin
              </b-button>
            </div>
          </form>
          <div class="has-text-centered" style="margin-top: 20px">
            <p>
              Don't have an account?
              <nuxt-link to="/auth/register">Register</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Notification from '~/components/Notification'

export default {
  middleware: ['guest'],
  components: {
    Notification
  },
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },

  methods: {
    async login() {
      try {
        const result = await this.$validator.validateAll()
        if (result) {
          await this.$auth.loginWith('local', {
            data: {
              email: this.email,
              password: this.password
            }
          })
          return this.$router.push('/')
        }

        this.$buefy.toast.open({
          message: 'Form is not valid! Please check the fields.',
          type: 'is-danger',
          position: 'is-bottom'
        })
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>
