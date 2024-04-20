<script setup>

  const hasScrollbar = ref (false)
  const windowWidths = ref ({})


  onMounted (() => {

    const _handleResize = () => {

      windowWidths.value = getWindowWidths (window.innerWidth)

      document
        .documentElement
        .style
        .setProperty ('--vh', `${ window.innerHeight * 0.01 }px`)

    }


    _handleResize ()
    window.addEventListener ('resize', _handleResize)


    ;(main => {

      if (!main) { return }

      hasScrollbar.value = main.scrollHeight > main.clientHeight

      window.addEventListener ('resize', () => {
        hasScrollbar.value = main.scrollHeight > main.clientHeight
      })

    }) (document.querySelector ('main[role="main"]'))

  })

</script>


<template>

  <header>

    <nav v-if="!windowWidths.isAtLeastXxlHalf">
      <ul class="d-flex align-items-center gap-3">
        <li>Our company</li>
        <li>Our customers</li>
        <li>Our contact</li>
      </ul>
    </nav>

  </header>


  <section>

    <aside>
      <div>CCC-444</div>
    </aside>

    <menu v-if="windowWidths.isAtLeastXxlHalf">
      <ul>
        <li>Our company</li>
        <li>Our customers</li>
        <li>Our contact</li>
      </ul>
    </menu>

    <main role="main">
      <slot />
    </main>
    
  </section>


  <footer>
  </footer>
  
</template>


<style
  src="@/assets/sass/layouts/default.sass"
  lang="sass"
></style>