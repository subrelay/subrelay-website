<template>
  <div
    class="mx-auto py-16 md:py-20 lg:py-24 lg:px-20 max-w-[1370px] grid grid-cols-12 gap-y-0 gap-x-8"
    data-aos="fade-up"
    data-aos-duration="850"
  >
    <div
      class="flex flex-col items-center lg:items-start justify-center col-span-full lg:col-start-1 lg:col-end-4 px-8 mb-14 lg:p-0 lg:m-0"
    >
      <div class="text-2xl xl:text-3xl leading-[127%]">Works with your existing workflow</div>
      <div class="font-semibold underline cursor-pointer mt-4 lg:mt-8">Browse 120+ integrations</div>
    </div>

    <div class="col-span-full lg:col-[-1/4]">
      <ul class="flex justify-between px-8 lg:p-0 gap-6 xl:gap-8">
        <li
          v-for="(integration, index) in integrations"
          :key="index"
          class="w-40 h-40 md:w-60 md:h-60 lg:w-52 lg:h-52 p-8 flex items-center justify-center shrink-0 bg-[#F9F9F7] rounded-[52px]"
        >
          <nuxt-img alt="" :src="`/integrations/${integration}-logo.svg`" class="w-full h-auto" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const integrations = ref(['zapier', 'calendly', 'hubspot']);
</script>
