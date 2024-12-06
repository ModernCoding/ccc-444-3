<script setup>

  const { locale } = useI18n ()


  const _handle = id => {

    const element = document.querySelector (id)
    if (!element) { return }


    ;(content => {

        if (!content) { return }

        const skillPicture
          = content.querySelector ('.o-expertise-skill-picture')


        const top = skillPicture

            ? element.getBoundingClientRect ().top
                - skillPicture.getBoundingClientRect ().top
        
            : element.getBoundingClientRect ().top
        

        content.scrollTo ({ top, behavior: 'smooth' })

      }) (document.querySelector ('.o-expertise-skill-text'))
  
  }

</script>


<template>

  <menu class="o-expertise-skill-menu">

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