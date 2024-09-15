<script setup>

  const isPortrait = ref (false)
  const windowWidths = ref ({})

  const screenStore = defineScreenStoreFromComposable () ()
  const { screen } = storeToRefs (screenStore)


  const setDimensions = () => {

    isPortrait.value = setIsPortrait ()
    screenStore.$patch (state => state.screen.heights = patchHeights ())
    console.log (screen.value)


    ;(main => {

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
                  isPortrait.value
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

  } 


  onMounted (() => {
    setDimensions ()
    window.addEventListener ('resize', setDimensions)
  })

</script>


<template>

  <header>
    <nav>EN</nav>

<!--     <nav v-if="!windowWidths.isAtLeastXxlHalf && !isPortrait">
      <div />
      <Menu />
    </nav>
 -->
  </header>


  <section>

    <aside>

      <Logo />

<!--       <nav v-if="isPortrait">
        <Menu />
      </nav> -->

    </aside>


    <!-- <Menu v-if="windowWidths.isAtLeastXxlHalf && !isPortrait" /> -->

    <main role="main">
      <slot />
    </main>
    
  </section>


  <footer class="d-flex align-items-center justify-content-center">
  </footer>
  
</template>


<style
  src="@/assets/sass/layouts/default.sass"
  lang="sass"
></style>