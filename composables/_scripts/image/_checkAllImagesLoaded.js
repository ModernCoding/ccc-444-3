export default loadingStore => {

  const images = document.querySelectorAll ("img")
  let loadedImages = 0


  const _handle = () => {

    loadingStore.patchIsImageLoadingComplete (
        ++loadedImages === images.length
      )

  }


  images.forEach (img => {

    img.complete

      ? _handle ()


      : (() => {

          // 'load' event for images that are still loading

          img.addEventListener ("load", _handle)


          // 'error' event if an image fails to load

          img.addEventListener ("error", () => {
            
            console.log ("Image failed to load >>>", img.src)
            _handle ()

          })

        }) ()

  })

}