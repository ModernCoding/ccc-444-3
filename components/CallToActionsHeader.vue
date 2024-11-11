<script setup>

  const ctaScripts = collectCtaScriptsFromComposable ()

  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()
  
  const { screenProperties } = storeToRefs (screenPropertiesStore)


  onMounted (() => ctaScripts.equalizeInHeader (screenProperties))

</script>


<template>

  <section
    class="o-call-to-actions-header"
   :data-number-of-parts="screenProperties.ratioIndex"
  >

    <a href="mailto:contact@coding-crafting-consulting.com">

      <picture>

        <NuxtImg
          src="/images/tharrawaddy-min-bell.png"
          alt="Tharrawaddy Min Bell"
          loading="lazy"
          preload
        />

      </picture>

    </a>


<!--     <picture class="o-bus-stop">
    
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
    
    </picture> -->


    <picture>
    
      <NuxtImg
        src="/images/call.png"
        alt="Request next call"
        loading="lazy"
        preload
      />
    
    </picture>


    <NuxtLink to="/contact">

      <picture>
    
        <NuxtImg
          src="/images/compass.png"
          alt="Bangsaen, Thailand"
          loading="lazy"
          preload
        />

      </picture>
    
    </NuxtLink>
    
  </section>

</template>


<style
  scoped
  src="@/assets/sass/components/call-to-actions-header.sass"
  lang="sass"
></style>