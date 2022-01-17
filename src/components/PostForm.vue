<template>
  <form @submit.prevent>
    <h4>Create post</h4>
    <my-input v-model="post.title" placeholder="Name" />
    <my-input v-model="post.body" placeholder="Body" />
    <MyButton @click="createPost()" class="btn">Create</MyButton>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        post: {
          title: "",
          body: "",
        },
      };
    },
    methods: {
      createPost() {
        this.post.id = Date.now();
        this.$emit("create", this.post);
        this.post = {
          title: "",
          body: "",
        };
      },
    },
  };
</script>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
  }
  .btn {
    align-self: flex-end;
    margin-top: 15px;
  }
</style>
