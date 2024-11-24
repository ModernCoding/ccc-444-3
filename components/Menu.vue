<script setup>

  const modalStore = defineModalStoreFromComposable () ()

  const { locale } = useI18n ()
  const route = useRoute ()
  
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

    <li>

      <NuxtLink :to="{ name: 'index' }">
        
        <i
          :class="`
              bi
              bi-house${ route.name === 'index' ? '-fill' : '' }
            `"

          aria-hidden="true"
        />
        
        <span :class="[ '', 'fw-bold' ] [ +(route.name === 'index') ]">
          Home
        </span>

      </NuxtLink>

    </li>


    <li>

      <NuxtLink :to="{ name: 'contact' }">
        
        <i
          :class="`
              bi
              bi-hand-index${ route.name === 'contact' ? '-fill' : '' }
            `"

          aria-hidden="true"
        />
        
        <span :class="[ '', 'fw-bold' ] [ +(route.name === 'contact') ]">
          Contact
        </span>

      </NuxtLink>

    </li>

  </menu>

</template>


<style
  scoped
  src="@/assets/sass/components/menu.sass"
  lang="sass"
></style>