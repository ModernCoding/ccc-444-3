<script setup>
  const index = ref (0)
  const ladies = [ 'Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton' ]
</script>


<template>

  <menu id="ladies">

    <li
      v-for="lady, i in ladies"
      :key="lady"
      @click="index = i"
    >

      <i
        :class="`
            bi
            bi-hand-index${
                index === ladies.indexOf (lady) ? '-fill' : ''
              }
          `"

        aria-hidden="true"
      />


      <div
        :class="
            [ '', 'fw-bold' ] [ +(index === ladies.indexOf (lady)) ]
          "
      >
        {{ lady }}
      </div>

    </li>

  </menu>

</template>


<style
  scoped
  src="@/assets/sass/pages/ladies-in-it/index.sass"
  lang="sass"
></style>