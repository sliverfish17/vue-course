<template>
  <div>
    <h3>List of users</h3>
  </div>
  <PostItem v-for="post in posts" :key="post.id" :post="post" />
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
