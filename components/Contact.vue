<script setup>

  const layoutScripts = collectLayoutScriptsFromComposable ()
  const modalStore = defineModalStoreFromComposable () ()
  const { locale } = useI18n ()


  onMounted (() => {

    layoutScripts.setFontSizeHeader ()
    
    window.addEventListener (
        'resize',
        () => layoutScripts.setFontSizeHeader ()
      )

  })

</script>


<template>

  <figure class="d-flex flex-column align-items-center">

    <picture
      class="d-flex align-items-center justify-content-center"
    >
    
      <NuxtImg
        src="/images/wat-arun.png"
        alt="Wat Arun"
        loading="lazy"
      />
    
    </picture>

    
    <figcaption
      class="
          d-flex
          flex-column
          align-items-center
          justify-content-center
          text-center
          text-uppercase
          w-100
        "

      id="location-figcaption"
    >
      <!-- <div>Nous manufacturons</div>
      <div>votre application !</div> -->
      <div>We are based in Thailand</div>
<!--         <div>Wir schneiden</div>
      <div>Ihre App!</div> -->
    </figcaption>

  </figure>


  <article class="o-font-en" id="contact">

    <h1 class="fw-bold">+66.826.71.30.54</h1>

    <a
      href="mailto:contact@coding-crafting-consulting.com"
      class="fw-bold text-danger"
    >
      contact@coding-crafting-consulting.com
    </a>

  </article>


  <article
    v-if="locale === 'th'"
    class="o-font-th o-address"
  >
    <h1>61/29 ถนนบางแสนสาย 4 ใต้</h1>
    <h2>ถนน ส่วนบุคคล NA วิลล่า 2</h2>
    <h3>อำเภอเมืองชลบุรี จ.ชลบุรี 20130</h3>
  </article>


  <article
    v-else
    class="o-font-en o-address"
  >
    <h1>61/29 Bangsaen Sai 4 Tai Road</h1>
    <h2>Thanon Suan Bukkhon NA Villa 2</h2>
    <h3>Saen Suk, Mueang Chonburi, 20130</h3>
  </article>


  <nav>

    <a href="https://maps.app.goo.gl/pxzkFhtF86Hmse588" target="_blank">

      <div>
        <i class="bi bi-geo-alt-fill" aria-hidden="true"></i>
      </div>

      <strong>Google Maps</strong>

    </a>

  </nav>

</template>


<style
  scoped
  src="@/assets/sass/components/contact.sass"
  lang="sass"
></style>