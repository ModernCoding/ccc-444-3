export default () => defineStore ('layoutProperties', {

  state: () => ({

    layoutProperties: {

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

      this.layoutProperties.isPortrait = width < height

    },


    patchHeights () {

      const body = document.querySelector ('body')
      if (!body) { return }

      const { height, width } = body.getBoundingClientRect ()
      const ratioPart = 1 + PHI + PHI ** 2 + PHI ** 3


      this.layoutProperties.heights = {

          logo: [
              height / PHI,
              height / ratioPart * PHI ** 3
            ] [ +(this.layoutProperties.isPortrait) ],

          spinner: [
              height / PHI,
              height / ratioPart * PHI ** 2
            ] [ +(this.layoutProperties.isPortrait) ]

        }

    },


    patchWidths () {

      const body = document.querySelector ('body')
      if (!body) { return }

      const { height, width } = body.getBoundingClientRect ()
      const ratioPart = 1 + PHI + PHI ** 2 + PHI ** 3


      this.layoutProperties.widths = {

          logo: [
              width / ratioPart * PHI ** 3,
              width
            ] [ +(this.layoutProperties.isPortrait) ],

          spinner: [
              width / ratioPart * PHI ** 2,
              width
            ] [ +(this.layoutProperties.isPortrait) ]

        }

    }

  }

})