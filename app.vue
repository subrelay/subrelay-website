<template>
  <MegaMenu />

  <HomePageHero />

  <PartnerSection />

  <div class="mx-auto max-w-[1370px] text-center pt-24 px-20">
    <h2 class="text-[64px]">Refreshingly different, <br />by design</h2>
  </div>

  <ForThem />

  <ForYou />

  <IntegrationsSection />

  <Web2Web3Connection />

  <div class="mx-auto max-w-[1370px] text-center pt-24 px-20 flex flex-col gap-4">
    <h2 class="text-[64px]">Do it all with a form</h2>
    <p class="leading-[133%] text-2xl font-normal">Whatever your goal, start with a ready-made template.</p>
  </div>

  <ProfilesSection />

  <ClosingSection />

  <FooterSection />
</template>

<script setup lang="ts">
useHead({
  title: 'SubRelay',
  link: [
    {
      rel: 'icon',
      href: '/subrelay-logo.png',
    },
  ],
});
const partners = ref(['airbnb', 'mailchimp', 'hermes', 'hubspot', 'barrys']);
</script>

<style></style>
