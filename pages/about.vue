<template>
  <div class="content">
    <h1>About CSS Frameworks</h1>
    <p>CSS Frameworks is leaderboard of the CSS frameworks. Information is Collected using API from Github.</p>
    <p>
      This site itself uses <a href="http://bulma.io/">bulma</a>.
    </p>
    <p>
      Hosting service is <a href="https://www.netlify.com/">Netlify</a>,
      it is running <a href="https://www.staticgen.com/">StaticGen</a>.
      I thought necessary the site that compare their CSS frameworks when I seen it. So, This site was created.
      Thank StaticGen and pay one's respects.
    </p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: 'About CSS Frameworks'
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>

