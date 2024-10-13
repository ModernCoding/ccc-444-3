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

    patchAsideShow (content) {
        this.modal.aside.content = content
      },

    patchAsideShow (is = true) {
        this.modal.aside.show = is
      },


    patchCentralShow (content) {
        this.modal.central.content = content
      },

    patchCentralShow (is = true) {
        this.modal.central.show = is
      },


    patchMainShow (content) {
        this.modal.main.content = content
      },

    patchMainShow (is = true) {
        this.modal.main.show = is
      },


    resetAside () {
        this.modal.aside.content = null
        this.modal.aside.show = false
      },

    resetCentral () {
        this.modal.central.content = null
        this.modal.central.show = false
      },

    resetMain () {
        this.modal.main.content = null
        this.modal.main.show = false
      }

  }

})