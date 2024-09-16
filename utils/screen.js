export const patchIsPortrait = screenStore =>

  (body =>

    body && (({ width, height }) =>

      screenStore
        .$patch (state => state.screen.isPortrait = width < height)

    ) (body.getBoundingClientRect ())

  ) (document.querySelector ('body'))


export const patchPortraitHeights = screenStore =>

  (body =>

    body && (({ height }) =>

      (ratioPart => {

        screenStore.$patch (state => state.screen.heights = {
            header: height / ratioPart * PHI ** 2,
            aside: height / ratioPart * PHI ** 4,
            main: height / ratioPart * PHI ** 5,
            footer: height / ratioPart * PHI ** 3
          })

      }) (1 + PHI + PHI ** 2 + PHI ** 3 + PHI ** 4 + PHI ** 5)
    
    ) (body.getBoundingClientRect ())

  ) (document.querySelector ('body'))


export const patchPortraitPaddingTops = screenStore => (({ screen }) =>
  
  screenStore.$patch (state => state.screen.paddingTops = {
      aside: screen.value.heights.aside / PHI ** 4,
      main: screen.value.heights.main / PHI ** 4,
      footer: screen.value.heights.footer / PHI ** 4
    })

) (storeToRefs (screenStore))