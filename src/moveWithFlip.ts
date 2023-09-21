export function moveWithFlip(element: HTMLElement, updateDOM: () => void) {
  const first = element.getBoundingClientRect();

  updateDOM();

  const last = element.getBoundingClientRect();

  const invertX = first.x - last.x;
  const invertY = first.y - last.y;
  const invertWidth = first.width / last.width;

  element.animate(
    [
      {
        transformOrigin: 'top left',
        transform: `translateX(${invertX}px) translateY(${invertY}px) scale(${invertWidth})`,
      },
      { transform: 'none' },
    ],
    {
      duration: 3000,
      easing: 'ease-in-out',
    }
  );
}
