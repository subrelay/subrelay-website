<template>
  <MegaMenu />

  <HomePageHero />

  <PartnerSection />

  <ForThem />

  <ForYou />

  <IntegrationsSection />

  <Web2Web3Connection />

  <FAQ />

  <div
    class="mx-auto max-w-[1370px] text-center pt-24 px-20 flex flex-col gap-4"
    data-aos="fade-up"
    data-aos-duration="850"
  >
    <h2 class="text-4xl md:text-5xl xl:text-[64px] font-semibold">Do it all with a form</h2>
    <p class="leading-[133%] xl:text-2xl font-normal">Whatever your goal, start with a ready-made template.</p>
  </div>

  <ProfilesSection />

  <ClosingSection />

  <FooterSection />
</template>

<script setup lang="ts">
import AOS from 'aos';

useHead({
  title: 'SubRelay',
  link: [{ rel: 'icon', href: '/subrelay-logo.png' }],
});

onMounted(() => {
  if (process.client && window) {
    window.history.scrollRestoration = 'auto';
  }
});
</script>

<style></style>
