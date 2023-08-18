7
<template>
  <div class="px-20 py-16 grid grid-cols-12 gap-8 max-w-[1370px] mx-auto">
    <div class="col-span-7">
      <video width="100%" muted loop autoplay playsinline preload="metadata" x-webkit-airplay="deny">
        <source data-testid="currentWebmVideo" src="/videos/for-you-lg.webm" type="video/webm" />
        <source data-testid="currentDefaultVideo" src="/videos/for-you-lg.mp4" type="video/mp4" />
      </video>
    </div>

    <div class="col-span-5 flex flex-col items-start justify-center">
      <div class="text-5xl leading-none">
        Embeds smoothly. <br />
        Reveals more.
      </div>

      <div class="mt-6 text-xl">
        <span class="font-bold">Collect more and better data. </span>
        Embed forms where people see them, from web to email. Ask the right follow-up question at the right time to
        reveal deeper insights..
      </div>

      <div
        class="mt-10 rounded-lg px-4 py-3 border-solid bg-black text-gray-50 cursor-pointer hover:opacity-80 inline-block"
      >
        Sign up
      </div>
    </div>
  </div>
</template>
