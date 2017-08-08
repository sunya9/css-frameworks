<template>
  <transition-group
    name="flip-list"
    tag="div"
    class="columns wrap"
    >
    <framework
      class="column is-3 is-flex flip-list-item"
      v-for="framework in sortedFrameworks"
      :key="framework.name"
      :framework="framework"></framework>
  </transition-group>
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
</style>
