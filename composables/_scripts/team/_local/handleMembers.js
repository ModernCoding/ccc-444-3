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

}