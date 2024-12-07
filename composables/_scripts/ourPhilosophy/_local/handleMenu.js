export const handleMenu = screenProperties => {

  const menu = document.querySelector ('.o-expertise-skill-menu')

  if (!menu) { return }
  menu.removeAttribute ('style')
  

  const listItems = menu.querySelectorAll ('li')
  const menuItems = menu.querySelectorAll ('i, div')

  listItems.forEach (e => e.removeAttribute ('style'))
  menuItems.forEach (e => e.removeAttribute ('style'))


  ;(screen =>

    (factor => {

      menu.style.gap = `${ TWICE_54_BY_PHI_POWER_3 * factor }px`
    
      listItems.forEach (lI =>
          lI.style.gap = `${ TWICE_54_BY_PHI_POWER_3 * factor }px`
        )

      menuItems.forEach (mI =>
          mI.style.fontSize = `${ TWICE_54_BY_PHI_POWER_4 * factor }px`
        )

    }) (PHI ** +screen.isAtLeastMd)

  ) (

    getWindowWidths (
      screenProperties.widths [
          [ 'main', 'central' ] [ +(screenProperties.ratioIndex > 2) ]
        ]
    )
  
  )

}