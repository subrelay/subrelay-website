export function useToggleCollapsible() {
  function toggleCollapsibleElement(isCollapsed: boolean, elementId: string) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const sectionHeight = element.scrollHeight;
    element.style.height = isCollapsed ? '2px' : `${sectionHeight}px`;
  }

  return {
    toggleCollapsibleElement,
  };
}
