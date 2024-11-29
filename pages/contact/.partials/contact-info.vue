<script setup>
  const { locale } = useI18n ()
</script>


<template>

  <article class="o-contact-info">

    <h1
      v-if="locale === 'my'"
      class="fw-bold o-font-my"
    >
      +၆၆.၈၂.၆၇.၁၃၀.၅၄
    </h1>


    <h1
      v-if="locale === 'th'"
      class="fw-bold o-font-th"
    >
      โทร ๐๘๒-๖๗๑๓๐๕๔
    </h1>

    
    <h1
      v-if="![ 'my', 'th' ].includes (locale)"
      class="fw-bold o-font-en"
    >
      +66.82.67.130.54
    </h1>


    <a
      href="mailto:contact@coding-crafting-consulting.com"
      class="text-danger fw-bold o-font-en"
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