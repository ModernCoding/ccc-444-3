export default () => defineStore ('loading', {

  state: () => ({

    loading: {
      is: true,
      isImageLoadingComplete: false,
      isResizingMode: false,
      isVeilMode: false,
      showLogoInLoader: false
    }

  }),


  actions: {

    patchIs (is = true) {
      this.loading.is = is
    },

    patchIsImageLoadingComplete (is = true) {
      this.loading.isImageLoadingComplete = is
    },

    patchIsResizingMode (is = true) {
      this.loading.isResizingMode = is
    },

    patchIsVeilMode (is = true) {
      this.loading.isVeilMode = is
    },

    patchShowLogoInLoader (is = true) {
      this.loading.showLogoInLoader = is
    }

  }

})