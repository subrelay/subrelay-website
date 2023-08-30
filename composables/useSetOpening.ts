import { useToggleCollapsible } from './useToggleCollapsible';

export function useSetOpening() {
  const openedItemId: Ref<string | null> = ref(null);
  const { toggleCollapsibleElement } = useToggleCollapsible();

  function setOpening(elementId: string) {
    if (openedItemId.value === elementId) {
      openedItemId.value = null;
      toggleCollapsibleElement(true, elementId);
    } else {
      if (openedItemId.value !== null) toggleCollapsibleElement(true, openedItemId.value);

      openedItemId.value = elementId;
      toggleCollapsibleElement(false, elementId);
    }
  }

  return {
    setOpening,
    openedItemId,
  };
}
