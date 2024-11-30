<script setup>
  
  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()

  const { screenProperties } = storeToRefs (screenPropertiesStore)

  const { locale } = useI18n ()

</script>


<template>

  <article class="o-profile-text">

    <h1 class="o-font-en">Alle Menschen werden Brüder!</h1>


    <figure
      class="o-beethoven"
      :data-number-of-parts="screenProperties.ratioIndex"
    >

      <NuxtImg
        src="/images/beethoven.png"
        alt="Ludwig van Beethoven"
        :modifiers="{ b: '#110d0d', opacity: 1 }"
        loading="lazy"
      />

    </figure>


    <template v-for="p in $tm('pages.team.member.text')" :key="p">

      <ul v-if="p.includes ('>')">

        <template v-for="s, i in p.split ('>')" :key="s">
          <li v-if="i > 0">{{ hyphenate (s, locale) }}</li>
        </template>

      </ul>


      <p v-else>

        <span
          v-for="s, i in p.split ('%')"
          :key="s"
          :class="[ '', 'fw-bold o-underline' ] [ +(i % 2 !== 0) ]"
        >{{ hyphenate (s, locale) }}</span>
      
      </p>

    </template>

  </article>

</template>


<style
  scoped
  src="@/assets/sass/pages/team/member.sass"
  lang="sass"
></style>