<script setup>

  const layoutScripts = collectLayoutScriptsFromComposable ()
  const modalStore = defineModalStoreFromComposable () ()

  const { locale } = useI18n ()
  const route = useRoute ()

  const menu = [
      'contact',
      'index',
      'ladies-in-it',
      'long-text',
      'team'
    ]


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

      <NuxtLink
        :to="{ name: item }"
        @click="item !== route.name && modalStore.resetModal ()"
      >
        
        <i
          :class="`
              bi
              bi-${
                  [ 'hand-index', 'house' ] [ +(item === 'index') ]
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