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
          $t ('pages.ourExpertise.index.expertise.graphicDesign.slogan'),
          locale
        )
      }}
    </h1>


    <NuxtLink :to="{ name: 'our-expertise' }">

      <button class="o-expertise-know-how">

        <p class="fw-bold">
          {{
            $t ('pages.ourExpertise.index.expertise.graphicDesign.know')
          }}
        </p>


        <p>

          <span>
            <i class="bi bi-hand-index-fill" aria-hidden="true" />
          </span>

          <strong>
            {{
              $t ('pages.ourExpertise.index.expertise.graphicDesign.how')
            }}
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