export const handleMenu = screenProperties => {

  const menu = document.querySelector ('.o-lady-menu')
  
  if (!menu) { return }
  

  const listItems = menu.querySelectorAll ('li')
  const menuItems = menu.querySelectorAll ('i, div')

  listItems.forEach (e => e.removeAttribute ('style'))
  menuItems.forEach (e => e.removeAttribute ('style'))


  ;(screen =>

    (factor => {
    
      listItems.forEach (lI =>
          lI.style.gap = `${ TWICE_54_BY_PHI_POWER_3 * factor }px`
        )

      menuItems.forEach (mI =>
          mI.style.fontSize = `${ TWICE_54_BY_PHI_POWER_4 * factor }px`
        )

    }) (PHI ** (+screen.isAtLeastSmHalf + +screen.isAtLeastSm))

  ) (getWindowWidths (screenProperties.widths.central))

}