<template>

  <hgroup class="o-slogan">

    <h1>{{ $t ('pages.index.slogan') }}</h1>



    <NuxtLink :to="{ name: 'our-expertise' }">

      <button>

        <p class="fw-bold">{{ $t ('pages.index.and') }}</p>

        <p>
          <span>
            <i class="bi bi-hand-index-fill" aria-hidden="true" />
          </span>

          <strong>{{ $t ('pages.index.more') }}</strong>
        </p>

      </button>

    </NuxtLink>

  </hgroup>
  
</template>


<style
  scoped
  src="@/assets/sass/pages/index.sass"
  lang="sass"
></style>