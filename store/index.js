import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store ({
    state:  {
      apiBase: "https://stranakart.com/category/01G7P4ZHY5A25X8XMV7WENPK1K/good",
      products: [],
    },
  
    getters: {
      getProducts: (state) => {
        return state.products.map((product) => {
          const { name, price, cover, url, grouping } = product;
          return { name, price, cover, url, grouping };
        });
      },
    },
  
    mutations: {
      setProducts(state, products) {
        state.products = products;
      },
    },
  
    actions: {
      async fetchProductsData({commit, state}) {
        try {
          const response = await axios.get(`${state.apiBase}`);
          const data = response.data.data;
          commit('setProducts', data.items);
        } catch (error) {
          console.error(error);
        }
      },
    }
  })
} 

export default createStore;

