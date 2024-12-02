<script setup>
  
  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()

  const { screenProperties } = storeToRefs (screenPropertiesStore)

  const { locale } = useI18n ()

</script>


<template>

  <article class="o-profile-text">

    <h1>

      <span
        v-for="s, i in $t ('pages.team.member.babe.quote').split ('%')"
        :key="s"
        :class="[ '', 'fw-bold o-underline' ] [ +(i % 2 !== 0) ]"
      >
        {{ s }}
      </span>
    
    </h1>


    <h2>{{ $t ('pages.team.member.babe.by') }}</h2>

  </article>

</template>


<style
  scoped
  src="@/assets/sass/pages/team/member.sass"
  lang="sass"
></style>