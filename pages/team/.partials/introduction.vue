<template>

  <hgroup class="o-introduction">

    <h1>

      <span
        v-for="sentence, i in $t ('pages.team.index.all').split ('%')"
        :key="i"
        :class="[ '', 'o-underline' ] [ +(i % 2 !== 0) ]"
      >
        {{ sentence }}
      </span>

    </h1>

  </hgroup>
  
</template>


<style
  scoped
  src="@/assets/sass/pages/team/index.sass"
  lang="sass"
></style>