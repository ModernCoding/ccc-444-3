export default () => defineStore ('modal', {

  state: () => ({

    modal: {
      showAside: false,
      showCentral: false,
      showMain: false
    }

  }),


  actions: {

    patchShowAside (is = true) {
      this.modal.showAside = is
    },

    patchShowCentral (is = true) {
      this.modal.showCentral = is
    },

    patchShowMain (is = true) {
      this.modal.showMain = is
    }

  }

})