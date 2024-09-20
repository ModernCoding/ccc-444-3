<script setup>

  const windowWidths = ref ({})

  const screenStore = defineScreenStoreFromComposable () ()
  const { screen } = storeToRefs (screenStore)


  const setDimensions = () => {

    (main => {

      if (!main) { return }


      (mainContent => {
        
        if (!mainContent) { return }

        mainContent.removeAttribute ('style')

        if (mainContent.scrollHeight <= mainContent.clientHeight) {
          return
        }


        const mainPaddingLeft = parseInt (

            window

              .getComputedStyle (
                  screen.value.isPortrait
                    ? document.querySelector ('#__nuxt')
                    : main
                )

              .getPropertyValue ('padding-left')
              .split ('px')
              .join ('')

          )


        ;(mainContentWidth => {

          // compensating scrollbar width
          const compensation = mainPaddingLeft / PHI

          mainContent.style.paddingRight = `${
            [ TWICE_54_BY_PHI_POWER_4, compensation ] [
              +(compensation > TWICE_54_BY_PHI_POWER_4)
            ]
          }px`

        }) (mainContent.getBoundingClientRect ().width)

      }) (main.querySelector ('*'))

    }) (document.querySelector ('main[role="main"]'))


    windowWidths.value = getWindowWidths (window.innerWidth)

    document
      .documentElement
      .style
      .setProperty ('--vh', `${ window.innerHeight * 0.01 }px`)


    screenStore.patchIsPortrait ()
    screenStore.patchHeights ()
    screenStore.patchPaddingTops ()

  } 


  onMounted (() => {
    setDimensions ()
    window.addEventListener ('resize', setDimensions)
  })

</script>


<template>

  <header>

    <nav>
      <nav></nav>
      <nav class="text-end">EN</nav>
    </nav>

  </header>


  <section>

    <aside>
      <Logo />
    </aside>


    <main role="main">
      <slot />
    </main>
    
  </section>


  <footer class="d-flex align-items-center justify-content-center">
    <nav></nav>
  </footer>
  
</template>


<style
  src="@/assets/sass/layouts/default.sass"
  lang="sass"
></style>