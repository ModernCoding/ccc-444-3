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


    patchHeights () {

      const body = document.querySelector ('body')
      if (!body) { return }

      const { height } = body.getBoundingClientRect ()

      const ratioPart
        = 1 + PHI + PHI ** 2 + PHI ** 3 + PHI ** 4 + PHI ** 5


      this.screen.heights = {

          header: [
              height / PHI ** 4,
              height / ratioPart * PHI ** 2
            ] [ +this.screen.isPortrait ],

          aside: [
              height / PHI,
              height / ratioPart * PHI ** 4
            ] [ +this.screen.isPortrait ],

          main: [
              height / PHI,
              height / ratioPart * PHI ** 5
            ] [ +this.screen.isPortrait ],

          footer: [
              height / PHI ** 3,
              height / ratioPart * PHI ** 3
            ] [ +this.screen.isPortrait ]

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


      !this.screen.isPortrait && (

          this.screen.paddingTops.corrected = {
              aside: 0,
              main: 0,
              footer: 0
            }
        
        )


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
                    + this.screen.paddingTops.corrected.aside
                
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
                    + this.screen.paddingTops.corrected.main
                
                )

              }) (article.getBoundingClientRect ())

            ) (document.querySelector ('main[role="main"] > article'))

        }) ()


      ;(aside => {

          if (!aside) { return }
          aside.removeAttribute ('style')

          this.screen.isPortrait && (
            aside.style.paddingTop
              = `${ this.screen.paddingTops.corrected.aside }px`
          )

        }) (document.querySelector ('#__nuxt > section > aside'))


      ;(main => {

          if (!main) { return }
          main.removeAttribute ('style')

          this.screen.isPortrait && (
            main.style.paddingTop
              = `${ this.screen.paddingTops.corrected.main }px`
          )
        
        }) (document.querySelector ('main[role="main"]'))


      ;(footer => {

          if (!footer) { return }
          footer.removeAttribute ('style')

          this.screen.isPortrait && (
            footer.style.paddingTop
              = `${ this.screen.paddingTops.corrected.footer }px`
          )
        
        }) (document.querySelector ('#__nuxt > footer'))

    }

  }

})