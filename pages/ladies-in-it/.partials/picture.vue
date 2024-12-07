<script setup>
  const ladiesStore = defineLadiesStoreFromComposable () ()
  const { ladies } = storeToRefs (ladiesStore)
</script>


<template>

  <figure class="o-lady-picture">

    <NuxtImg
      v-for="i in ladies.MAP.keys ()"
      :key="i"
      :src="`/images/${ ladies.MAP.get (i).key }.png`"
      :alt="ladies.MAP.get (i).name"
      :modifiers="{ b: '#110d0d', opacity: 1 }"
      loading="lazy"
      :data-is-shown="+(i === ladies.index)"
    />

  </figure>

</template>


<style
  scoped
  src="@/assets/sass/pages/ladies-in-it/index.sass"
  lang="sass"
></style>