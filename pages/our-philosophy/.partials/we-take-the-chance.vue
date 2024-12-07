<script setup>
  const { locale } = useI18n ()
</script>


<template>

  <article
    class="o-philosophy-content"
    id="we-take-the-chance"
  >

    <h1>
      <div class="text-uppercase">WE TAKE THE CHANCE!</div>
      <div>And we are friends for a game that never ends...</div>
    </h1>


    <h2 v-if="locale === 'fr'">
      (Dieter Bohlen - Modern Talking, &laquo;&nbsp;We Take The Chance&nbsp;&raquo;)
    </h2>
    
    <h2 v-else>
      (Dieter Bohlen - Modern Talking, "We Take The Chance")
    </h2>


    <template
      v-for="p, i in $tm ('pages.ourPhilosophy.index.weTakeTheChance')"
      :key="i"
    >

      <ul v-if="p.includes ('>')">

        <template v-for="s, i in p.split ('>')" :key="s">

          <li v-if="i > 0">

            <span
              v-for="s0, i in s.split ('^')"
              :key="s0"
              :class="[ '', 'o-font-en' ] [ +(i % 2 !== 0) ]"
            >

              <span
                v-for="a, j in s0.split ('%')"
                :key="a"
                :class="
                    [ '', 'fw-bold o-underline' ] [ +(j % 2 !== 0) ]
                  "
              >
                {{ hyphenate (a, locale) }}
              </span>

            </span>

          </li>

        </template>

      </ul>


      <template v-else>

        <p v-if="p.startsWith ('~')">

          <a
            :href="p.split ('~') [ 1 ]"
            target="_blank"
            class="o-external-link"
          >

            <div>
              <i class="bi bi-hand-index-fill" aria-hidden="true"></i>
            </div>

            {{ p.split ('www.') [ 1 ] }}    

          </a>

        </p>


        <p v-else>

          <span
            v-for="s, i in p.split ('^')"
            :key="s"
            :class="[ '', 'o-font-en' ] [ +(i % 2 !== 0) ]"
          >

            <span
              v-for="a, j in s.split ('%')"
              :key="a"
              :class="[ '', 'fw-bold o-underline' ] [ +(j % 2 !== 0) ]"
            >
              {{ hyphenate (a, locale) }}
            </span>

          </span>
        
        </p>

      </template>

    </template>

  </article>

</template>


<style
  scoped
  src="@/assets/sass/pages/our-philosophy/index.sass"
  lang="sass"
></style>