import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store ({
    state:  {
      apiBase: "'https://asos2.p.rapidapi.com/v2/auto-complete",
      products: [],
    },
  
    getters: {
      // getProducts: (state) => {
      //   return state.products.map((product) => {
      //     const { name, price, cover, url, grouping } = product;
      //     return { name, price, cover, url, grouping };
      //   });
      // },
      getProducts: state => state.products,
    },
  
    mutations: {
      setProducts(state, products) {
        state.products = products;
      },
    },
  
    actions: {
      async fetchProductsData({ commit, state }) {
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

