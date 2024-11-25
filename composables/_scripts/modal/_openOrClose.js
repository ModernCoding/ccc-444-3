export default (screenProperties, modalStore, key) => {

  const { modal } = storeToRefs (modalStore)

  document
    .querySelectorAll ('main[role="main"] > *:not(.o-modal)')
    .forEach (element =>

        modal.value.show
          ? element.removeAttribute ('data-is-hidden')
          : element.setAttribute ('data-is-hidden', 1)

      )



  switch (true) {

    case  !key:

      modalStore.resetModal ()
      break


    case  modal.value.openModals.includes (key)
          && modal.value.content === 'Locales'
          && key !== 'Locales':

      modalStore.patchOpenModals (
          modal.value.openModals.filter (oM => oM !== 'Locales')
        )

      modalStore.patchContent (key)
      break


    case  modal.value.openModals.includes (key):

      modalStore.patchOpenModals (
          modal.value.openModals.filter (oM => oM !== key)
        )


      modal.value.show

        ? modalStore.patchContent (
            modal.value.openModals [ modal.value.openModals.length - 1 ]
          )

        : modalStore.resetModal ()

      break


    default:

      modalStore.patchOpenModals (
          key === 'Locales'
            ? [ ...modal.value.openModals, key ]
            : [ key ]
        )

      modalStore.patchContent (key)
      break

  }


  const mainModal = document.querySelector ('#main-modal')

  if (!mainModal) { return }
  mainModal.removeAttribute ('style')

  if (!modal.value.show) { return }


  ;(_resize => {

      _resize ()
      window.addEventListener ('resize', _resize)

    }) (

      () => mainModal.style.paddingTop
          = `${ screenProperties.paddingTops.corrected.aside }px`

    )

}