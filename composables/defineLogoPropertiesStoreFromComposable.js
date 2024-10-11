export default () => defineStore ('logoProperties', {

  state: () => ({

    logoProperties: {
      height: 0,
      width: 0
    }

  }),


  actions: {

    patchHeight (height) {
      this.logoProperties.height = height
    },

    patchWidth (width) {
      this.logoProperties.width = width
    }

  }

})