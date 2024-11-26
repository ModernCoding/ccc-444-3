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
          loading="lazy"
        />
      
      </picture>
      

      <figcaption>
        {{ ladies.MAP.get (ladies.index).dates }}
      </figcaption>

    </figure>


    <h1>{{ ladies.MAP.get (ladies.index).key }}</h1>
  
  </section>

</template>


<style
  scoped
  src="@/assets/sass/pages/ladies-in-it/index.sass"
  lang="sass"
></style>