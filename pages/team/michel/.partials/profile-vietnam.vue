<script setup>
  
  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()

  const { screenProperties } = storeToRefs (screenPropertiesStore)

  const { locale } = useI18n ()

</script>


<template>

  <article class="o-profile-text">

    <h1>
      {{ hyphenate ($t ('pages.team.member.michel.vietnam'), locale) }}
    </h1>


    <figure>

      <NuxtImg
        src="/images/vietnamese-girl.png"
        alt="Vietnamese girl"
        :modifiers="{ b: '#110d0d', opacity: 1 }"
        loading="lazy"
      />

    </figure>

  </article>

</template>


<style
  scoped
  src="@/assets/sass/pages/team/member.sass"
  lang="sass"
></style>