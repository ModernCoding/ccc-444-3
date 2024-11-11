<script setup>

  const layoutScripts = collectLayoutScriptsFromComposable ()
  const modalStore = defineModalStoreFromComposable () ()

  onMounted (() => {
    
    layoutScripts.setFontSizeHeader ()
    
    window.addEventListener (
        'resize',
        () => layoutScripts.setFontSizeHeader ()
      )

  })

</script>


<template>

  <article class="o-font-en">

    <h1 class="fw-bold">+66.826.71.30.54</h1>

    <a
      href="mailto:contact@coding-crafting-consulting.com"
      class="fw-bold text-danger"
    >
      contact@coding-crafting-consulting.com
    </a>

  </article>


  <article class="o-font-th">
    <h1>61/29 ถนนบางแสนสาย 4 ใต้</h1>
    <h2>ถนน ส่วนบุคคล NA วิลล่า 2</h2>
    <h3>อำเภอเมืองชลบุรี จ.ชลบุรี 20130</h3>
  </article>


  <article class="o-font-en">
    <h1>61/29 Bangsaen Sai 4 Tai Road</h1>
    <h2>Thanon Suan Bukkhon NA Villa 2</h2>
    <h3>Saen Suk, Mueang Chonburi, 20130, Thailand</h3>
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