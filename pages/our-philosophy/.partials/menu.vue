<script setup>

  const ourPhilosophyScripts
    = collectOurPhilosophyScriptsFromComposable ()

</script>


<template>

  <menu class="o-philosophy-menu">

    <li @click="ourPhilosophyScripts.scrollTo ('#we-take-the-chance')">
      <i class="bi bi-link-45deg" aria-hidden="true" />
      <div>WE TAKE THE CHANCE!</div>
    </li>

    <li @click="ourPhilosophyScripts.scrollTo ('#we-give-the-chance')">
      <i class="bi bi-link-45deg" aria-hidden="true" />
      <div>WE GIVE THE CHANCE!</div>
    </li>

    <li
      @click="
          ourPhilosophyScripts.scrollTo ('#we-fight-for-the-chance')
        "
    >
      <i class="bi bi-link-45deg" aria-hidden="true" />
      <div>WE FIGHT FOR THE CHANCE!</div>
    </li>

  </menu>

</template>


<style
  scoped
  src="@/assets/sass/pages/our-philosophy/index.sass"
  lang="sass"
></style>