<script setup>
  const { locale } = useI18n ()
</script>


<template>

  <article
    v-if="locale === 'th'"
    class="o-font-th o-address"
  >
    <h1>๖๑/๒๙ บางแสนสาย ๔ ใต้</h1>
    <h2>ถนน ส่วนบุคคล NA วิลล่า ๒</h2>
    <h3>อำเภอเมืองชลบุรี จ.ชลบุรี ๒๐๑๓๐</h3>
  </article>


  <article v-else class="o-font-en o-address">
    <h1>61/29 Bangsaen Sai 4 Tai Road</h1>
    <h2>Thanon Suan Bukkhon NA Villa 2</h2>
    <h3>Saen Suk, Mueang Chonburi, 20130, Thailand</h3>
  </article>

</template>


<style
  scoped
  src="@/assets/sass/pages/contact/index.sass"
  lang="sass"
></style>