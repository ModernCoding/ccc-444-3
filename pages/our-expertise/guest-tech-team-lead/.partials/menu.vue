<script setup>

  const _handle = item => {
    
  }

</script>


<template>

  <menu class="o-guest-tech-team-lead-menu">

    <li
      v-for="item in $tm ('pages.ourExpertise.guestTechTeamLead.menu')"
      :key="item"
      @click="_handle (item)"
    >

      <i
        :class="`
            bi
            bi-hand-index${ ladies?.index ?? 0 === i ?? 1 ? '-fill' : '' }
          `"

        aria-hidden="true"
      />


      <div :data-jump="`#${ item.split ('|') [ 0 ] }`">
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