import { Store } from 'vuex'
import frameworks from '../data'
import { SORT_MODE_MAPPING } from '~/assets/js/shared'

const store = () => new Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    preProcessor: '',
    sortMode: 'stars'
  },
  getters: {
    sortedFrameworks: state => {
      return frameworks.sort((a, b) => {
        const key = SORT_MODE_MAPPING[state.sortMode]
        if (state.sortMode === 'title') {
          return a[key].toLowerCase() > b[key].toLowerCase()
        } else {
          return a.data[key] < b.data[key]
        }
      }).filter(framework => {
        const pp = state.preProcessor
        if (pp) {
          const isSass = pp === 'sass'
          let res = framework.preprocessors.includes(pp)
          if (!res && isSass) {
            res = framework.preprocessors.includes('scss')
          }
          return res
        } else {
          return true
        }
      })
    }
  },
  mutations: {
    updateSortMode (state, mode) {
      state.sortMode = mode
    },
    updatePreProcessor (state, preProcessor) {
      state.preProcessor = preProcessor
    }
  }
})

export default store
