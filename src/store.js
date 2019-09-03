import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    posts: [
        {id: 1, title: 'title 1', content: 'content 1', image: 'https://cdn.shopifycloud.com/hatchful-web/assets/e1179e27ce0f55a3bd31d92e9c751731.png', status: true},
        {id: 2, title: 'title 2', content: 'content 2', image: 'https://cdn.shopifycloud.com/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png', status: true},
        {id: 3, title: 'title 3', content: 'content 3', image: 'https://cdn.shopifycloud.com/hatchful-web/assets/eab093a0a25c7994ab8cc0b64eaadd00.png', status: true},
        {id: 4, title: 'title 4', content: 'content 4', image: 'https://cdn.shopifycloud.com/hatchful-web/assets/c3a241ae6d1e03513dfed6f5061f4a4b.png', status: true}
    ]
  }
})

export default store;
