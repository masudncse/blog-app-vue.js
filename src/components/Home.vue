<template>
  <!-- Body -->
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <h1>Latest Posts</h1>

        <article v-for="post in posts" v-bind:key="post.id">
          <h2>
            <router-link v-bind:to="{path: '/single/' + post.id}">{{ post.title }}</router-link>
          </h2>
          <hr />
          <img
            v-bind:src=" post.image "
            class="img-responsive"
            style="height: 100px; max-height: auto; width: auto; max-width: 100%;"
          />
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
      <div class="col-md-4">
        <div class="well text-center">
          <p class="lead">Don't want to miss updates? Please click the below button!</p>
          <button class="btn btn-primary btn-lg">Subscribe to my feed</button>
        </div>

        <!-- Latest Posts -->
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h4>Latest Posts</h4>
          </div>
          <ul class="list-group">
            <li class="list-group-item">
              <a href="singlepost.html">1. Aries Sun Sign March 21 - April 19</a>
            </li>
            <li class="list-group-item">
              <a href="singlepost.html">2. Taurus Sun Sign April 20 - May 20</a>
            </li>
            <li class="list-group-item">
              <a href="singlepost.html">3. Gemini Sun Sign May 21 - June 21</a>
            </li>
            <li class="list-group-item">
              <a href="singlepost.html">4. Cancer Sun Sign June 22 - July 22</a>
            </li>
            <li class="list-group-item">
              <a href="singlepost.html">5. Leo Sun Sign July 23 - August 22</a>
            </li>
          </ul>
        </div>
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
