<script setup>
  
  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()

  const { screenProperties } = storeToRefs (screenPropertiesStore)

  const { locale } = useI18n ()

</script>


<template>

  <article class="o-expertise-item">

    <NuxtLink :to="{ name: 'our-expertise' }">
      
      <h1>
        {{ $t ('pages.ourExpertise.index.expertise.craft.slogan') }}
      </h1>


      <button class="o-expertise-know-how">

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

      </button>

    </NuxtLink>

  </article>

</template>


<style
  scoped
  src="@/assets/sass/pages/our-expertise/index.sass"
  lang="sass"
></style>