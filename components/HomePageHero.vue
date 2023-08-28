7
<template>
  <div class="px-20 py-16 grid grid-cols-12 gap-8 max-w-[1370px] mx-auto">
    <div class="col-span-7">
      <video width="100%" muted loop autoplay playsinline preload="metadata" x-webkit-airplay="deny">
        <source data-testid="currentWebmVideo" src="/videos/hero-lg.webm" type="video/webm" />
        <source data-testid="currentDefaultVideo" src="/videos/hero-lg.mp4" type="video/mp4" />
      </video>
    </div>

    <div class="col-span-5 flex flex-col items-start justify-center">
      <div class="text-[80px] leading-none">
        Forms <br />
        that break the norm
      </div>

      <div class="mt-6 text-2xl">
        Get more data—like signups, feedback, and anything else—with forms designed to be
        <span class="font-bold">refreshingly different. </span>
      </div>

      <div
        class="mt-10 rounded-lg px-4 py-3 border-solid bg-black text-gray-50 cursor-pointer hover:opacity-80 inline-block"
      >
        Get started—it's free
      </div>
    </div>
  </div>
</template>
