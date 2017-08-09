<template>
  <footer class="footer">
    <div class="container content has-text-centered">
      <p>
        CSS Frameworks is ran by <strong><a href="https://unsweets.net/">unsweets</a></strong>.
      </p>
      <p>
        <small>© unsweets <time :datetime="date.toISOString()" :title="`Last modified: ${date.toISOString()}`">{{date.getFullYear()}}</time></small></p>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      date: new Date()
    }
  }
}
</script>
