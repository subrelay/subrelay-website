<template>
  <MegaMenu />
  <HomePageHero></HomePageHero>

  <div class="max-w-[1370px] mx-auto pt-24 pb-8 px-10 text-center text-xl text-neutral-400">
    Rated 4.5 out of 600+ reviews on G2.com and trusted by
  </div>

  <div class="pb-24 grid grid-cols-[repeat(12,64px)] gap-y-0 gap-x-8 justify-center">
    <div class="flex col-start-2 col-end-12 flex-wrap justify-between gap-y-6">
      <div v-for="(partner, index) in partners" :key="index">
        <img :src="`/partners/${partner}-logo.svg`" alt="parner-logo" class="h-9 w-auto" />
      </div>
    </div>
  </div>

  <div class="mx-auto max-w-[1370px] text-center pt-24 px-20">
    <h2 class="text-[64px]">Refreshingly different, <br />by design</h2>
  </div>

  <ForThem />

  <ForYou />

  <IntegrationsSection />

  <div class="mx-auto max-w-[1370px] text-center pt-24 px-20 flex flex-col gap-4">
    <h2 class="text-[64px]">Do it all with a form</h2>
    <p class="leading-[133%] text-2xl font-normal">Whatever your goal, start with a ready-made template.</p>
  </div>

  <ProfilesSection />

  <ClosingSection />

  <FooterSection />
</template>

<script setup>
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';

import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid';

const partners = ref(['airbnb', 'mailchimp', 'hermes', 'hubspot', 'barrys']);
</script>

<style></style>
