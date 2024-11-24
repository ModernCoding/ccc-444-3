<script setup>

  const layoutScripts = collectLayoutScriptsFromComposable ()
  const modalStore = defineModalStoreFromComposable () ()

  const { locale } = useI18n ()
  const route = useRoute ()

  const menu = [ 'index', 'contact' ]


  onMounted (() => {
    
    layoutScripts.setFontSizeHeader ()
    
    window.addEventListener (
        'resize',
        () => layoutScripts.setFontSizeHeader ()
      )

  })

</script>


<template>

  <menu id="menu">

    <li v-for="item in menu" :key="item">

      <NuxtLink :to="{ name: item }">
        
        <i
          :class="`
              bi
              bi-${
                  [ 'hand-index', 'house' ] [ +(item === 'index') ]
                }${
                  route.name === item ? '-fill' : ''
                }
            `"

          aria-hidden="true"
        />
        
        <span :class="[ '', 'fw-bold' ] [ +(route.name === item) ]">
          Home
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