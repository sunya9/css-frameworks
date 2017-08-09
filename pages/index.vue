<template>
  <div>
    <div class="field is-grouped is-grouped-centered attach-header">
      <div class="control">
        <div class="select">
          <select v-model="preprocessor">
            <option v-for="{ title, value } in preprocessors" :value="value" :key="value">{{title}}</option>
          </select>
        </div>
      </div>
      <div class="control">
        <div class="select">
          <select v-model="sortModeIdx">
            <option v-for="({ value }, $index) in sortModes" :value="$index" :key="value">Sorted by {{value}}</option>
          </select>
        </div>
      </div>
    </div>
    <transition-group
      name="flip-list"
      tag="div"
      class="columns wrap"
      >
      <framework
        class="column is-3-widescreen is-4-desktop is-6-tablet is-flex flip-list-item"
        v-for="framework in sortedFrameworks"
        :key="framework.name"
        :framework="framework"></framework>
    </transition-group>
  </div>
</template>

<script>
import Framework from '~/components/framework'

const preprocessors = [
  {
    title: 'All preprocessors',
    value: ''

  }, {
    title: 'Sass(SCSS)',
    value: 'sass'
  }, {
    title: 'cssnext(postcss)',
    value: 'cssnext'
  }, {
    title: 'Stylus',
    value: 'stylus'

  }, {
    title: 'LESS',
    value: 'less'
  }
]

const sortModes = [
  {
    value: 'stars',
    key: 'data.stargazers_count'
  }, {
    value: 'forks',
    key: 'data.forks_count'
  }, {
    value: 'issues',
    key: 'data.open_issues_count'
  }, {
    value: 'title',
    key: 'name'
  }
]
export default {
  asyncData ({ env: { frameworks = [] } }) {
    return {
      frameworks,
      preprocessors,
      preprocessor: preprocessors[0].value,
      sortModes,
      sortModeIdx: 0
    }
  },
  computed: {
    sortMode () {
      return this.sortModes[this.sortModeIdx]
    },
    sortedFrameworks () {
      return this.frameworks.slice().sort((a, b) => {
        const { a: av, b: bv } = this.sortMode.key
          .split('.').reduce((dest, key) => {
            return {
              a: dest.a[key],
              b: dest.b[key]
            }
          }, { a, b })
        if (typeof av === 'string') { // title
          const an = av.toLowerCase()
          const bn = bv.toLowerCase()
          if (an < bn) {
            return -1
          } else if (an > bn) {
            return 1
          } else {
            return 0
          }
        } else {
          return bv - av
        }
      }).filter(framework => {
        const pp = this.preprocessor
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
  components: {
    Framework
  },
  head () {
    return {
      title: 'CSS Frameworks',
      titleTemplate: null
    }
  }
}
</script>
<style scoped lang="scss">
@import '~bulma/sass/utilities/all';

.wrap {
  flex-wrap: wrap;
}
.flip-list-item {
  transition: all .2s ease;
}
.flip-list-enter, .flip-list-leave-to {
  opacity: 0;
  transform: scale(0);
}
.flip-list-leave-active {
  position: absolute;
  left: 0;
  top: 0;
}

.attach-header {
  @include desktop {
    position: absolute;
    top: -5rem;
  }
}
</style>
