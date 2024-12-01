<script setup>
  
  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()

  const { screenProperties } = storeToRefs (screenPropertiesStore)

  const { locale } = useI18n ()

</script>


<template>

  <article class="o-expertise-text">

    <h1>
      {{ 
        hyphenate (
          $t ('pages.ourExpertise.index.expertise.craft.slogan'),
          locale
        )
      }}
    </h1>



    <NuxtLink :to="{ name: 'our-expertise' }">

      <button>

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