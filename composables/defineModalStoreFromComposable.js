export default () => defineStore ('modal', {

  state: () => ({

    modal: {
      content: null,
      openModals: [],
      show: false
    }

  }),


  actions: {

    patchContent (content) {
        this.modal.content = content
      },

    patchOpenModals (payload) {
        this.modal.openModals = payload
        this.modal.show = payload.length > 0
      },

    patchShow (is = true) {
        this.modal.show = is
      },

    resetModal () {
        this.modal.content = null
        this.modal.openModals = []
        this.modal.show = false
      }

  }

})