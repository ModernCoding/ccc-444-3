<script setup>

  const layoutScripts = collectLayoutScriptsFromComposable ()
  const modalScripts = collectModalScriptsFromComposable ()

  const modalStore = defineModalStoreFromComposable () ()
  
  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()

  const { screenProperties } = storeToRefs (screenPropertiesStore)

  const { locale } = useI18n ()
  const route = useRoute ()


  const MENU = [
      'index',
      'our-expertise',
      'our-philosophy',
      'team',
      'ladies-in-it',
      'contact',
    ]


  const _handleSelect = item => {

    item !== route.name
      
      ? modalStore.resetModal ()
      
      : modalScripts
          .openOrClose (screenProperties.value, modalStore, 'Menu')

  }


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

    <li v-for="item in MENU" :key="item">

      <NuxtLink
        :to="{ name: item }"
        @click="_handleSelect (item)"
      >
        
        <i
          :class="`
              bi
              bi-${
                  [
                    'hand-index',
                    'house',
                    'envelope-at'
                  ] [ +(item === 'index') + 2 * +(item === 'contact') ]
                }${ route.name === item ? '-fill' : '' }
            `"

          aria-hidden="true"
        />
        

        <div :class="[ '', 'fw-bold' ] [ +(route.name === item) ]">
          {{ $t (`components.menu.${ item }`) }}
        </div>

      </NuxtLink>

    </li>

  </menu>

</template>


<style
  scoped
  src="@/assets/sass/components/menu.sass"
  lang="sass"
></style>