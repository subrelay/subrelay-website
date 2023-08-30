<template>
  <div class="relative bg-[#262627] text-white">
    <div class="mx-auto max-w-[1370px] text-left py-24 px-20">
      <div class="mb-12 text-5xl font-semibold text-center">Frequently Asked Questions</div>

      <div
        class="border-t-2 py-4 cursor-pointer last:border-b-2"
        v-for="({ title, answer }, index) in faqs"
        :key="index"
        @click="setOpening(`faq-${index}`)"
      >
        <div class="text-2xl flex justify-between items-center">
          <span> {{ title }}</span>
          <iconify-icon
            icon="ph:plus-bold"
            class="align-sub transition duration-200 ease-in-out"
            :class="{ 'rotate-45': openedItemId === index }"
          />
        </div>

        <div :id="`faq-${index}`" class="h-0 overflow-hidden transition-[height] duration-300 ease-in-out">
          <div class="py-6 w-4/5">{{ answer }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const faqs = ref([
  {
    title: 'How do I get started?',
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    title: 'What are the benefits of using this framework?',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    title: 'How can I contribute to the project?',
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
  },
  {
    title: 'What programming languages does this framework support?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  },
  {
    title: 'How can I install the framework?',
    answer:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
  },
  {
    title: 'Are there any tutorials available?',
    answer:
      "Yes, there are several tutorials available. You can find them on the project's official website or on popular coding tutorial platforms.",
  },
  {
    title: 'Is there a community forum for this framework?',
    answer:
      'Yes, there is a community forum where you can ask questions, share ideas, and connect with other users of the framework.',
  },
  {
    title: 'What is the latest version of the framework?',
    answer:
      "The latest version of the framework is version X.X.X. You can check the project's release notes for more information.",
  },
  {
    title: 'Can I use this framework in my existing project?',
    answer:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
  },
  {
    title: 'Is there a support channel for troubleshooting?',
    answer:
      'Yes, there is a dedicated support channel where you can get help with any issues or difficulties you encounter while using the framework.',
  },
]);

const { setOpening, openedItemId } = useSetOpening();
</script>
