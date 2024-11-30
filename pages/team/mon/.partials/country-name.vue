<script setup>
  const { locale } = useI18n ()
</script>


<template>

  <hgroup class="o-country-name">

    <h1>
      {{
        [ $t ('pages.team.member.from'), 'Du' ] [ +(locale === 'fr') ]
      }}

      {{ $t ('pages.team.member.myanmar') }}
    </h1>

  </hgroup>
  
</template>


<style
  scoped
  src="@/assets/sass/pages/team/member.sass"
  lang="sass"
></style>