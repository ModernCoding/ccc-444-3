export default () => defineStore ('loading', {

  state: () => ({

    loading: {
      is: true,
      isImageLoadingComplete: false,
      isResizingMode: false,
      showLogo: false
    }

  }),


  actions: {

    patchIs (is = true) {
      this.loading.is = is
    },

    patchIsImageLoadingComplete (is = false) {
      this.loading.isImageLoadingComplete = is
    },

    patchIsResizingMode (is = true) {
      this.loading.isResizingMode = is
    },

    patchShowLogo (is = true) {
      this.loading.showLogo = is
    }

  }

})