<template>
  <header class="hero is-primary">
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
          </div>
          <div class="level-right">
            <div class="level-item" v-show="true">
              <nav class="tabs visible">
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
                  <li>
                    <div class="dropdown is-right" :class="{
                      'is-active': showShareDropdown
                    }">
                      <div class="dropdown-trigger">
                        <a aria-haspopup="true" aria-controls="share-dropdown-menu" @click.stop="showShareDropdown = !showShareDropdown">
                          <span class="icon">
                            <i class="fa fa-share-alt"></i>&nbsp;
                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                          </span>
                        </a>
                      </div>
                      <div class="dropdown-menu is-primary" id="share-dropdown-menu" role="menu">
                        <div class="dropdown-content">
                          <a class="dropdown-item" @click="openDialog('twitter')">
                            <span class="icon has-text-centered">
                              <i class="fa fa-fw fa-twitter"></i>
                            </span>
                            Twitter
                          </a>
                          <a class="dropdown-item" @click="openDialog('facebook')">
                            <span class="icon has-text-centered">
                              <i class="fa fa-fw fa-facebook-official"></i>
                            </span>
                            Facebook
                          </a>
                          <a class="dropdown-item" @click="openDialog('googleplus')">
                            <span class="icon has-text-centered">
                              <i class="fa fa-fw fa-google-plus-official"></i>
                            </span>
                            Google+
                          </a>
                        </div>
                      </div>
                    </div>
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
      showShareDropdown: false,
      LINKS
    }
  },
  mounted () {
    document.addEventListener('click', () => {
      this.showShareDropdown = false
    })
  },
  methods: {
    openDialog (sns) {
      const href = ({
        twitter: `https://twitter.com/intent/tweet?url=${location.href}&amp;text=${document.title}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${location.href}`,
        googleplus: `https://plus.google.com/share?url=${location.href}`
      })[sns]
      let width = 550
      let height = 450
      let sHeight = screen.height
      let sWidth = screen.width
      let left = Math.round((sWidth / 2) - (width / 2))
      let top = 0
      if (sHeight > width) {
        top = Math.round(sHeight / 2 - height / 2)
      }
      window.open(href, '', `left=${left},top=${top},width=${width},height=${height},personalbar=0,toolbar=0,scrollbars=1,resizable=1`)
    }
  }
}
</script>
<style scoped lang="scss">
@import '~assets/css/variables';

.visible.tabs {
  overflow: visible;
}
.visible.tabs a {
  border-bottom-color: transparent;
  text-align: left;
  display: block;
}
.dropdown-content {
  background-color: $primary;
}
.dropdown-content a:hover {
  color: #624c3e;
}
</style>
