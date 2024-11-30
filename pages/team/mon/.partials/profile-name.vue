<script setup>
  const { locale } = useI18n ()
</script>


<template>

  <hgroup class="o-profile-name">

    <h1
      :class="`
          o-font-${ [ 'en', locale ] [ +(locale === 'my') ] }
        `"
        
      data-wrap="0"
    >
      {{ NAMES.mon [ locale ] ?? NAMES.mon.en }}
    </h1>

  </hgroup>
  
</template>


<style
  scoped
  src="@/assets/sass/pages/team/member.sass"
  lang="sass"
></style>