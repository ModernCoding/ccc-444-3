<script setup>

  const screenStore = defineScreenStoreFromComposable () ()
  const { screen } = storeToRefs (screenStore)

</script>


<template>

  <section :data-number-of-parts="screen.ratioIndex">

    <figure>

      <picture>
      
        <img
          src="/images/tharrawaddy-min-bell.png"
          alt="Tharrawaddy Min Bell"
          loading="lazy"
        >
      
      </picture>


      <figcaption class="fw-bold">Email us</figcaption>

    </figure>


    <figure>

      <picture>
      
        <img
          src="/images/call.png"
          alt="Request next call"
          loading="lazy"
        >
      
      </picture>


      <figcaption class="fw-bold">Request call</figcaption>

    </figure>


    <figure>

      <picture>
      
        <img
          src="/images/compass.png"
          alt="Bangsaen, Thailand"
          loading="lazy"
        >
      
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