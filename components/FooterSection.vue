<template>
  <div class="relative">
    <footer class="border-t-0 bg-[#262627] text-white">
      <div class="grid grid-rows-[280px_auto] grid-cols-[repeat(12,64px)] gap-y-16 gap-x-8 py-20 px-8 justify-center">
        <div
          class="row-span-full self-start first:col-[2_/_span_2] col-[span_2]"
          v-for="(item, index) in items"
          :key="index"
        >
          <h3 class="uppercase mb-8 font-bold">{{ item.title }}</h3>

          <div
            class="leading-6 cursor-pointer"
            v-for="(child, childIndex) in item.childrens"
            :key="childIndex"
            :class="{ 'mb-4': openedItemId === `footer-${index}-${childIndex}` }"
          >
            <section
              v-if="child.childrens"
              class="flex flex-col overflow-y-hidden"
              @click="setOpening(`footer-${index}-${childIndex}`)"
            >
              <div
                class="mb-4 transition-opacity duration-200 ease-in hover:opacity-80"
                :class="{ 'opacity-80': openedItemId === `footer-${index}-${childIndex}` }"
              >
                <span v-html="child.title"> </span>

                <iconify-icon
                  icon="pajamas:chevron-down"
                  class="ml-1 align-sub transition duration-200 ease-in-out"
                  :class="{ 'rotate-180': openedItemId === `footer-${index}-${childIndex}` }"
                />
              </div>

              <div
                :id="`footer-${index}-${childIndex}`"
                class="h-0 overflow-hidden transition-[height] duration-200 ease-in-out"
              >
                <section class="pl-4">
                  <div
                    v-for="(grandchild, grandchildIndex) in child.childrens"
                    :key="grandchildIndex"
                    class="mb-4 last:mb-0"
                  >
                    {{ grandchild }}
                  </div>
                </section>
              </div>
            </section>

            <div v-else class="mb-4 transition duration-200 ease-in hover:translate-x-[8px]">{{ child.title }}</div>
          </div>

          <div v-if="index === items.length - 1" class="flex gap-x-2">
            <a
              :href="social.href"
              :key="socialIndex"
              v-for="(social, socialIndex) in socials"
              class="w-6 h-6 opacity-80 transition-opacity duration-200 ease hover:opacity-100 border first:ml-0 rounded-[50%] flex items-center justify-center"
              target="_blank"
            >
              <iconify-icon :icon="social.icon" />
            </a>
          </div>
        </div>
      </div>

      <div
        class="px-8 py-10 border-t border-t-[#4c4c4c] grid gap-x-8 grid-cols-[repeat(12,64px)] items-center justify-center text-sm"
      >
        <div class="flex items-center col-[1_/_span_3]">
          <iconify-icon icon="carbon:location" class="mr-2" />
          <span>With love, from Vietnam</span>
        </div>

        <div class="items-center col-[-2/-1] flex -ml-6">ⓒ Subrelay</div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
const items = [
  {
    title: 'product',
    childrens: [
      { title: 'Pricing' },
      { title: 'Enterprise', childrens: ['Enterprise overview', 'Healthcare'] },
      { title: 'Lead generation' },
      { title: 'Videoask' },
    ],
  },
  {
    title: 'TEMPLATES',
    childrens: [
      {
        title: 'Popular templates',
        childrens: [
          'Interactive story template',
          'Trivia quiz',
          'Job application form',
          'Event registration form',
          'NPS survey',
        ],
      },
      {
        title: 'Recent templates',
        childrens: [
          'Photo upload form',
          'Customer satisfaction form',
          'Website questionnaire template',
          'Beta product feedback survey',
          'Pre-order form template',
        ],
      },
      {
        title: 'Popular categories',
        childrens: [
          'Remote working templates',
          'Lead gen forms',
          'Lead gen quizzes',
          'Registration forms',
          'Customer success forms',
        ],
      },
      {
        title: 'Recent categories',
        childrens: [
          'File upload forms',
          'Job application forms',
          'Application forms',
          'Event forms',
          'Educational templates',
        ],
      },
    ],
  },
  {
    title: 'INTEGRATIONS',
    childrens: [
      {
        title: 'Popular integration <br/> apps',
        childrens: [
          'Slack Integration',
          'Mailchimp Integration',
          'Klaviyo Integration',
          'WordPress Integration',
          'PipeDrive Integration',
        ],
      },
      {
        title: 'More integration <br> apps',
        childrens: [
          'Google Calendar Integration',
          'Canva Integration',
          'Zoho Integration',
          'Office 365 Integration',
          'Zendesk Integration',
        ],
      },
      {
        title: 'Popular app <br> categories',
        childrens: [
          'Analytics Reporting Integration',
          'Sales and CRM Integration',
          'Payments Integration',
          'Scheduling Integration',
          'Email Marketing Integration',
        ],
      },
      {
        title: 'More app <br> categories',
        childrens: [
          'Customer Support Integration',
          'Automation Integration',
          'Documents Integration',
          'Rewards Integration',
          'Collaboration Integration',
        ],
      },
    ],
  },
  {
    title: 'RESOURCES',
    childrens: [
      { title: 'Blog' },
      { title: 'Help center' },
      { title: 'Community' },
      { title: 'Tutorials' },
      { title: 'FAQs' },
      { title: 'Affiliates', childrens: ['Affiliate program', 'Typeform startups'] },
      { title: 'Tech partners' },
      { title: 'System status' },
      { title: 'Developers / API' },
    ],
  },
  {
    title: 'get to know us',
    childrens: [
      { title: 'About us' },
      { title: 'Careers' },
      { title: 'Contact us' },
      { title: 'News' },
      { title: 'Terms & conditions', childrens: ['Terms & conditions', 'NFIR'] },
      { title: 'Typeform (es)' },
      { title: 'Newsletter' },
    ],
  },
];

const openingMenu = ref(null);

const socials = ref([
  { href: '', icon: 'ri:facebook-fill' },
  { href: '', icon: 'ri:twitter-fill' },
  { href: '', icon: 'ri:instagram-line' },
  { href: '', icon: 'ri:youtube-fill' },
  { href: '', icon: 'ri:linkedin-fill' },
]);

function setOpeningMenu(child: any) {
  if (openingMenu.value === child.title) {
    openingMenu.value = null;
  } else {
    openingMenu.value = child.title;
  }
}

const { setOpening, openedItemId } = useSetOpening();
</script>
