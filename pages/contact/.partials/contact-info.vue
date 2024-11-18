<script setup>
  const { locale } = useI18n ()
</script>


<template>

  <article class="o-contact-info">

    <h1
      v-if="locale === 'th'"
      class="fw-bold o-font-th"
    >
      โทร ๐๘๒-๖๗๑๓๐๕๔
    </h1>
    
    <h1 v-else class="fw-bold o-font-en">+66.826.71.30.54</h1>

    <a
      href="mailto:contact@coding-crafting-consulting.com"
      class="fw-bold text-danger o-font-en"
    >
      contact@coding&#8209;crafting&#8209;consulting.com
    </a>

  </article>

</template>


<style
  scoped
  src="@/assets/sass/pages/contact/index.sass"
  lang="sass"
></style>