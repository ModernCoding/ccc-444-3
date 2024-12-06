<script setup>

  const { locale } = useI18n ()


  const _handle = id => {

    const element = document.querySelector (id)
    if (!element) { return }


    ;(content => {

        if (!content) { return }

        const angkorWat
          = content.querySelector ('.o-expertise-angkor-wat')
        
        if (!angkorWat) { return }


        content.scrollTo ({

            top: element.getBoundingClientRect ().top
                - angkorWat.getBoundingClientRect ().top,

            behavior: 'smooth'

          })

      }) (document.querySelector ('.o-guest-tech-team-lead'))
  
  }

</script>


<template>

  <menu class="o-guest-tech-team-lead-menu">

    <li
      v-for="item in $tm ('pages.ourExpertise.guestTechTeamLead.menu')"
      :key="item"
      @click="_handle (`.o-${ item.split ('|') [ 0 ] }`)"
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