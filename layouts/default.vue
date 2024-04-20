<script setup>

  const hasScrollbar = ref (false)


  onMounted (() => {

    const _setVh = () => {

      document
        .documentElement
        .style
        .setProperty ('--vh', `${ window.innerHeight * 0.01 }px`)

    }

    _setVh ()

    window.addEventListener ('resize', _setVh)


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
  </header>


  <section>

    <aside>
      <div>CCC-444</div>
    </aside>

    <menu>
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