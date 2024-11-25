<script setup>
  const ladiesStore = defineLadiesStoreFromComposable () ()
  const { ladies } = storeToRefs (ladiesStore)
</script>


<template>

  <menu id="ladies">

    <li
      v-for="lady, i in ladies.names"
      :key="lady"
      @click="ladiesStore.patchIndex (i)"
    >

      <i
        :class="`
            bi
            bi-hand-index${
                ladies.index === ladies.names.indexOf (lady)
                  ? '-fill'
                  : ''
              }
          `"

        aria-hidden="true"
      />


      <div
        :class="
            [ '', 'fw-bold' ] [
              +(ladies.index === ladies.names.indexOf (lady))
            ]
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