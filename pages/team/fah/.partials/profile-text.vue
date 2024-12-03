<script setup>
  
  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()

  const { screenProperties } = storeToRefs (screenPropertiesStore)
  
  const { locale } = useI18n ()

</script>


<template>

  <article class="o-profile-text">

    <h1>

      <span
        v-for="
            s, i
              in $t ('pages.team.member.fah.introduction').split ('%')
          "

        :key="s"
        :class="[ '', 'fw-bold o-underline' ] [ +(i % 2 !== 0) ]"
      >
        {{ s }}
      </span>
    
    </h1>


    <template
      v-for="p in $tm('pages.team.member.fah.text')"
      :key="p"
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

  </article>

</template>


<style
  scoped
  src="@/assets/sass/pages/team/member.sass"
  lang="sass"
></style>