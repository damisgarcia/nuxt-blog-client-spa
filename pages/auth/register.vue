<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Register!</h2>

          <Notification v-if="error" :message="error" />

          <form method="post" @submit.prevent="register">
            <b-field
              label="Username"
              :message="errors.first('username')"
              :type="{ 'is-danger': errors.has('username') }"
            >
              <b-input
                v-model="username"
                v-validate="'required'"
                type="text"
                name="username"
                size="is-large"
              ></b-input>
            </b-field>

            <b-field
              label="Email"
              :message="errors.first('email')"
              :type="{ 'is-danger': errors.has('email') }"
            >
              <b-input
                v-model="email"
                v-validate="'email|required'"
                type="email"
                name="email"
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
                Signup
              </b-button>
            </div>
          </form>

          <div class="has-text-centered" style="margin-top: 20px">
            Already got an account? <nuxt-link to="/login">Login</nuxt-link>
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
      username: '',
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register() {
      try {
        const result = await this.$validator.validateAll()

        if (result) {
          await this.$axios.post('register', {
            username: this.username,
            email: this.email,
            password: this.password
          })

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
