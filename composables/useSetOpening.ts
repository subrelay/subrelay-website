import { useToggleCollapsible } from './useToggleCollapsible';

export function useSetOpening() {
  const opening: Ref<number | null> = ref(null);
  const { toggleCollapsibleElement } = useToggleCollapsible();

  function setOpening(index: number) {
    if (opening.value === index) {
      opening.value = null;
      toggleCollapsibleElement(true, `faq-${index}`);
    } else {
      if (opening.value !== null) toggleCollapsibleElement(true, `faq-${opening.value}`);

      opening.value = index;
      toggleCollapsibleElement(false, `faq-${index}`);
    }
  }

  return {
    setOpening,
    opening,
  };
}
