export default id => {

  const element = document.querySelector (id)
  if (!element) { return }


  ;(content => {

      if (!content) { return }

      const firstElement = content.querySelector ('*')
      if (!firstElement) { return }


      ;(top => content.scrollTo ({ top, behavior: 'smooth' })) (
          element.getBoundingClientRect ().top
            - firstElement.getBoundingClientRect ().top
        )

    }) (document.querySelector ('.o-expertise-skill-text'))

}