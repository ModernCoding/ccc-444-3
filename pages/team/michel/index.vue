<script setup>
  
  import CountryName from './.partials/country-name'
  import CountryPicture from './.partials/country-picture'
  import ProfileName from './.partials/profile-name'
  import ProfilePicture from './.partials/profile-picture'
  import ProfileText from './.partials/profile-text'


  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()

  const { screenProperties } = storeToRefs (screenPropertiesStore)

</script>


<template>

  <ModalLayout
    v-if="screenProperties.ratioIndex < 2"
    isShorter="1"
  >

    <section>
      <CountryPicture />
      <ProfilePicture />
      <ProfileText />
    </section>
  
  </ModalLayout>


  <BaseLayout>

    <template
      v-if="screenProperties.ratioIndex > 1"
      v-slot:aside
    >

      <NuxtLink :to="{ name: 'index' }">
        <ProfilePicture />
      </NuxtLink>
      
    </template>


    <template
      v-if="screenProperties.ratioIndex > 2"
      v-slot:central
    >
      <CountryPicture />
    </template>


    <template
      v-if="screenProperties.ratioIndex > 1"
      v-slot:main
    >

      <article
        class="o-team-member"
        :data-number-of-parts="screenProperties.ratioIndex"
      >

        <CountryPicture v-if="screenProperties.ratioIndex < 3" />
        <ProfileText v-if="screenProperties.ratioIndex > 1" />
      
      </article>

    </template>


    <template
      v-if="screenProperties.ratioIndex > 1"
      v-slot:footer-left
    >
      <ProfileName />
    </template>


    <template 
      v-if="screenProperties.ratioIndex > 2"
      v-slot:footer-central
    >
      <CountryName />
    </template>


    <template
      v-if="screenProperties.ratioIndex < 2"
      v-slot:footer-right
    >
      <ProfileName />
    </template>

  </BaseLayout>

</template>


<style
  scoped
  src="@/assets/sass/pages/team/member.sass"
  lang="sass"
></style>