export default loadingStore => {

  const images = document.querySelectorAll ("img")
  let loadedImages = 0


  images.forEach (img => {

    img.complete

      ? loadingStore.patchIsImageLoadingComplete (
          ++loadedImages === images.length
        )


      : (() => {

          // 'load' event for images that are still loading

          img.addEventListener ("load", () => {

            loadingStore.patchIsImageLoadingComplete (
              ++loadedImages === images.length
            )

          })


          // 'error' event if an image fails to load

          img.addEventListener ("error", () => {
            
            console.log ("Image failed to load >>>", img.src)

            loadingStore.patchIsImageLoadingComplete (
              ++loadedImages === images.length
            )

          })

        }) ()

  })

}