export default () => defineStore ('screen', {

  state: () => ({

    screen: {

      heights: {
          header: 0,
          aside: 0,
          main: 0,
          footer: 0
        },


      isPortrait: false,
      

      paddingTops: {

          calculated: {
              aside: 0,
              main: 0,
              footer: 0
            },
        
          corrected: {
              aside: 0,
              main: 0,
              footer: 0
            }
        
        }
      
    }

  }),


  actions: {

    patchIsPortrait () {

      const body = document.querySelector ('body')
      if (!body) { return }

      const { width, height } = body.getBoundingClientRect ()
      this.screen.isPortrait = width < height

    },


    patchPortraitHeights () {

      const body = document.querySelector ('body')
      if (!body) { return }

      const { height } = body.getBoundingClientRect ()

      const ratioPart
        = 1 + PHI + PHI ** 2 + PHI ** 3 + PHI ** 4 + PHI ** 5


      this.screen.heights = {
          header: height / ratioPart * PHI ** 2,
          aside: height / ratioPart * PHI ** 4,
          main: height / ratioPart * PHI ** 5,
          footer: height / ratioPart * PHI ** 3
        }

    },


    patchPaddingTops () {

      (i =>

          this.screen.paddingTops.calculated = {
              aside: [ 0, this.screen.heights.aside / PHI ** 4 ] [ i ],
              main: [ 0, this.screen.heights.main / PHI ** 4 ] [ i ],
              footer: [ 0, this.screen.heights.footer / PHI ** 4 ] [ i ]
            }

        ) (+this.screen.isPortrait)


      this.screen.isPortrait && (() => {

          (headerNav =>

              headerNav && (({ height }) => {

                this.screen.paddingTops.corrected.aside = (value =>
                  value < 0 ? 0 : value
                ) (

                  this.screen.paddingTops.calculated.aside
                    - this.screen.heights.header
                    + height
                
                )

              }) (headerNav.getBoundingClientRect ())

            ) (document.querySelector ('#__nuxt > header > nav'))


          ;(logo =>

              logo && (({ height }) => {

                this.screen.paddingTops.corrected.main = (value =>
                  value < 0 ? 0 : value
                ) (

                  this.screen.paddingTops.calculated.main
                    - this.screen.heights.aside
                    + height
                
                )

              }) (logo.getBoundingClientRect ())

            ) (document.querySelector ('#logo'))


          ;(article =>

              article && (({ height }) => {

                this.screen.paddingTops.corrected.footer = (value =>
                  value < 0 ? 0 : value
                ) (

                  this.screen.paddingTops.calculated.footer
                    - this.screen.heights.main
                    + height
                
                )

              }) (article.getBoundingClientRect ())

            ) (document.querySelector ('main[role="main"] > article'))

        }) ()

    }

  }

})