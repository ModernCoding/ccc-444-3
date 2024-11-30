<script setup>
  
  import Lady from './.partials/lady'
  import Menu from './.partials/menu'
  import ProfileName from './.partials/profile-name'
  import ProfilePicture from './.partials/profile-picture'


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
      <Menu />
      <ProfilePicture />
      <Lady />
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
      <Menu />
    </template>


    <template
      v-if="screenProperties.ratioIndex > 1"
      v-slot:main
    >

      <article
        class="o-team-member"
        :data-number-of-parts="screenProperties.ratioIndex"
      >

        <Menu v-if="screenProperties.ratioIndex < 3" />
        <Lady />
      
      </article>

    </template>


    <template v-slot:footer-right>
      <ProfileName />
    </template>

  </BaseLayout>

</template>


<style
  scoped
  src="@/assets/sass/pages/team/member.sass"
  lang="sass"
></style>