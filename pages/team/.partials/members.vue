<script setup>

  import ReadMore from './read-more'


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

    <NuxtLink :to="{ name: 'team-michel' }">

      <figure :data-number-of-parts="screenProperties.ratioIndex">

        <picture>
        
          <NuxtImg
            src="/images/profiles/michel.png"
            alt="Michel Boretti"
            loading="lazy"
            preload
          />
        
        </picture>


        <figcaption>
          
          <h1 class="o-font-en">Michel Boretti</h1>
          <h2>{{ $t ('pages.team.index.fullstack') }}</h2>
          <h3>+ {{ $t ('pages.team.index.founder') }}</h3>
          <h4>+ {{ $t ('pages.team.index.consulting') }}</h4>
          
          <h5 data-wrap="1">
            + {{ $t ('pages.team.index.teamLeading') }}
          </h5>
        
          <ReadMore />

        </figcaption>

      </figure>


    </NuxtLink>


    <NuxtLink :to="{ name: 'team-mon' }">

      <figure>

        <picture>
        
          <NuxtImg
            src="/images/profiles/mon.png"
            :alt="NAMES.mon [ locale ] ?? NAMES.mon.en"
            loading="lazy"
            preload
          />
        
        </picture>


        <figcaption>

          <h1
            :class="`
                o-font-${ [ 'en', locale ] [ +(locale === 'my') ] }
              `"
          >
            {{ NAMES.mon [ locale ] ?? NAMES.mon.en }}
          </h1>
          
          <h2>{{ $t ('pages.team.index.fullstack') }}</h2>
          <h3>+ {{ $t ('pages.team.index.graphicDesign') }}</h3>
          <h4>+ {{ $t ('pages.team.index.animation') }}</h4>
        
          <ReadMore />

        </figcaption>

      </figure>

    </NuxtLink>


    <NuxtLink :to="{ name: 'team-fah' }">

      <figure>

        <picture>
        
          <NuxtImg
            src="/images/profiles/fah.png"
            :alt="NAMES.fah [ locale ] ?? NAMES.fah.en"
            loading="lazy"
            preload
          />
        
        </picture>


        <figcaption>

          <h1
            :class="`
                o-font-${ [ 'en', locale ] [ +(locale === 'th') ] }
              `"
          >
            {{ NAMES.fah [ locale ] ?? NAMES.fah.en }}
          </h1>
        
          <h2>{{ $t ('pages.team.index.fullstack') }}</h2>
          <h3>+ {{ $t ('pages.team.index.graphicDesign') }}</h3>
        
          <ReadMore />
        
        </figcaption>

      </figure>

    </NuxtLink>


    <NuxtLink :to="{ name: 'team-babe' }">

      <figure>

        <picture>
        
          <NuxtImg
            src="/images/profiles/babe.png"
            :alt="NAMES.babe [ locale ] ?? NAMES.babe.en"
            loading="lazy"
            preload
          />
        
        </picture>


        <figcaption>

          <h1
            :class="`
                o-font-${ [ 'en', locale ] [ +(locale === 'th') ] }
              `"

            :data-wrap="[ '0', '1' ] [ +(locale !== 'th') ]"
          >
            {{ NAMES.babe [ locale ] ?? NAMES.babe.en }}
          </h1>
          
          <h2>{{ $t ('pages.team.index.fullstack') }}</h2>
          <h3>+ {{ $t ('pages.team.index.api') }}</h3>
        
          <ReadMore />

        </figcaption>

      </figure>

    </NuxtLink>


    <article id="team-girls">

      <p>
        {{ hyphenate ($t ('pages.team.index.backstage'), locale) }}
      </p>


      <ul
        :class="`o-font-${ [ 'en', locale ] [ +(locale === 'th') ] }`"
      >
        <li>{{ NAMES.nok [ locale ] ?? NAMES.nok.en }}</li>
        <li>{{ NAMES.ketsara [ locale ] ?? NAMES.ketsara.en }}</li>
        <li>{{ NAMES.yuwadee [ locale ] ?? NAMES.yuwadee.en }}</li>
      </ul>


      <figure
        class="o-user-girls"
        :data-number-of-parts="screenProperties.ratioIndex"
      >

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

    </article>

  </section>

</template>


<style
  scoped
  src="@/assets/sass/pages/team/index.sass"
  lang="sass"
></style>