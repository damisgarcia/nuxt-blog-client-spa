<template>
  <div class="container post">
    <article>
      <div class="title is-1 is-spaced">{{ post.title }}</div>
      <div class="subtitle is-3">{{ post.body }}</div>
    </article>
    <comments />
    <b-back />
  </div>
</template>

<script>
import fetch from 'isomorphic-fetch'
import BBack from '@/components/BackButton'
import Comments from '@/components/Comments'

export default {
  components: {
    BBack,
    Comments
  },
  head() {
    const { post } = this
    return {
      title: post.title,
      meta: [{ hid: 'description', name: 'description', content: post.body }]
    }
  },
  async asyncData({ params }) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    )
    const post = await response.json()
    return { post }
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
