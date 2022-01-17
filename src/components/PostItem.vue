<template>
  <div class="post" :key="post.id">
    <div>
      <div><strong>Name:</strong> {{ post.title }}</div>
      <div><strong>Body:</strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button>Delete</my-button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .post {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border: 2px solid red;
    margin-top: 15px;
  }
</style>
