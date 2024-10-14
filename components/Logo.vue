<script setup>

  const { parent } = defineProps ({

      parent: {
          type: String,
          default: "aside"
        }

    })


  const logoScripts = collectLogoScriptsFromComposable ()

  const loaderPropertiesStore
    = defineLoaderPropertiesStoreFromComposable () ()

  const loadingStore = defineLoadingStoreFromComposable () ()

  const logoPropertiesStore
    = defineLogoPropertiesStoreFromComposable () ()
  
  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()

  const { locale } = useI18n ()

  const { id, time } = logoScripts.getId (parent)


  watch (locale, () => logoScripts.setDimensions (
    loaderPropertiesStore,
    loadingStore,
    logoPropertiesStore,
    screenPropertiesStore,
    parent
  ))


  onMounted (() => {

    setTimeout (
        
        () => logoScripts.setDimensions (
            loaderPropertiesStore,
            loadingStore,
            logoPropertiesStore,
            screenPropertiesStore,
            parent
          ),

        time

      )


    window.addEventListener ('resize', () => logoScripts.setDimensions (
        loaderPropertiesStore,
        loadingStore,
        logoPropertiesStore,
        screenPropertiesStore,
        parent
      ))
    

    screen.orientation.addEventListener ('change', () => setTimeout (
        
        () => logoScripts.setDimensions (
            loaderPropertiesStore,
            loadingStore,
            logoPropertiesStore,
            screenPropertiesStore,
            parent
          ),

        time

      ))

  })

</script>


<template>

  <article
    class="o-logo"
    :id="id"
  >

    <header>

      <div>

        <div
          v-for="i in 3" :key="i"
          class="d-flex align-items-center justify-content-end"
        >
          <p>c</p>
        </div>
        
      </div>


      <div>

        <div class="d-flex align-items-center">
          <p>o</p>
          <p>d</p>
          <p>i</p>
          <p>n</p>
          <p>g</p>
        </div>

        <div class="d-flex align-items-center">
          <p>r</p>
          <p>a</p>
          <p>f</p>
          <p>t</p>
          <p>i</p>
          <p>n</p>
          <p>g</p>
        </div>

        <div class="d-flex align-items-center">
          <p>o</p>
          <p>n</p>
          <p>s</p>
          <p>u</p>
          <p>l</p>
          <p>t</p>
          <p>i</p>
          <p>n</p>
          <p>g</p>
        </div>

      </div>

    </header>


    <section>

      <div>
        <div></div>
      </div>
      
      <div>
        <div></div>
      </div>
        
    </section>


    <footer class="o-font-th">

      <div>

        <div class="d-flex align-items-center justify-content-end">
          <p v-for="i in 3" :key="i">๔</p>
        </div>
    
      </div>
    

      <div>

        <div class="d-flex align-items-center">
          <p>ซ</p>
          <p>อ</p>
          <p>ฟ</p>
          <p>ต์</p>
          <p>แ</p>
          <p>ว</p>
          <p>ร์</p>
        </div>

        <div class="d-flex align-items-center">
          <p>โ</p>
          <p>ซ</p>
          <p>ลู</p>
          <p>ชั่</p>
          <p>น</p>
        </div>

      </div>

    </footer>

  </article>

</template>


<style
  scoped
  src="@/assets/sass/components/logo.sass"
  lang="sass"
></style>