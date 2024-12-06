export default (screenProperties, logoProperties) => {

  document.querySelectorAll ('.o-call-to-actions').forEach (cta => {

      screenProperties.value.ratioIndex > 1
        ? cta.style.height = `${ logoProperties.value.height }px`
        : cta.removeAttribute ('style')

      cta
        .querySelectorAll ('*')
        .forEach (element => element.removeAttribute ('style'))

    })


  ;(function _equalize (

    pictures = document.querySelectorAll ('.o-call-to-actions picture'),

    figcaptions
      = document.querySelectorAll ('.o-call-to-actions figcaption'),

    heighestPicture = 0,
    heighestFigcaption = 0,
    i = 0

  ) {

    if (pictures.length < 1) { return }


    if (i >= pictures.length) {

      const mainHeight = (index =>
          index ? index.getBoundingClientRect ().height : 0
        ) (document.querySelector ('main[role="main"]'))


      const figcaptionPaddingTop = parseFloat (

          window
            .getComputedStyle (figcaptions [ 0 ])
            .getPropertyValue ('padding-top')
            .split ('px')
            .join ('')

        )


      ;(delta =>

        (height =>

           pictures.forEach (picture => {

              picture.style.height = `${ height }px`

              picture.querySelectorAll ('img').forEach (img =>
                img.style.maxHeight = `${ height }px`
              )
              
           })

        ) ([ heighestPicture, delta ] [ +(heighestPicture > delta) ])
      
      ) (

        [ mainHeight, logoProperties.value.height ] [
          +(screenProperties.value.ratioIndex > 1)
        ]
          - heighestFigcaption
          - screenProperties.value.paddingTops.corrected.main
      
      )


      return

    }


    pictures [ i ].removeAttribute ('style')

    const pictureHeight = pictures [ i ].getBoundingClientRect ().height

    const figcaptionHeight
      = figcaptions [ i ].getBoundingClientRect ().height


    return _equalize (

      pictures,
      figcaptions,

      [ heighestPicture, pictureHeight ] [
          +( pictureHeight > heighestPicture )
        ],

      [ heighestFigcaption, figcaptionHeight ] [
          +( figcaptionHeight > heighestFigcaption )
        ],
        
      ++i

    )

  }) ()

}