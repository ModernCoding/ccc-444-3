export const handleMembers = screenProperties => {

  const members = document.querySelector ('.o-members')
  if (!members) { return }

  members.removeAttribute ('style')


  const layoutPaddingRight = (nuxt =>

      !nuxt ? 0 : parseInt (

          window
            .getComputedStyle (document.querySelector ('#__nuxt'))
            .getPropertyValue ('padding-right')
            .split ('px')
            .join ('')

        )

    ) (document.querySelector ('#__nuxt'))


  members
    .querySelectorAll ('*')
    .forEach (e => e.removeAttribute ('style'))


  members.querySelectorAll ('a img').forEach (img => {

      img.style.width
        = `${ members.getBoundingClientRect ().width / PHI ** 2 }px`

    })


  members.querySelectorAll ('a figure').forEach (figure => {
      figure.style.gap = `${ layoutPaddingRight / PHI ** 2 }px`
    })


}