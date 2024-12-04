<script setup>
  const ladiesStore = defineLadiesStoreFromComposable () ()
  const { ladies } = storeToRefs (ladiesStore)
</script>


<template>

  <h1 class="o-lady">

    <p>

      <span
        v-for="
            sentence, i in $t (
              `pages.ladiesInIt.index.${
                ladies.MAP.get (ladies.index).key
              }`
            ).split ('%')
          "

        :key="i"
        :class="[ '', 'fw-bold' ] [ +(i % 2 !== 0) ]"
      >
        {{ sentence }}
      </span>

    </p>
  
  </h1>

</template>


<style
  scoped
  src="@/assets/sass/pages/ladies-in-it/index.sass"
  lang="sass"
></style>