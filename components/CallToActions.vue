<script setup>

  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()
  
  const { screenProperties } = storeToRefs (screenPropertiesStore)

</script>


<template>

  <section
    class="o-call-to-actions"
    :data-number-of-parts="screenProperties.ratioIndex"
  >

    <figure>

      <picture>
      
        <NuxtImg
          src="/images/tharrawaddy-min-bell.png"
          alt="Tharrawaddy Min Bell"
          loading="lazy"
          preload
        />
      
      </picture>


      <figcaption class="fw-bold">Email us</figcaption>

    </figure>


    <figure>

      <picture>
      
        <NuxtImg
          src="/images/bus_stop_02.jpg"
          alt="Request next call"
          loading="lazy"
          preload
        />
      
      </picture>


      <figcaption class="fw-bold">Request call</figcaption>

    </figure>


    <figure>

      <picture>
      
        <NuxtImg
          src="/images/compass.png"
          alt="Bangsaen, Thailand"
          loading="lazy"
          preload
        />
      
      </picture>


      <figcaption class="fw-bold">Find us</figcaption>

    </figure>
    
  </section>

</template>


<style
  scoped
  src="@/assets/sass/components/call-to-actions.sass"
  lang="sass"
></style>