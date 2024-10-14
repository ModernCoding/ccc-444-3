<script setup>

  const layoutScripts = collectLayoutScriptsFromComposable ()
  const modalStore = defineModalStoreFromComposable () ()

  const { locale } = useI18n ()
  
  const languageOptions = {
      de: "Deutsch",
      en: "English",
      fr: "Français",
      my: "မြန်မာဘာသာ",
      th: "ภาษาไทย"
    }


  const _handleSelect = key => {
      locale.value = key
      localStorage.setItem (import.meta.env.VITE_LOCALE_KEY, key)
      modalStore.resetMain ()
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

    <ul v-for="key in Object.keys (languageOptions)" :key="key">

      <button @click="_handleSelect (key)">
        
        <div
          :class="
              [ 'my', 'th' ].includes (key) ? `o-font-${ key }` : ''
            "
        >
          {{ languageOptions [ key ] }}
        </div>

        <div class="o-locale">{{ key }}</div>
      
      </button>

    </ul>

  </menu>

</template>


<style
  scoped
  src="@/assets/sass/components/locales.sass"
  lang="sass"
></style>