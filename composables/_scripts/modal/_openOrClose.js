export default (modalStore, modal, key) => {

  document
    .querySelectorAll ('main[role="main"] > *:not(.o-modal)')
    .forEach (element =>

        modal.main.show
          ? element.removeAttribute ('data-is-hidden')
          : element.setAttribute ('data-is-hidden', 1)

      )


  if (modal.main.show || !key) { return modalStore.resetMain () }

  modalStore.patchMainShow ()
  modalStore.patchMainContent (key)

}