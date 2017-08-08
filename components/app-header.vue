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
            <transition name="slide-left">
              <div class="level-item" v-if="isIndex">
                <div class="field is-grouped">
                  <div class="control">
                    <div class="select">
                      <select v-model="preProcessor">
                        <option v-for="{title, value} in PREPROCESSORS" :value="value" :key="value">{{title}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="control">
                    <div class="select">
                      <select v-model="sortMode">
                        <option v-for="mode in SORT_MODES" :value="mode" :key="mode">Sorted by {{mode}}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
          <div class="level-right">
            <div class="level-item" v-show="true">
              <nav class="tabs">
                <ul>
                  <nuxt-link
                    tag="li"
                    v-for="{path, title} in LINKS"
                    :to="path"
                    :key="path"
                    active-class="is-active"
                    >
                      <a>{{title}}</a>
                  </nuxt-link>
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
import { SORT_MODES, PREPROCESSORS } from '~/assets/js/shared'

const LINKS = [
  {
    path: '/about',
    title: 'About CSS Frameworks'
  }, {
    path: '/rules',
    title: 'The Rules'
  }
]

export default {
  data () {
    return {
      SORT_MODES, PREPROCESSORS, LINKS
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
<style scoped>
.slide-left-enter-active, .slide-left-leave-active {
  transition: all .2s ease;
}
.slide-left-enter, .slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
