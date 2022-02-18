<template>
  <main class="wrapper">
    <ww3-header></ww3-header>
    <ww3-main></ww3-main>
    <ww3-footer></ww3-footer>
  </main>
</template>

<script>
import Ww3Header from '../components/ww3-header'
import Ww3Main from '../components/ww3-main'
import Ww3Footer from '../components/ww3-footer'

export default {
  name: 'IndexPage',
  components: {
    Ww3Header,
    Ww3Main,
    Ww3Footer
  }
}
</script>
