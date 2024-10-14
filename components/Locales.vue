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

  <nav id="locales">

    <button
      v-for="key in Object.keys (languageOptions)"
      :key="key"
      @click="_handleSelect (key)"
    >
      
      <div
        :class="[ 'my', 'th' ].includes (key) ? `o-font-${ key }` : ''"
      >
        {{ languageOptions [ key ] }}
      </div>
      
      <div class="o-locale">{{ key }}</div>
    
    </button>

  </nav>

</template>


<style
  scoped
  src="@/assets/sass/components/locales.sass"
  lang="sass"
></style>