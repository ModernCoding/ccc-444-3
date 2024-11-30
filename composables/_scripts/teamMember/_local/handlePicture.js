export const handlePicture = screenProperties => {

  console.log (screenProperties)

  const lady = document.querySelector ('.o-lady-picture')

  if (!lady) { return }
  lady.removeAttribute ('style')

  screenProperties.ratioIndex > 1 && (
      lady.style.height = `${ screenProperties.heights.aside }px`
    )

}