export default () => {

  document
    .querySelectorAll ('.o-call-to-actions figcaption')
    .forEach (figcaption => figcaption.removeAttribute ('style'))
    

  document.querySelectorAll ('.o-call-to-actions').forEach (cta => {

    const reduceFontSize = (function _set (figures, i = 0) {

        if (i >= figures.length) { return false }

        const figcaption = figures [ i ].querySelector ('figcaption')


        return figcaption && figcaption.getBoundingClientRect ().width
          > figures [ i ].getBoundingClientRect ().width

            ? true
            : _set (figures, ++i)

      }) (cta.querySelectorAll ('figure'))


    if (!reduceFontSize) { return }

    cta.querySelectorAll ('figcaption').forEach (figcaption =>
      figcaption.style.fontSize = `${ TWICE_54_BY_PHI_POWER_5 }px`
    )

  })

}