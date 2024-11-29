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

      <figure :data-number-of-parts="screenProperties.ratioIndex">

        <picture>
        
          <NuxtImg
            src="/images/profiles/michel.png"
            alt="Michel Boretti"
            loading="lazy"
            preload
          />
        
        </picture>


        <figcaption class="o-font-en">
          <h1>Michel Boretti</h1>
          <h2>{{ $t ('pages.team.index.fullstack') }}</h2>
          <h3>+ {{ $t ('pages.team.index.founder') }}</h3>
          <h4>+ {{ $t ('pages.team.index.consulting') }}</h4>
          <h5>+ {{ $t ('pages.team.index.teamLeading') }}</h5>
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
          <h1>{{ NAMES.mon [ locale ] ?? NAMES.mon.en }}</h1>
          <h2>{{ $t ('pages.team.index.fullstack') }}</h2>
          <h3>+ {{ $t ('pages.team.index.graphicDesign') }}</h3>
          <h4>+ {{ $t ('pages.team.index.animation') }}</h4>
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
          <h1>{{ NAMES.fah [ locale ] ?? NAMES.fah.en }}</h1>
          <h2>{{ $t ('pages.team.index.fullstack') }}</h2>
          <h3>+ {{ $t ('pages.team.index.graphicDesign') }}</h3>
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
          :data-name="[ '', 'babe' ] [ +(locale !== 'th') ]"
        >
          <h1>{{ NAMES.babe [ locale ] ?? NAMES.babe.en }}</h1>
          <h2>{{ $t ('pages.team.index.fullstack') }}</h2>
          <h3>+ {{ $t ('pages.team.index.api') }}</h3>
        </figcaption>

      </figure>

    </NuxtLink>


    <figure class="o-user-girls">

      <NuxtImg
        src="/images/user-girl-2.svg"
        loading="lazy"
        preload
      /> 

      <NuxtImg
        src="/images/user-boy-white.svg"
        loading="lazy"
        preload
      /> 

      <NuxtImg
        src="/images/user-girl-1.svg"
        loading="lazy"
        preload
      /> 

    </figure>

  </section>

</template>


<style
  scoped
  src="@/assets/sass/pages/team/index.sass"
  lang="sass"
></style>