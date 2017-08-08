<template>
  <header class="hero is-primary is-medium">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-size-2"><nuxt-link to="/" exact>CSS Frameworks</nuxt-link></h1>
        <h2 class="subtitle">Leaderboard of CSS Frameworks.</h2>
      </div>
    </div>
    <div class="hero-foot">
      <div class="container">
        <div class="level">
          <div class="level-left">
            <div class="level-item" v-if="isIndex">
              <div class="select">
                <select v-model="preProcessor">
                  <option value="">All preprocessor</option>
                  <option value="less">LESS</option>
                  <option value="postcss">postcss</option>
                  <option value="sass">Sass(scss)</option>
                  <option value="stylus">Stylus</option>
                </select>
              </div>
            </div>
            <div class="level-item" v-if="isIndex">
              <div class="select">
              <select v-model="sortMode">
                <option v-for="mode in SORT_MODES" :value="mode" :key="mode">Sorted by {{mode}}</option>
              </select>
              </div>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item" v-show="false">
              <nav class="tabs">
                <ul>
                  <li>
                    <nuxt-link to="/about">About</nuxt-link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
const SORT_MODES = [
  'stars',
  'forks',
  'issues',
  'title'
]

export default {
  data () {
    return {
      SORT_MODES
    }
  },
  computed: {
    sortMode: {
      get () {
        return this.$store.state.sortMode
      },
      set (mode) {
        this.$store.commit('updateSortMode', mode)
      }
    },
    preProcessor: {
      get () {
        return this.$store.state.preProcessor
      },
      set (preProcessor) {
        return this.$store.commit('updatePreProcessor', preProcessor)
      }
    },
    isIndex () {
      return this.$route.name === 'index'
    }
  }
}
</script>
