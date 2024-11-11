export default screenProperties => {

  document
    .querySelectorAll ('.o-call-to-actions-header')
    .forEach (cta => {

        cta.removeAttribute ('style')

        cta
          .querySelectorAll ('*')
          .forEach (element => element.removeAttribute ('style'))

      })


  ;(function _equalize (

    pictures
      = document.querySelectorAll ('.o-call-to-actions-header picture'),

    heighestPicture = 0,
    i = 0

  ) {

    if (i >= pictures.length) {

      (delta =>

        (height =>

           pictures.forEach (picture => {
              
              picture.style.height = `${ height }px`

              picture.querySelectorAll ('img').forEach (img =>
                img.style.maxHeight = `${ height }px`
              )

           })

        ) ([ heighestPicture, delta ] [ +(heighestPicture > delta) ])
      
      ) (screenProperties.value.heights.header / PHI ** 2)


      return

    }


    pictures [ i ].removeAttribute ('style')

    const pictureHeight = pictures [ i ].getBoundingClientRect ().height


    return _equalize (

      pictures,

      [ heighestPicture, pictureHeight ] [
          +( pictureHeight > heighestPicture )
        ],

      ++i

    )

  }) ()

}