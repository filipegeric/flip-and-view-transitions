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
  const invertWidth = first.width / last.width;

  box.animate(
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
