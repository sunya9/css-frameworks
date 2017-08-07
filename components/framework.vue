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
          <dl class="inline">
            <dt>License</dt>
            <dd>{{framework.data.license.name}}</dd>
          </dl>
        </div>
        <div class="content description">
          <p>{{framework.data.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['framework'],
  computed: {
    simpleURL () {
      return this.framework.data.homepage.replace(/https?:\/\//, '')
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
.inline dt, .inline dd {
  display: inline-block;
}
.inline dt:after {
  content: ':';
}
.inline dd {
  margin-left: .5rem;
}
.h100-wrapper {
  display: flex;
  flex-direction: column;
}
.h100 {
  flex: 1 0 auto;
}
</style>
