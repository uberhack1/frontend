import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
    },
    state: {
      itens: {
        usuario: {},
        possiveisConexoes: []
      }
    },
    mutations: {
      setItens: (state, payload) => state.itens = payload
    },
    actions: {
      loadData: async ({ commit }) => {
        var response = await window.$http
        .get(`http://localhost:5000/api/WorkNet/ObterUsuario?codigoUsuario=${window.localStorage.getItem('usuarioLogado') || 2}`);
        commit('setItens', response.data)
      }
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
