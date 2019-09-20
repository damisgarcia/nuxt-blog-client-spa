<template>
  <b-button size="is-large" type="is-text" @click="goBack">
    <slot>
      {{ title }}
    </slot>
  </b-button>
</template>

<script>
export default {
  name: 'BBack',
  props: {
    title: {
      type: String,
      default: 'Back'
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style scoped></style>
