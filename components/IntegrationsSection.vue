<template>
  <div class="mx-auto py-24 px-20 max-w-[1370px] grid grid-cols-12 gap-y-0 gap-x-8">
    <div class="flex flex-col items-start justify-center col-start-1 col-end-4">
      <div class="text-3xl leading-[127%]">Works with your existing workflow</div>
      <div class="font-medium underline mt-8">Browse 120+ integrations</div>
    </div>

    <div class="col-[-1/4]">
      <ul class="flex gap-x-8">
        <li
          v-for="(integration, index) in integrations"
          :key="index"
          class="w-64 h-64 flex items-center justify-center bg-[#F9F9F7] rounded-[52px]"
        >
          <img alt="" :src="`/integrations/${integration}-logo.svg`" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const integrations = ref(['zapier', 'calendly', 'hubspot']);
</script>
