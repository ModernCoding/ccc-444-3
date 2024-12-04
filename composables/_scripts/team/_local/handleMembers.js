export const handleMembers = screenProperties => {

  const members = document.querySelector ('.o-members')
  if (!members) { return }

  members.removeAttribute ('style')


  members
    .querySelectorAll ('*')
    .forEach (e => e.removeAttribute ('style'))


  const screen = getWindowWidths (screenProperties.widths.main)


  members.querySelectorAll ('a figcaption > *').forEach (hx =>

      (size => hx.style.fontSize = `${ size }px`) (

        TWICE_54_BY_PHI_POWER_5
          * PHI ** (+screen.isAtLeastSmMinus + +screen.isAtLeastMdMinus)
      
      )

    )


  ;((p, ul) => {

      p && ul && (size => {

        p.style.fontSize = `${ size }px`
        p.style.paddingBottom = `${ size * PHI }px`
        ul.style.paddingBottom = `${ size * PHI ** 2 }px`

        ul
          .querySelectorAll ('li')
          .forEach (li => li.style.fontSize = `${ size }px`)

      }) (TWICE_54_BY_PHI_POWER_4 * PHI ** (+screen.isAtLeastMdPlus))

    }) (
      document.querySelector ('#team-girls p'),
      document.querySelector ('#team-girls ul')
    )


  const fontSize = TWICE_54_BY_PHI_POWER_5 * PHI ** (
      +screen.isAtLeastSmHalf + +screen.isAtLeastLgHalf
    )


  document
    .querySelectorAll ('.o-team-read-more')

    .forEach (readMore => {
      
        readMore.removeAttribute ('style')
        readMore.style.gap = `${ fontSize / PHI ** 2 }px`


        readMore.querySelectorAll ('p').forEach ((p, i) => {
          
          p.style.fontSize = `${ fontSize }px`
          p.style.height = `${ fontSize * PHI }px`


          ;(span => {
            if (!span) { return }
            span.style.height = `${ fontSize }px`
            span.style.width = `${ fontSize * PHI }px`
          }) (p.querySelector ('span'))


          ;(i => {
            if (!i) { return }
            i.style.fontSize = `${ fontSize / PHI }px`
          }) (p.querySelector ('i'))


          ;(strong => {
            if (!strong) { return }
            strong.style.fontSize = `${ fontSize }px`
          }) (p.querySelector ('strong'))


          i > 0 && (() => {
              p.style.gap = `${ fontSize / PHI ** 2 }px`
              p.style.paddingRight = `${ fontSize }px`
            }) ()

        })
      
      })



}