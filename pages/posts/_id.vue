<template>
  <div class="container post">
    <article>
      <div class="title is-1 is-spaced">{{ post.title }}</div>
      <div class="subtitle is-3">{{ post.body }}</div>
    </article>
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
    <b-back />
  </div>
</template>

<script>
import fetch from 'isomorphic-fetch'
import BBack from '@/components/BackButton'

export default {
  components: {
    BBack
  },
  data() {
    return {
      post: {},
      comments: []
    }
  },
  created() {
    this.fetchPost()
  },
  methods: {
    async fetchPost() {
      const { params } = this.$route
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
      )
      this.post = await response.json()
      await this.fetchComments(this.post.id)
    },
    async fetchComments(id) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments`
      )
      const comments = await response.json()
      this.comments = comments.filter((c) => c.postId === id)
    }
  }
}
</script>

<style lang="scss">
.post {
  article .subtitle {
    margin: 2.5rem 0px;
  }
  .comments {
    border: 1px solid $grey;
    padding: 3.5rem;
    &__list {
      border-left: 4px solid $grey-light;
    }
    &__list-item {
      padding: 1rem;
      margin: 0px 0.5rem;
      border-bottom: 1px dashed $grey-lighter;
      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
