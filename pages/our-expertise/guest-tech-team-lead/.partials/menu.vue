<script setup>

  const _handle = id => {

    const element = document.querySelector (id)
    if (!element) { return }


    ;(content => {

        if (!content) { return }


        // content.scrollTo ({

        //     top: 0,
        //     behavior: 'instant'

        //   })


        content.scrollTo ({

            top: content.getBoundingClientRect ().height
                - element.getBoundingClientRect ().height
                + content.getBoundingClientRect ().top,

            behavior: 'smooth'

          })

      }) (document.querySelector ('#guest-tech-team-lead'))
  
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
        {{ item.split ('|') [ 1 ] }}
      </div>

    </li>

  </menu>

</template>


<style
  scoped
  src="@/assets/sass/pages/our-expertise/guest-tech-team-lead.sass"
  lang="sass"
></style>