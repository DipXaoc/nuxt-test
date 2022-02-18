<template>
  <ul>
    <li v-for="(item, idx) in arrLangs" :key="idx">
      <nuxt-link :to="switchLocalePath(`${item.lang}`)" v-html="item.text" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'choise-lang',
  data () {
    return {
      arrLangs: [
        {
          lang: 'en',
          text: 'EN'
        },
        {
          lang: 'ru',
          text: 'RU'
        },
        {
          lang: 'fr',
          text: 'FR'
        },
        {
          lang: 'de',
          text: 'DE'
        },
        {
          lang: 'pl',
          text: 'PL'
        },
        {
          lang: 'es',
          text: 'ES'
        },
        {
          lang: 'tr',
          text: 'TR'
        },
        {
          lang: 'ar',
          text: 'AR'
        }
      ]
    }
  }
}
</script>

<style>

</style>
