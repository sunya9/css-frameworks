import { Store } from 'vuex'
import frameworks from '../data'

const SORT_MODE_MAPPING = {
  stars: 'stargazers_count',
  forks: 'forks_count',
  issues: 'open_issues_count',
  title: 'name'
}

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
