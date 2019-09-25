<template>
  <div class="container">
    <div class="posts columns is-multiline">
      <div v-for="post in posts" :key="post.id" class="posts__item column is-4">
        <div class="card">
          <div class="card-header">
            <div class="card-header-title">
              {{ post.title }}
            </div>
          </div>
          <div class="card-content">
            {{ post.body }}
          </div>
          <div class="card-footer">
            <nuxt-link :to="`posts/${post.id}`" class="card-footer-item"
              >View</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
    <b-back />
  </div>
</template>

<script>
import fetch from 'isomorphic-fetch'
import BBack from '@/components/BackButton'
export default {
  middleware: ['auth'],
  components: {
    BBack
  },
  data(context) {
    return {
      posts: []
    }
  },
  async asyncData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    return { posts }
  }
}
</script>

<style lang="scss" scoped>
.posts {
  &__item {
    margin: 8px 0px;
  }
}
</style>
