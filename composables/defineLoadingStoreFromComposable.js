export default () => defineStore ('loading', {

  state: () => ({

    loading: {
      is: true,
      showLogo: false
    }

  }),


  actions: {

    patchIs (is = true) {
      this.loading.is = is
    },

    patchShowLogo (is = true) {
      this.loading.showLogo = is
    }

  }

})