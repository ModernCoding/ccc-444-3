export default () => defineStore ('modal', {

  state: () => ({

    modal: {

      aside: {
        content: null,
        show: false
      },

      central: {
        content: null,
        show: false
      },

      main: {
        content: null,
        show: false
      }

    }

  }),


  actions: {

    patchAsideShow (is = true) {
      this.modal.aside.show = is
    },

    patchCentralShow (is = true) {
      this.modal.central.show = is
    },

    patchMainShow (is = true) {
      this.modal.main.show = is
    }

  }

})