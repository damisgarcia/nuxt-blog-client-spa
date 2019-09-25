<template>
  <div class="comments">
    <div class="title is-6 comments__heading">Comments:</div>
    <ul class="comments__list">
      <li
        v-for="comment in comments"
        :key="comment.id"
        class="comments__list-item"
      >
        <div class="title is-5">{{ comment.email }}</div>
        <div class="subtitle is-6">{{ comment.body }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import fetch from 'isomorphic-fetch'
export default {
  data() {
    return {
      comments: []
    }
  },
  async created() {
    const { params } = this.$route

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments`
    )

    const comments = await response.json()

    this.comments = comments.filter((c) => c.postId.toString() === params.id)
  }
}
</script>

<style scoped></style>
