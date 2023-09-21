function moveWithViewTransition(element: HTMLElement, updateDOM: () => void) {
  element.style.viewTransitionName = 'moving-box';
  document
    .startViewTransition(() => updateDOM())
    .finished.then(() => (element.style.viewTransitionName = undefined));
}

export { moveWithViewTransition };
