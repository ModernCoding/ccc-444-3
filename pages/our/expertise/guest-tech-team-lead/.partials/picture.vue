<script setup>
  const ladiesStore = defineLadiesStoreFromComposable () ()
  const { ladies } = storeToRefs (ladiesStore)
</script>


<template>

  <figure class="o-lady-picture">

    <NuxtImg
      :src="`/images/${ ladies.MAP.get (ladies.index).key }.png`"
      :alt="ladies.MAP.get (ladies.index).name"
      :modifiers="{ b: '#110d0d', opacity: 1 }"
      loading="lazy"
    />

  </figure>

</template>


<style
  scoped
  src="@/assets/sass/pages/ladies-in-it/index.sass"
  lang="sass"
></style>