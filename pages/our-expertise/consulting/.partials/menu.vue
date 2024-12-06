<script setup>

  const ourExpertiseScripts
    = collectOurExpertiseScriptsFromComposable ()

  const { locale } = useI18n ()

</script>


<template>

  <menu class="o-expertise-skill-menu">

    <li
      v-for="item in $tm ('pages.ourExpertise.guestTechTeamLead.menu')"
      :key="item"

      @click="
          ourExpertiseScripts
            .scrollTo (`.o-${ item.split ('|') [ 0 ] }`)
        "
    >

      <i class="bi bi-link-45deg" aria-hidden="true" />

      <div :data-jump="`.o-${ item.split ('|') [ 0 ] }`">
        {{ hyphenate (item.split ('|') [ 1 ], locale) }}
      </div>

    </li>

  </menu>

</template>


<style
  scoped
  src="@/assets/sass/pages/our-expertise/skills.sass"
  lang="sass"
></style>