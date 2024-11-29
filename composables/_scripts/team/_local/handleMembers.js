export const handleMembers = screenProperties => {

  const members = document.querySelector ('.o-members')
  if (!members) { return }

  members.removeAttribute ('style')


  members
    .querySelectorAll ('*')
    .forEach (e => e.removeAttribute ('style'))


  const layoutPaddingRight = (nuxt =>

      !nuxt ? 0 : parseInt (

          window
            .getComputedStyle (document.querySelector ('#__nuxt'))
            .getPropertyValue ('padding-right')
            .split ('px')
            .join ('')

        )

    ) (document.querySelector ('#__nuxt'))


  const maxWidth = screenProperties.widths.main

      - screenProperties.widths.main / PHI ** 2
        /*
          image width
        */

      - layoutPaddingRight / PHI
        /*
          padding right upon scrollbar
        */

      - layoutPaddingRight / PHI ** 2
        /*
          figure gap
        */


}