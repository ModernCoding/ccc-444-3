<template>

  <hgroup class="o-philosophy-quote">

    <h1>

      <span
        v-for="
            s, i in $t ('pages.ourPhilosophy.index.quote').split ('%')
          "

        :key="i"
        :class="[ '', 'fw-bold o-underline' ] [ +(i % 2 !== 0) ]"
      >
        {{ s }}
      </span>

    </h1>

  </hgroup>
  
</template>


<style
  scoped
  src="@/assets/sass/pages/our-philosophy/index.sass"
  lang="sass"
></style>