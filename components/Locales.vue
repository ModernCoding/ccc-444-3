<script setup>

  const layoutScripts = collectLayoutScriptsFromComposable ()
  const modalStore = defineModalStoreFromComposable () ()

  const { modal } = storeToRefs (modalStore)
  const { locale } = useI18n ()
  
  const languageOptions = {
      de: "Deutsch",
      en: "English",
      fr: "Français",
      kh: "ភាសាខ្មែរ",
      my: "မြန်မာဘာသာ",
      th: "ภาษาไทย",
      vi: "Tiếng Việt"
    }


  const _handleSelect = key => {
      
      locale.value = key
      localStorage.setItem (import.meta.env.VITE_LOCALE_KEY, key)

      ;(nuxt => {

          if (!nuxt) { return }

          [ 'kh', 'my', 'th', 'vi' ].includes (key)
            ? nuxt.setAttribute ('data-locale', key)
            : nuxt.removeAttribute ('data-locale')

        }) (document.querySelector ('#__nuxt'))



      modalStore.patchOpenModals (
          modal.value.openModals.filter (oM => oM !== 'Locales')
        )


      if (modal.value.show) {

        modalStore.patchContent (
            modal.value.openModals [ modal.value.openModals.length - 1 ]
          )

      }


      else {

        modalStore.resetModal ()

        document
          .querySelectorAll ('main[role="main"] > *:not(.o-modal)')
          .forEach (element =>
              element.removeAttribute ('data-is-hidden')
            )
      
      }

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

  <menu id="locales">

    <li v-for="key in Object.keys (languageOptions)" :key="key">

      <button @click="_handleSelect (key)">
        
        <div
          :class="`
              o-locale-label

              ${
                [ 'kh', 'my', 'th', 'vi' ]
                  .includes (key) ? `o-font-${ key }` : 'o-font-en'
              }

              ${ key === locale ? 'fw-bold' : '' }
            `"
        >
          {{ languageOptions [ key ] }}
        </div>


        <div
          :class="`
              o-locale
              o-font-en
              ${ key === locale ? 'fw-bold' : '' }
            `"
        >
          {{ key }}
        </div>
      
      </button>

    </li>

  </menu>

</template>


<style
  scoped
  src="@/assets/sass/components/locales.sass"
  lang="sass"
></style>