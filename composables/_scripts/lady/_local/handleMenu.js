export const handleMenu = (screenPropertiesStore, logoProperties) => {

  const menu
    = document.querySelector ('#central-content > .o-lady-menu')
  
  if (!menu) { return }
  

  const { screenProperties: { value: screenProperties } }
    = storeToRefs (screenPropertiesStore)


  const menuItems = menu.querySelectorAll ('*')

  menu.removeAttribute ('style')
  menuItems.forEach (e => e.removeAttribute ('style'))
  console.log(screenProperties)

  menu.style.height = `${ screenProperties.heights.main }px`


  ;(function _setFontSize (size = screenProperties.heights.main) {

      if (size <= TWICE_54_BY_PHI_POWER_4) {

        menuItems.forEach (mI =>
            mI.style.fontSize = `${ TWICE_54_BY_PHI_POWER_4 }px`
          )

        return

      }


      menuItems.forEach (mI => mI.style.fontSize = `${ size }px`)
      console.log(menu.scrollWidth)
      console.log(menu.scrollHeight)



      switch (true) {
        
        case menu.scrollHeight >= screenProperties.heights.main:
        case menu.scrollWidth >= screenProperties.widths.central:
          return _setFontSize (size / PHI)

        default:
          return

      }

    }) ()


}