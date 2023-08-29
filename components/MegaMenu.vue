<template>
  <nav class="fixed top-0 left-0 right-0 z-[1001]">
    <!-- Desktop nav -->
    <section class="h-[88px] relative">
      <!-- megamenu-top-menu -->
      <div class="z-[100] flex relative items-center justify-between h-[88px] max-w-[1370px] mx-auto px-6">
        <div class="flex">
          <a href="/" class="-m-1.5 p-1.5 text-xl text-bold">
            <span class="font-unbounded mr-1 p-2">Subrelay</span>
          </a>
        </div>

        <div class="flex">
          <div v-for="(options, index) in navOptions" :key="index" class="flex items-center m-2 cursor-pointer">
            <span>{{ options }} </span>
            <ChevronDownIcon class="h-4 w-4 ml-2" />
          </div>
        </div>

        <div class="flex">
          <div class="mr-4 border rounded-lg px-4 py-2 border-solid border-zinc-700 cursor-pointer hover:opacity-80">
            Log in
          </div>

          <div class="mr-2 rounded-lg px-4 py-2 border-solid bg-black text-gray-50 cursor-pointer hover:opacity-80">
            Sign up
          </div>
        </div>

        <!-- Mobile toggle button -->
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="false" />
          </button>
        </div>
      </div>

      <!-- megamenu-content-wrapper -->
      <div
        class="absolute -top-1 bg-[#ffffffe6] transition-all duration-[600ms] ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] backdrop-saturate-[1.8] backdrop-blur-[20px] w-full"
        :class="{ 'pt-[89px]': scrolledPast88px, 'pt-px': !scrolledPast88px }"
      >
        <!-- <div class="min-h-[350px] px-[50px] pt-[30px] pb-[50px]">
          <div class="h-[88px]"></div>
        </div> -->
      </div>
    </section>
  </nav>

  <!-- Mobile -->
  <client-only>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <nuxt-img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Product
                  <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton
                    v-for="item in [...products, ...callsToAction]"
                    :key="item.name"
                    as="a"
                    :href="item.href"
                    class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >{{ item.name }}</DisclosureButton
                  >
                </DisclosurePanel>
              </Disclosure>
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Features</a
              >
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Marketplace</a
              >
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Company
              </a>
            </div>
            <div class="py-6">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Log in</a
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </client-only>
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

const mobileMenuOpen = ref(false);

const navOptions = ref(['Products', 'Template', 'Integrations', 'Resources', 'Pricing', 'Enterprices', 'Support']);
const partners = ref(['airbnb', 'mailchimp', 'hermes', 'hubspot', 'barrys']);

const scrolledPast88px = ref(false);

const checkScroll = () => {
  if (window.pageYOffset > 88) {
    scrolledPast88px.value = true;
  } else {
    scrolledPast88px.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>
