import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="box"></div>
  </div>
`;

document.addEventListener('click', moveBox);

function moveBox() {
  const box = document.querySelector('.box') as HTMLDivElement;

  const first = box.getBoundingClientRect();

  toggleClasses(box);

  const last = box.getBoundingClientRect();

  const invertX = first.x - last.x;
  const invertY = first.y - last.y;

  box.animate(
    [
      { transform: `translateX(${invertX}px) translateY(${invertY}px)` },
      { transform: 'none' },
    ],
    {
      duration: 300,
      easing: 'ease-in-out',
    }
  );
}

function toggleClasses(box: HTMLDivElement) {
  box.classList.toggle('float-right');
  box.classList.toggle('push-down');
}
