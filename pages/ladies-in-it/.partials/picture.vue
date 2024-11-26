<script setup>
  
  const ladiesStore = defineLadiesStoreFromComposable () ()

  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()


  const { ladies } = storeToRefs (ladiesStore)
  const { screenProperties } = storeToRefs (screenPropertiesStore)

</script>


<template>

  <figure class="o-lady-picture">

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

</template>


<style
  scoped
  src="@/assets/sass/pages/ladies-in-it/index.sass"
  lang="sass"
></style>