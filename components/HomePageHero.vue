7
<template>
  <section class="pt-[72px] lg:pt-[88px]">
    <div class="px-8 md:px-[60px] md:py-16 py-16 gap-6 xl:gap-8 grid grid-cols-12 max-w-[1370px] mx-auto first-letter">
      <div class="col-span-full lg:col-start-1 lg:col-end-8 aspect-[960/728] mt-14 flex items-center justify-center">
        <nuxt-img src="/placeholder.png" alt="" class="h-4/5 w-auto rounded-xl" />
      </div>

      <div
        class="row-start-1 row-end-auto col-span-full lg:col-[8/-1] flex flex-col item-center text-center lg:text-left lg:items-start justify-center"
      >
        <div class="text-6xl leading-none font-medium">Effortlessly connect your application to blockchain</div>

        <div class="mt-6 text-xl xl:text-2xl">
          Create workflows that synchronize on-chain data with off-chain applications —
          <span class="font-bold">no coding required. </span>
        </div>

        <div>
          <a
            class="font-semibold mt-14 lg:mt-10 rounded-xl border-solid w-auto md:gap-2 inline-flex flex-col items-stretch min-w-[160px] max-w-full px-6 py-3 bg-black text-gray-50 hover:opacity-80"
            href="https://app.subrelay.com"
            target="_blank"
          >
            Get started—it's free
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
