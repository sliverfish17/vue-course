<template>
  <div v-if="posts.length > 0">
    <h3>List of posts</h3>

    <PostItem
      @remove="$emit('remove', post)"
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
  <h2 v-else>List is empty</h2>
</template>

<script>
  import PostItem from "@/components/PostItem";
  export default {
    props: {
      posts: {
        type: Array,
        required: true,
      },
    },
    components: {
      PostItem,
    },
  };
</script>

<style scoped>
  .post {
    padding: 15px;
    border: 2px solid red;
    margin-top: 15px;
  }
</style>
