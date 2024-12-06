<script setup>
  
  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()

  const { screenProperties } = storeToRefs (screenPropertiesStore)

  const { locale } = useI18n ()

</script>


<template>

  <article
    :class="`
        o-expertise-text

        o-${
          $tm ('pages.ourExpertise.guestTechTeamLead.menu') [ 1 ]
            .split ('|') [ 0 ]  
        }
      `"
  >

    <h1>
      {{ 
        $tm ('pages.ourExpertise.guestTechTeamLead.menu') [ 1 ]
          .split ('|') [ 1 ] 
      }}
    </h1>


    <template
      v-for="p in $tm ('pages.ourExpertise.guestTechTeamLead.cambodia')"
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
  src="@/assets/sass/pages/our-expertise/guest-tech-team-lead.sass"
  lang="sass"
></style>