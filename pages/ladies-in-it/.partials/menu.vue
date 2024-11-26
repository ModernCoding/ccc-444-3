<script setup>
  const ladiesStore = defineLadiesStoreFromComposable () ()
  const { ladies } = storeToRefs (ladiesStore)
</script>


<template>

  <menu class="o-ladies-menu">

    <li
      v-for="i in ladies.MAP.keys ()"
      :key="i"
      @click="ladiesStore.patchIndex (i)"
    >

      <i
        :class="`
            bi
            bi-hand-index${ ladies.index === i ? '-fill' : '' }
          `"

        aria-hidden="true"
      />


      <div :class="[ '', 'fw-bold' ] [ +(ladies.index === i) ]">
        {{ ladies.MAP.get (i).name }}
      </div>

    </li>

  </menu>

</template>


<style
  scoped
  src="@/assets/sass/pages/ladies-in-it/index.sass"
  lang="sass"
></style>