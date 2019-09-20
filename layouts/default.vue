<template>
  <div>
    <b-logout />
    <nuxt />
  </div>
</template>

<script>
import BLogout from '@/components/LogoutButton'
export default {
  components: { BLogout }
}
</script>
