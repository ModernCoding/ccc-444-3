export default () => defineStore ('screenProperties', {

  state: () => ({

    screenProperties: {

      heights: {
          header: 0,
          aside: 0,
          main: 0,
          footer: 0
        },


      widths: {
          aside: 0,
          central: 0,
          main: 0
        },


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
        
        },


      ratioIndex: 1,

      isSentenceInFooter: false
      
    }

  }),


  actions: {

    patchIsSentenceInFooter (is = true) {
      this.screenProperties.isSentenceInFooter = is
    },


    patchRatioIndex (window) {
      if (!window) { return }
      this.screenProperties.ratioIndex = getRatioIndex (window)
    },


    patchHeights () {

      const body = document.querySelector ('body')
      if (!body) { return }

      const { height } = body.getBoundingClientRect ()

      const ratioPart
        = 1 + PHI + PHI ** 2 + PHI ** 3 + PHI ** 4 + PHI ** 5


      this.screenProperties.heights = {

          header: [
              height / PHI ** 4,
              height / ratioPart * PHI ** 2
            ] [ +(this.screenProperties.ratioIndex < 2) ],

          aside: [
              height / PHI,
              height / ratioPart * PHI ** 4
            ] [ +(this.screenProperties.ratioIndex < 2) ],

          main: [
              height / PHI,
              height / ratioPart * PHI ** 5
            ] [ +(this.screenProperties.ratioIndex < 2) ],

          footer: [
              height / PHI ** 3,
              height / ratioPart * PHI ** 3
            ] [ +(this.screenProperties.ratioIndex < 2) ]

        }

    },


    patchPaddingTops () {

      (i =>

          this.screenProperties.paddingTops.calculated = {

              aside: [
                  0,
                  this.screenProperties.heights.aside / PHI ** 4
                ] [ i ],

              main: [
                  0,
                  this.screenProperties.heights.main / PHI ** 4
                ] [ i ],

              footer: [
                  0,
                  this.screenProperties.heights.footer / PHI ** 4
                ] [ i ]

            }

        ) (+(this.screenProperties.ratioIndex < 2))


      !this.screenProperties.ratioIndex < 2 && (

          this.screenProperties.paddingTops.corrected = {
              aside: 0,
              main: 0,
              footer: 0
            }
        
        )


      this.screenProperties.ratioIndex < 2 && (() => {

          (headerNav =>

              headerNav && (({ height }) => {

                this.screenProperties.paddingTops.corrected.aside
                  = (value => value < 0 ? 0 : value) (

                      this.screenProperties.paddingTops.calculated.aside
                        - this.screenProperties.heights.header
                        + height
                    
                    )

              }) (headerNav.getBoundingClientRect ())

            ) (document.querySelector ('#__nuxt > header > nav'))


          ;(logo =>

              logo && (({ height }) => {

                this.screenProperties.paddingTops.corrected.main
                  = (value => value < 0 ? 0 : value) (

                      this.screenProperties.paddingTops.calculated.main
                        - this.screenProperties.heights.aside
                        + height
                        + this
                            .screenProperties
                            .paddingTops
                            .corrected
                            .aside
                    
                    )

              }) (logo.getBoundingClientRect ())

            ) (document.querySelector ('#logo'))


          ;(article =>

              article && (({ height }) => {

                this.screenProperties.paddingTops.corrected.footer
                  = (value => value < 0 ? 0 : value) (

                      this
                        .screenProperties
                        .paddingTops
                        .calculated
                        .footer
                        
                        - this.screenProperties.heights.main
                        + height
                        + this
                            .screenProperties
                            .paddingTops
                            .corrected
                            .main
                    
                    )

              }) (article.getBoundingClientRect ())

            ) (document.querySelector ('main[role="main"] > article'))

        }) ()


      ;(aside => {

          if (!aside) { return }
          aside.removeAttribute ('style')

          this.screenProperties.ratioIndex < 2 && (
            aside.style.paddingTop = `${
              this.screenProperties.paddingTops.corrected.aside
            }px`
          )

        }) (document.querySelector ('#__nuxt > section > aside'))


      ;(main => {

          if (!main) { return }
          main.removeAttribute ('style')

          this.screenProperties.ratioIndex < 2 && (
            main.style.paddingTop = `${
              this.screenProperties.paddingTops.corrected.main
            }px`
          )
        
        }) (document.querySelector ('main[role="main"]'))


      ;(footer => {

          if (!footer) { return }
          footer.removeAttribute ('style')

          this.screenProperties.ratioIndex < 2 && (
            footer.style.paddingTop = `${
              this.screenProperties.paddingTops.corrected.footer
            }px`
          )
        
        }) (document.querySelector ('#__nuxt > footer'))

    },


    patchWidths () {

      const body = document.querySelector ('body')
      if (!body) { return }

      const { width } = body.getBoundingClientRect ()

      const maxWidth = width * (1 - 1 / PHI ** 6 - 1 / PHI ** 5)
        /*
          100% - $layoutPaddingLeftOnePart - $layoutPaddingRightOnePart
        */

      const ratioPart = [
          1 + PHI + PHI ** 2 + PHI ** 3 + PHI ** 4,
          1 + PHI + PHI ** 2 + PHI ** 3 + PHI ** 4 + PHI ** 5 + PHI ** 6
        ] [ this.screenProperties.ratioIndex - 2 ]


      this.screenProperties.widths = {

          aside: [
              maxWidth,
              width / ratioPart * PHI ** 3,
              width / ratioPart * PHI ** 4
            ] [
              +(this.screenProperties.ratioIndex > 1)
              + +(this.screenProperties.ratioIndex > 2)
            ],


          central: [ 0, width / ratioPart * PHI ** 5 ] [
              +(this.screenProperties.ratioIndex > 2)
            ],


          main: [
              maxWidth,
              width / ratioPart * PHI ** 4,
              width / ratioPart * PHI ** 6
            ] [
              +(this.screenProperties.ratioIndex > 1)
              + +(this.screenProperties.ratioIndex > 2)
            ]

        }

    },

  }

})