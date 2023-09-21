import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="box"></div>
  </div>
`;

document.addEventListener('click', moveBox);

function moveBox() {
  const box = document.querySelector('.box') as HTMLDivElement;

  moveWithFlip(box, () => toggleClasses(box));
}

function moveWithFlip(element: HTMLElement, updateDOM: () => void) {
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

function toggleClasses(box: HTMLDivElement) {
  box.classList.toggle('float-right');
  box.classList.toggle('push-down');
  box.classList.toggle('large');
}
