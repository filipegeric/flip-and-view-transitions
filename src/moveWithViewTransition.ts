function moveWithViewTransition(element: Element, updateDOM: () => void) {
  document.startViewTransition(() => updateDOM());
}

export { moveWithViewTransition };
