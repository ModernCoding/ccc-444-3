<script setup>
  
  const ladiesStore = defineLadiesStoreFromComposable () ()

  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()


  const { ladies } = storeToRefs (ladiesStore)
  const { screenProperties } = storeToRefs (screenPropertiesStore)

</script>


<template>

  <section class="d-flex align-items-center">

    <figure>

      <picture>
      
        <NuxtImg
          :src="`/images/${ ladies.MAP.get (ladies.index).key }.png`"
          :alt="ladies.MAP.get (ladies.index).name"
          :modifiers="{ b: '#110d0d', opacity: 1 }"
          loading="lazy"
        />
      
      </picture>
      

      <figcaption>
        {{ ladies.MAP.get (ladies.index).dates }}
      </figcaption>

    </figure>


    <h1>

      <span
        v-for="
            sentence, i
              in $t (`pages.ladiesInIt.index.${ ladies.MAP.get (ladies.index).key }`).split ('%')
          "

        :key="i"
        :class="[ '', 'fw-bold' ] [ +(i % 2 !== 0) ]"
      >
        {{ sentence }}
      </span>
    
    </h1>
  
  </section>

</template>


<style
  scoped
  src="@/assets/sass/pages/ladies-in-it/index.sass"
  lang="sass"
></style>