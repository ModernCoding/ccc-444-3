export const getRatioIndex = (window, i = 0) => {

  switch (true) {

    case window.innerWidth / window.innerHeight < PHI ** i:
    case i > 2:

      return [ i, i + 1 ] [ +(i < 2) ]


    default:
      return getRatioIndex (window, ++i)

  }

}