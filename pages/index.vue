<template>
  <section class="section">
    <div class="container">
      <transition-group name="flip-list" tag="div"
        class="columns wrap">
        <framework
          class="column is-3 is-flex"
          v-for="framework in sortedFrameworks"
          :key="framework.name"
          :framework="framework"></framework>
      </transition-group>
    </div>
  </section>
</template>

<script>
import Framework from '~/components/framework'
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['sortedFrameworks']),
  components: {
    Framework
  }
}
</script>
<style scoped>
.flip-list-move {
  transition: transform 1s;
}
.wrap {
  flex-wrap: wrap;
}
</style>
