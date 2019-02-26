import Vuex from 'vuex'

const cookieparser = process.server ? require('cookieparser') : undefined

const createStore = () => {
  return new Vuex.Store({
    debug: true,
    state: () => ({
      auth: null,
      userId: 0
    }),
    getters: {
      userId: (state) => {
        return state.userId
      },
      // other getters
    },
    mutations: {
      setAuth(state, auth) {
        state.auth = auth
      },
      setUserId (state, newValue) {
        if (this.debug) console.log('setUserId triggered with', newValue)
        state.userId = newValue
      }
    },
    actions: {
      nuxtServerInit({ commit }, { req }) {
        let auth = null
        if (req.headers.cookie) {
          const parsed = cookieparser.parse(req.headers.cookie)
          try {
            auth = JSON.parse(parsed.auth)
          } catch (err) {
            // No valid cookie found
          }
        }
        commit('setAuth', auth)
      },
      setUserId: ({commit, state}, newValue) => {
        commit('setUserId', newValue)
        return state.message
      },
    },
    
    
  })
}

export default createStore