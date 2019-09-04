import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Posts from "./components/Posts";
import Single from "./components/Single";

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/posts", component: Posts },
    { path: "/single/:id", component: Single }
  ]
});

export default router;
