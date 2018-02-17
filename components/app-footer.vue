<template>
  <footer class="footer">
    <div class="container content has-text-centered">
      <p class="subtitle is-5">
        CSS Frameworks is ran by <strong><a href="https://unsweets.net/">&lt;unsweets/&gt;</a></strong>.
      </p>
      <p>
        <small>© &lt;unsweets/&gt; <time :datetime="date.toISOString()" :title="`Last modified: ${date.toISOString()}`">{{date.getFullYear()}}</time></small>
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
