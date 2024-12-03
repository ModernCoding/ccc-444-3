<script setup>
  
  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()

  const { screenProperties } = storeToRefs (screenPropertiesStore)

  const { locale } = useI18n ()

</script>


<template>

  <article class="o-profile-text">

    <h1>
      {{ hyphenate ($t ('pages.team.member.michel.cambodia'), locale) }}
    </h1>


    <figure>

      <NuxtImg
        src="/images/countries/angkor-wat.png"
        alt="Angkor Wat"
        :modifiers="{ b: '#110d0d', opacity: 1 }"
        loading="lazy"
      />

    </figure>


    <p>

      <span
        v-for="
            s, i
              in $t ('pages.team.member.michel.mentoring').split ('^')
          "
        :key="s"
        :class="[ '', 'o-font-en' ] [ +(i % 2 !== 0) ]"
      >

        <span
          v-for="a, j in s.split ('%')"
          :key="a"
          :class="[ '', 'fw-bold o-underline' ] [ +(j % 2 !== 0) ]"
        >
          {{ hyphenate (a, locale) }}
        </span>

      </span>

    </p>

  </article>

</template>


<style
  scoped
  src="@/assets/sass/pages/team/member.sass"
  lang="sass"
></style>