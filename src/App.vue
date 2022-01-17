<template>
  <div class="app">
    <PostForm @create="createPost" />
    <PostList :posts="posts" />
  </div>
</template>

<script>
  import PostList from "@/components/PostList";
  import PostForm from "@/components/PostForm";

  export default {
    components: {
      PostList,
      PostForm,
    },
    data() {
      return {
        posts: [
          { id: 1, title: "JS", body: "JS is cool" },
          { id: 2, title: "C++", body: "C++ is cool" },
          { id: 3, title: "PHP", body: "PHP is cool" },
        ],
      };
    },
    methods: {
      createPost(post) {
        this.posts.push(post);
      },
    },
  };
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .app {
    padding: 20px;
  }
</style>
