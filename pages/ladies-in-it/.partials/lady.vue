<script setup>
  const ladiesStore = defineLadiesStoreFromComposable () ()
  const { ladies } = storeToRefs (ladiesStore)
</script>


<template>

  <h1 class="o-lady">

    <p
      v-for="j in ladies.MAP.keys ()"
      :key="j"
      :data-is-shown="+(j === ladies.index)"
    >

      <template v-if="j === ladies.index">

        <span
          v-for="
              sentence, i in $t (
                `pages.ladiesInIt.index.${
                  ladies.MAP.get (j).key
                }`
              ).split ('%')
            "

          :key="i"
          :class="[ '', 'fw-bold' ] [ +(i % 2 !== 0) ]"
        >
          {{ sentence }}
        </span>
        
      </template>

    </p>
  
  </h1>

</template>


<style
  scoped
  src="@/assets/sass/pages/ladies-in-it/index.sass"
  lang="sass"
></style>