<template>
  <div class="content">
    <h1>{{title}}</h1>
    <p>
      Following bellow rules.
    </p>
    <ul>
      <li>Don't dependant specific JavaScript frameworks. But exclude jQuery. It is the library rather than the framework.</li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: 'The Rules[WIP]'
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>
