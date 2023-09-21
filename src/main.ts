import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="box"></div>
  </div>
`;

document.addEventListener('click', moveBox);

function moveBox() {
  const box = document.querySelector('.box')!;

  const first = box.getBoundingClientRect();

  box.classList.toggle('float-right');

  const last = box.getBoundingClientRect();

  const invertX = first.x - last.x;

  box.animate(
    [{ transform: `translateX(${invertX}px)` }, { transform: 'none' }],
    {
      duration: 300,
      easing: 'ease-in-out',
    }
  );
}
