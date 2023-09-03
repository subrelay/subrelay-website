<template>
  <div class="px-20 py-16 grid grid-cols-12 gap-8 max-w-[1370px] mx-auto">
    <ul
      class="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-y-8 md:gap-x-6 md:gap-y-8 lg:gap-y-6 lg:gap-x-8 col-span-full"
    >
      <li
        v-for="(profile, index) in profiles"
        :key="index"
        class="p-8 bg-[#F9F9F7] hover:bg-[#1a1a19] hover:text-white rounded-3xl"
      >
        <h2 class="text-2xl lg:text-3xl leading-[127%] font-semibold">
          {{ profile.title }}
        </h2>

        <ul class="mt-4">
          <li v-for="division in profile.divisions" :key="division" class="capitalize flex items-center justify-start">
            <iconify-icon icon="mi:arrow-right" />
            <span class="lg:text-xl py-0.5 pl-1 pr-0.5 cursor-pointer hover:underline">{{ division }}</span>
          </li>
        </ul>
      </li>
    </ul>

    <div class="text-xl font-bold col-span-full mt-20 mx-auto underline cursor-pointer">Browse all templates</div>
  </div>
</template>

<script setup>
import 'iconify-icon';
const profiles = ref([
  { title: 'Marketing', divisions: ['signups', 'branding', 'customer feedback'] },
  { title: 'Product', divisions: ['beta testing', 'Product research', 'Product feedback'] },
  { title: 'Customer success', divisions: ['FAQ builder', 'Net promoter score', 'Customer satisfaction'] },
  { title: 'HR', divisions: ['Job application', '360 degree feedback', 'Employee engagement'] },
  { title: 'Creators', divisions: ['Contact details', 'Customer feedback', 'Product recommendation'] },
  { title: 'General business', divisions: ['Referral', 'Registration', 'Client onboarding'] },
]);
</script>
