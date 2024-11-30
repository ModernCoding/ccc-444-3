<script setup>
  const { locale } = useI18n ()
</script>


<template>

  <hgroup class="o-profile-name">

    <h1
      :class="`
          o-font-${ [ 'en', locale ] [ +(locale === 'th') ] }
        `"
        
      :data-wrap="[ '0', '1' ] [ +(locale !== 'th') ]"
    >
      {{ NAMES.babe [ locale ] ?? NAMES.babe.en }}
    </h1>

  </hgroup>
  
</template>


<style
  scoped
  src="@/assets/sass/pages/team/member.sass"
  lang="sass"
></style>