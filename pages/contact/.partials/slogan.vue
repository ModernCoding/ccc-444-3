<template>

  <hgroup class="o-slogan">

    <h1>{{ $t ('pages.index.slogan') }}</h1>


    <button>

      <p class="fw-bold">{{ $t ('pages.index.and') }}</p>

      <p>
        <div>
          <i class="bi bi-hand-index-fill" aria-hidden="true"></i>
        </div>

        <strong>{{ $t ('pages.index.more') }}</strong>
      </p>

    </button>

  </hgroup>
  
</template>


<style
  scoped
  src="@/assets/sass/pages/index.sass"
  lang="sass"
></style>