export default (modalStore, key) => {

  const { modal } = storeToRefs (modalStore)

  document
    .querySelectorAll ('main[role="main"] > *:not(.o-modal)')
    .forEach (element =>

        modal.value.main.show
          ? element.removeAttribute ('data-is-hidden')
          : element.setAttribute ('data-is-hidden', 1)

      )


  if (modal.value.main.show || !key) { return modalStore.resetMain () }

  modalStore.patchMainShow ()
  modalStore.patchMainContent (key)

}