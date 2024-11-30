export const handleTeamMember = screenProperties => {

  const screen = getWindowWidths (screenProperties.widths.main)


  const h1s = document.querySelectorAll ([
      '.o-team-member-in-modal h1',
      '.o-team-member h1',
    ] [ +(screenProperties.ratioIndex > 1) ])


  h1s.forEach (h1 => {
    
      h1.removeAttribute ('style')

      ;(size => h1.style.fontSize = `${ size }px`) (

        TWICE_54_BY_PHI_POWER_4
          * PHI ** (+screen.isAtLeastSmHalf + +screen.isAtLeastMdHalf)
      
      )
    
    })




  // ;((p, ul) => {

  //     p && ul && (size => {

  //       p.style.fontSize = `${ size }px`
  //       p.style.paddingBottom = `${ size * PHI }px`
  //       ul.style.paddingBottom = `${ size * PHI ** 2 }px`

  //       ul
  //         .querySelectorAll ('li')
  //         .forEach (li => li.style.fontSize = `${ size }px`)

  //     }) (

  //       TWICE_54_BY_PHI_POWER_4
  //         * PHI ** (+screen.isAtLeastSmHalf + +screen.isAtLeastMdTwice)

  //     )

  //   }) (
  //     document.querySelector ('#team-girls p'),
  //     document.querySelector ('#team-girls ul')
  //   )

}