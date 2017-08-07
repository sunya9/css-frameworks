<template>
  <div>
    <app-header></app-header>
    <main>
      <nuxt/>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '~/components/app-header.vue'
import AppFooter from '~/components/app-footer.vue'
export default {
  components: {
    AppHeader, AppFooter
  }
}
</script>
