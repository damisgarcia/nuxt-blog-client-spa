<template>
  <section class="section">
    <div class="container">
      <h2 class="title">My Profile</h2>
      <div class="content">
        <p>
          <strong>Username:</strong>
          {{ currentUser.username }}
        </p>
        <p>
          <strong>Email:</strong>
          {{ currentUser.email }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  computed: {
    ...mapGetters(['currentUser'])
  }
}
</script>
