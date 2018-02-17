<template>
  <div class="content">
    <h1>{{title}}</h1>
    <p>
      Following below rules.
    </p>
    <ul>
      <li><b>Don't dependant specific JavaScript frameworks.</b> But exclude jQuery. Because it is the library rather than the framework.</li>
      <li><b>Be GitHub projects for convenience.</b></li>
      <li><b>Open sources.</b></li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: 'The Rules'
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>
