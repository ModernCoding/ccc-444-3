<script setup>
  const { locale } = useI18n ()
</script>


<template>

  <hgroup class="o-tax-id">
    
    <h1>{{ $t ('pages.contact.index.taxId') }}</h1>


    <h2
      v-if="locale === 'my'"
      class="o-font-my"
    >
      ၀၁၀၅၅၆၅၀၄၈၉၈၁
    </h2>


    <h2
      v-if="locale === 'th'"
      class="o-font-th"
    >
      ๐๑๐๕๕๖๕๐๔๘๙๘๑
    </h2>


    <h2
      v-if="![ 'my', 'th' ].includes (locale)"
      class="o-font-en"
    >
      0105565048981
    </h2>

  </hgroup>

</template>


<style
  scoped
  src="@/assets/sass/pages/contact/index.sass"
  lang="sass"
></style>