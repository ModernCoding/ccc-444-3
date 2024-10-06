export default (screenProperties, selector) => (function _equalize (
  pictures = document.querySelectorAll (`${ selector } picture`),
  figcaptions = document.querySelectorAll (`${ selector } figcaption`),
  heighestPicture = 0,
  heighestFigcaption = 0,
  i = 0
) {

  if (i >= pictures.length) {

    pictures.forEach (
        picture => picture.style.height = `${ heighestPicture }px`
      )


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

      pictures.forEach (

        picture => picture.style.height = `${
            [ heighestPicture, delta ] [ +(heighestPicture > delta) ]
          }px`
      
      )
    
    ) (

      mainHeight
        - heighestFigcaption
        - figcaptionPaddingTop
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