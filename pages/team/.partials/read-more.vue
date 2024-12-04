<script setup>
  
  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()

  const { screenProperties } = storeToRefs (screenPropertiesStore)

  const { locale } = useI18n ()

</script>


<template>

  <nav class="o-team-read-more">

    <p class="fw-bold">
      {{ $t ('pages.ourExpertise.index.expertise.craft.know') }}
    </p>


    <p>

      <span>
        <i class="bi bi-hand-index-fill" aria-hidden="true" />
      </span>

      <strong>
        {{ $t ('pages.ourExpertise.index.expertise.craft.how') }}
      </strong>

    </p>

  </nav>

</template>


<style
  scoped
  src="@/assets/sass/pages/team/index.sass"
  lang="sass"
></style>