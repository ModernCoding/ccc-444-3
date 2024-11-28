<script setup>

  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()
  
  const { screenProperties } = storeToRefs (screenPropertiesStore)

  const { locale } = useI18n ()

</script>


<template>

  <section
    class="o-members"
    :data-number-of-parts="screenProperties.ratioIndex"
  >

    <NuxtLink :to="{ name: 'contact' }">

      <figure>

        <picture>
        
          <NuxtImg
            src="/images/profiles/michel.png"
            alt="Michel Boretti"
            loading="lazy"
            preload
          />
        
        </picture>


        <figcaption class="o-font-en">
          Michel Boretti
        </figcaption>

      </figure>

    </NuxtLink>


    <NuxtLink :to="{ name: 'contact' }">

      <figure>

        <picture>
        
          <NuxtImg
            src="/images/profiles/mon.png"
            :alt="NAMES.mon [ locale ] ?? NAMES.mon.en"
            loading="lazy"
            preload
          />
        
        </picture>


        <figcaption
          :class="`o-font-${ [ 'en', locale ] [ +(locale === 'my') ] }`"
        >
          {{ NAMES.mon [ locale ] ?? NAMES.mon.en }}
        </figcaption>

      </figure>

    </NuxtLink>


    <NuxtLink :to="{ name: 'contact' }">

      <figure>

        <picture>
        
          <NuxtImg
            src="/images/profiles/fah.png"
            :alt="NAMES.fah [ locale ] ?? NAMES.fah.en"
            loading="lazy"
            preload
          />
        
        </picture>


        <figcaption
          :class="`o-font-${ [ 'en', locale ] [ +(locale === 'th') ] }`"
        >
          {{ NAMES.fah [ locale ] ?? NAMES.fah.en }}
        </figcaption>

      </figure>

    </NuxtLink>


    <NuxtLink :to="{ name: 'contact' }">

      <figure>

        <picture>
        
          <NuxtImg
            src="/images/profiles/babe.png"
            :alt="NAMES.babe [ locale ] ?? NAMES.babe.en"
            loading="lazy"
            preload
          />
        
        </picture>


        <figcaption
          :class="`o-font-${ [ 'en', locale ] [ +(locale === 'th') ] }`"
        >
          {{ NAMES.babe [ locale ] ?? NAMES.babe.en }}
        </figcaption>

      </figure>

    </NuxtLink>

  </section>

</template>


<style
  scoped
  src="@/assets/sass/components/call-to-actions.sass"
  lang="sass"
></style>