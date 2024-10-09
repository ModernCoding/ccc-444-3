export default () => defineStore ('loading', {

  state: () => ({

    loading: {
      is: true,
      isResizingMode: false,
      showLogo: false
    }

  }),


  actions: {

    patchIs (is = true) {
      this.loading.is = is
    },

    patchIsResizingMode (is = true) {
      this.loading.isResizingMode = is
    },

    patchShowLogo (is = true) {
      this.loading.showLogo = is
    }

  }

})