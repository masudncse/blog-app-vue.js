<template>
  <!-- Body -->
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <article>
          <h1>
            <router-link v-bind:to="{path: '/single/' + post.id}">{{post.title}}</router-link>
          </h1>

          <div class="row">
            <div class="group1 col-sm-6 col-md-6">
              <span class="glyphicon glyphicon-folder-open"></span> &nbsp;
              <a href="#">Signs</a>
              &nbsp;&nbsp;
              <span class="glyphicon glyphicon-bookmark"></span>
              <a href="#">Aries</a>,
              <a href="#">Fire</a>,
              <a href="#">Mars</a>
            </div>
            <div class="group2 col-sm-6 col-md-6">
              <span class="glyphicon glyphicon-pencil"></span>
              <a href="singlepost.html#comments">20 Comments</a>
              &nbsp;&nbsp;
              <span class="glyphicon glyphicon-time"></span> August 24, 2013 9:00 PM
            </div>
          </div>
          <hr />
          <img v-bind:src="post.image" class="img-responsive" style="height: 350px; width: 100%; object-fit: cover;" />
          <br />
          <p>{{post.content}}</p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";

export default {
  name: "single",
  data() {
    return {
      post: {}
    };
  },
  mounted() {
    this.$store.state.posts.map(post => {
      if (post.id.toString() === this.$route.params.id.toString()) {
        this.post = post;
      }
    });
  }
};
</script>