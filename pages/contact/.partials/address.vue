<script setup>
  const { locale } = useI18n ()
</script>


<template>

  <article
    v-if="locale === 'th'"
    class="o-font-th o-address"
  >
    <h1>๖๑/๒๙&nbsp;ถนนบางแสนสาย&nbsp;๔&nbsp;ใต้</h1>
    <h2>ถนน&nbsp;ส่วนบุคคล&nbsp;NA&nbsp;วิลล่า&nbsp;๒</h2>
    <h3>อำเภอเมืองชลบุรี&nbsp;จ.ชลบุรี&nbsp;๒๐๑๓๐</h3>
  </article>


  <article v-else class="o-font-en o-address">

    <h1>61/29&nbsp;Bangsaen&nbsp;Sai&nbsp;4&nbsp;Tai&nbsp;Road</h1>
    <h2>Thanon&nbsp;Suan&nbsp;Bukkhon&nbsp;NA&nbsp;Villa&nbsp;2</h2>

    <h3>
      Saen&nbsp;Suk,&nbsp;Mueang&nbsp;Chonburi,&nbsp;20130,&nbsp;Thailand
    </h3>

  </article>

</template>


<style
  scoped
  src="@/assets/sass/pages/contact/index.sass"
  lang="sass"
></style>