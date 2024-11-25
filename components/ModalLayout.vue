<script setup>

  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()
  
  const { screenProperties } = storeToRefs (screenPropertiesStore)


  onMounted (() => {

  })

</script>


<template>

  <section class="o-modal" id="modal-layout">
    <slot />
  </section>
  
</template>