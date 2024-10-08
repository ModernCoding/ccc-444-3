export default () => defineStore ('layoutProperties', {

  state: () => ({

    layoutProperties: {

      heights: {
          logo: 0,
          gap: 0,
          spinner: 0
        },
      
      widths: {
          logo: 0,
          gap: 0,
          spinner: 0
        },
      
    }

  }),


  actions: {

    patchHeights () {

      const body = document.querySelector ('body')
      if (!body) { return }

      const { height, width } = body.getBoundingClientRect ()
      const ratioPart = 1 + PHI + PHI ** 2 + PHI ** 3 + PHI ** 4


      this.layoutProperties.heights = {

          logo: [
              height / PHI,
              height / ratioPart * PHI ** 4
            ] [ +(width < height) ],

          gap: [
              height / PHI,
              height / ratioPart * PHI ** 2
            ] [ +(width < height) ],

          spinner: [
              height / PHI,
              height / ratioPart * PHI ** 3
            ] [ +(width < height) ]

        }

    }

  }

})