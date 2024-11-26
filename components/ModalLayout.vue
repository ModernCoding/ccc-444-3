<script setup>

  const { isShorter } = defineProps ({

      isShorter: {
          type: String,
          default: "0"
        }

    })


  const loadingStore = defineLoadingStoreFromComposable () ()

  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()
  
  const { loading } = storeToRefs (loadingStore)
  const { screenProperties } = storeToRefs (screenPropertiesStore)


  const _resize = () => (modalLayout => {

      if (!modalLayout) { return }
      modalLayout.removeAttribute ('style')

      modalLayout.style.paddingTop
        = `${ screenProperties.value.paddingTops.corrected.aside }px`


      ;(modalContent => {

        if (!modalContent) { return }
        modalContent.removeAttribute ('style')


        if (modalContent.scrollHeight <= modalContent.clientHeight) {
          return modalContent.style.overflowY = 'hidden'
        }


        const modalPaddingLeft = parseInt (

            window
              .getComputedStyle (document.querySelector ('#__nuxt'))
              .getPropertyValue ('padding-right')
              .split ('px')
              .join ('')

          )


        modalContent.style.paddingRight
          = `${ modalPaddingLeft / PHI }px`

      }) (modalLayout.querySelector ('*'))

    }) (document.querySelector ('#modal-layout'))


  watch (screenPropertiesStore, _resize)


  onMounted (() => {
    _resize ()
    window.addEventListener ('resize', _resize)
  })

</script>


<template>

  <section
    class="o-modal"
    id="modal-layout"
    :data-is-shorter="isShorter"
  >

    <template v-if="!loading.is">
      <slot />
    </template>
  
  </section>
  
</template>