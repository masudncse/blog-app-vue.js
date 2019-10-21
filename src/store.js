import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    posts: [
      {
        id: 1,
        title: "Donec rutrum congue leo eget malesuada",
        content: "Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
        image:
          "https://cdn2.wpbeginner.com/wp-content/uploads/2019/01/choosethebestbloggingplatform.png",
        status: true
      },
      {
        id: 2,
        title: "Nulla quis lorem ut libero malesuada feugiat",
        content: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
        image:
          "https://neilpatel.com/wp-content/uploads/2018/10/blog.jpg",
        status: true
      },
      {
        id: 3,
        title: "Proin eget tortor risus",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
        image:
          "https://www.impactbnd.com/hubfs/blog-image-uploads/9_Blog_Layout_Best_Practices_From_2017.jpg",
        status: true
      }
    ]
  }
});

export default store;
