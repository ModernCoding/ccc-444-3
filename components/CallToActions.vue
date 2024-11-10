<script setup>

  const ctaScripts = collectCtaScriptsFromComposable ()

  const logoPropertiesStore
    = defineLogoPropertiesStoreFromComposable () ()

  const modalStore = defineModalStoreFromComposable () ()

  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()
  
  const { logoProperties } = storeToRefs (logoPropertiesStore)
  const { modal } = storeToRefs (modalStore)
  const { screenProperties } = storeToRefs (screenPropertiesStore)


  const _handleModal = () => {

    document
      .querySelectorAll ('main[role="main"] > *:not(.o-modal)')
      .forEach (element =>

          modal.value.main.show
            ? element.removeAttribute ('data-is-hidden')
            : element.setAttribute ('data-is-hidden', 1)

        )


    if (modal.value.main.show) { return modalStore.resetMain () }

    modalStore.patchMainShow ()
    modalStore.patchMainContent ('Contact')

  }


  onMounted (() => {
    ctaScripts.setFontSize ()
    ctaScripts.equalize (screenProperties, logoProperties)
  })

</script>


<template>

  <section
    class="o-call-to-actions"
    :data-number-of-parts="screenProperties.ratioIndex"
  >

    <a href="mailto:contact@coding-crafting-consulting.com">

      <figure>

        <picture>
        
          <NuxtImg
            src="/images/tharrawaddy-min-bell.png"
            alt="Tharrawaddy Min Bell"
            loading="lazy"
            preload
          />
        
        </picture>


        <figcaption class="fw-bold">
          {{ $t ('components.callToActions.contactUs') }}
        </figcaption>

      </figure>

    </a>


    <figure>

      <picture id="bus-stop">
      
        <NuxtImg
          src="/images/bus-stop.png"
          alt="Request next call"
          loading="lazy"
          preload
        />
      
        <NuxtImg
          src="/images/bus-stop-red.png"
          alt="Request next call"
          loading="lazy"
          preload
        />
      
      </picture>


      <figcaption class="fw-bold">
        {{ $t ('components.callToActions.requestCall') }}
      </figcaption>

    </figure>


    <figure @click="_handleModal">

      <picture>
      
        <NuxtImg
          src="/images/compass.png"
          alt="Bangsaen, Thailand"
          loading="lazy"
          preload
        />
      
      </picture>


      <figcaption class="fw-bold">
        {{ $t ('components.callToActions.findUs') }}
      </figcaption>

    </figure>
    
  </section>

</template>


<style
  scoped
  src="@/assets/sass/components/call-to-actions.sass"
  lang="sass"
></style>