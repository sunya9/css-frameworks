<template>
  <div class="h100-wrapper">
    <div class="card h100">
      <div class="card-content">
        <h3 class="is-spaced is-size-4 title oneline has-text-centered">
          <a :href="framework.data.html_url"
            class="github-link has-text-grey-dark"
            target="_new"
            :title="framework.name">
            {{framework.name}}
          </a>
        </h3>
        <h4 class="subtitle is-size-6 oneline has-text-centered">
          <a :href="framework.data.homepage"
            :style="{ visibility: simpleURL === '　' ? 'hidden' : 'visible' }"
            target="_new">
            {{simpleURL}}
          </a>
        </h4>
        <div class="columns is-mobile">
          <div class="column has-text-centered">
            <div>
              <span class="icon is-small">
                <i class="fa fa-star"></i>
              </span>
            </div>
            {{framework.data.stargazers_count}}
          </div>
          <div class="column has-text-centered">
            <div>
              <span class="icon is-small">
                <i class="fa fa-code-fork"></i>
              </span>
            </div>
            {{framework.data.forks_count}}
          </div>
          <div class="column has-text-centered">
            <div>
              <span class="icon is-small">
                <i class="fa fa-bug"></i>
              </span>
            </div>
            {{framework.data.open_issues_count}}
          </div>
        </div>
        <div class="content">
          <p>{{description}}</p>
        </div>
        <div class="content bottom">
          <dl class="columns is-multiline is-gapless info is-mobile">
            <dt class="column is-marginless is-5">Meta</dt>
            <dd class="column is-marginless is-7">{{metas}}</dd>
            <template v-if="framework.data.license">
              <dt class="column is-marginless is-5">License</dt>
              <dd class="column is-marginless is-7">{{framework.data.license.spdx_id || framework.license}}</dd>
            </template>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gemoji from 'gemoji'

const PREPROCESSOR_MAPPING = {
  scss: 'SCSS',
  sass: 'Sass',
  stylus: 'Stylus',
  less: 'LESS',
  cssnext: 'cssnext'
}

export default {
  props: ['framework'],
  computed: {
    simpleURL () {
      return this.framework.data.homepage
        ? this.framework.data.homepage.replace(/https?:\/\//, '')
        : '　'
    },
    metas () {
      return this.framework.preprocessors.length
        ? this.framework.preprocessors.map(name => PREPROCESSOR_MAPPING[name]).join(', ')
        : 'None'
    },
    description () {
      return this.framework.data.description.replace(/:([a-z0-9A-Z_-]+):/g, str => gemoji.name[str.slice(1, -1)].emoji)
    }
  }
}
</script>
<style scoped>
.oneline {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.info dd {
  position: relative;
}
.info dd::before {
  content: ':';
  display: inline-block;
  position: absolute;
  left: -1rem;
}
.h100-wrapper {
  display: flex;
  flex-direction: column;
}
.h100 {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
}
.card-content {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.bottom {
  margin-top: auto;
}
.framework-inner {
  overflow: hidden;
}
</style>
