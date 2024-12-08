<script setup>
  const { locale } = useI18n ()
</script>


<template>

  <article
    :class="`
        o-expertise-text

        o-${
          $tm ('pages.ourExpertise.ourApproach.menu') [ 0 ]
            .split ('|') [ 0 ]  
        }
      `"
  >

    <h1>
      {{ 
        $tm ('pages.ourExpertise.ourApproach.menu') [ 0 ]
          .split ('|') [ 1 ] 
      }}
    </h1>


    <figure class="o-vietnamese-girl">

      <NuxtImg
        src="/images/vietnamese-girl-110d0d.gif"
        alt="Vietnamese girl on a boat"
        :modifiers="{ b: '#110d0d', opacity: 1 }"
        loading="lazy"
      />

    </figure>


    <template
      v-for="
          p, i in $tm ('pages.ourExpertise.ourApproach.onTheSameBoat')
        "

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
              v-for="c, j in s.split ('¶')"
              :key="c"
              :class="[ '', 'fw-bold o-ccc o-font-en' ] [ +(j % 2 !== 0) ]"
            >

              <span
                v-for="a, k in c.split ('%')"
                :key="a"
                :class="
                    [ '', 'fw-bold o-underline' ] [ +(k % 2 !== 0) ]
                  "
              >
                {{ hyphenate (a, locale) }}
              </span>

            </span>

          </span>
        
        </p>

      </template>

    </template>

  </article>

</template>


<style
  scoped
  src="@/assets/sass/pages/our-expertise/skills.sass"
  lang="sass"
></style>