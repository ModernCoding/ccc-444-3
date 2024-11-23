<script setup>

  const modalStore = defineModalStoreFromComposable () ()

  const { locale } = useI18n ()
  
  // onMounted (() => {
    
  //   layoutScripts.setFontSizeHeader ()
    
  //   window.addEventListener (
  //       'resize',
  //       () => layoutScripts.setFontSizeHeader ()
  //     )

  // })

</script>


<template>

  <menu id="menu">

    <ul>
      <li>Women in tech</li>
    </ul>

  </menu>

</template>


<style
  scoped
  src="@/assets/sass/components/menu.sass"
  lang="sass"
></style>