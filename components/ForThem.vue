7
<template>
  <div class="px-20 py-16 grid grid-cols-12 gap-8 max-w-[1370px] mx-auto">
    <div class="col-span-5 flex flex-col items-start justify-center">
      <div class="text-5xl leading-none">
        Looks striking. <br />
        Feels effortless.
      </div>

      <div class="mt-6 text-xl">
        <span class="font-bold">Impress your form takers. </span>
        Catch their eye with striking visuals, and make form-filling feel effortless by replacing walls of questions
        with just one at a time.
      </div>

      <div
        class="mt-10 rounded-lg px-4 py-3 border-solid bg-black text-gray-50 cursor-pointer hover:opacity-80 inline-block"
      >
        Sign up
      </div>
    </div>

    <div class="col-span-7">
      <video width="100%" muted loop autoplay playsinline preload="metadata" x-webkit-airplay="deny">
        <source data-testid="currentWebmVideo" src="/videos/for-them-lg.webm" type="video/webm" />
        <source data-testid="currentDefaultVideo" src="/videos/for-them-lg.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>
