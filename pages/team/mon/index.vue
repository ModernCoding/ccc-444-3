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

    <section class="o-team-member-in-modal">

      <NuxtLink :to="{ name: 'team' }">
        <ProfilePicture />
      </NuxtLink>

      <div>
        <CountryName />
        <CountryPicture />
      </div>

      <ProfileText />

    </section>
  
  </ModalLayout>


  <BaseLayout>

    <template
      v-if="screenProperties.ratioIndex > 1"
      v-slot:aside
    >

      <NuxtLink :to="{ name: 'team' }">
        <ProfilePicture />
      </NuxtLink>
      
    </template>


    <template
      v-if="screenProperties.ratioIndex > 2"
      v-slot:central
    >
      <NuxtLink :to="{ name: 'team' }">
        <CountryPicture />
      </NuxtLink>
    </template>


    <template
      v-if="screenProperties.ratioIndex > 1"
      v-slot:main
    >

      <article
        class="o-team-member"
        :data-number-of-parts="screenProperties.ratioIndex"
      >

        <div v-if="screenProperties.ratioIndex === 2">
          <CountryName />
          <CountryPicture />
        </div>

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