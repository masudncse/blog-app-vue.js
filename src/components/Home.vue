<template>
  <!-- Body -->
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Latest Posts</h1>

        <article v-for="post in posts" v-bind:key="post.id">
          <h2>
            <router-link v-bind:to="{path: '/single/' + post.id}">{{ post.title }}</router-link>
          </h2>
          <hr />
          <img v-bind:src=" post.image " class="img-responsive" style="height: 250px; width: 100%; object-fit: cover;" />
          <br />
          <p class="lead">{{ post.content }}</p>
          <p class="text-right">
            <router-link v-bind:to="{path: '/single/', id: post.id}">continue reading...</router-link>
          </p>
          <hr />
        </article>

        <ul class="pager">
          <li class="previous">
            <a href="#">&larr; Previous</a>
          </li>
          <li class="next">
            <a href="#">Next &rarr;</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    posts: state => state.posts
  })
};
</script>
