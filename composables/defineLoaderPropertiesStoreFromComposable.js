export default () => defineStore ('loaderProperties', {

  state: () => ({

    loaderProperties: {

      isPortrait: true,

      heights: {
          logo: 0,
          spinner: 0
        },
      
      widths: {
          logo: 0,
          spinner: 0
        },
      
    }

  }),


  actions: {

    patchIsPortrait () {

      const body = document.querySelector ('body')
      if (!body) { return }

      const { height, width } = body.getBoundingClientRect ()

      this.loaderProperties.isPortrait = width < height

    },


    patchHeights () {

      const body = document.querySelector ('body')
      if (!body) { return }

      const { height, width } = body.getBoundingClientRect ()
      const ratioPart = 1 + PHI + PHI ** 2 + PHI ** 3


      this.loaderProperties.heights = {

          logo: [
              height / PHI,
              height / ratioPart * PHI ** 3
            ] [ +(this.loaderProperties.isPortrait) ],

          spinner: [
              height / PHI,
              height / ratioPart * PHI ** 2
            ] [ +(this.loaderProperties.isPortrait) ]

        }

    },


    patchWidths () {

      const body = document.querySelector ('body')
      if (!body) { return }

      const { height, width } = body.getBoundingClientRect ()
      const ratioPart = 1 + PHI + PHI ** 2 + PHI ** 3


      this.loaderProperties.widths = {

          logo: [
              width / ratioPart * PHI ** 3,
              width
            ] [ +(this.loaderProperties.isPortrait) ],

          spinner: [
              width / ratioPart * PHI ** 2,
              width
            ] [ +(this.loaderProperties.isPortrait) ]

        }

    }

  }

})