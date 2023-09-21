import { moveWithViewTransition } from './moveWithViewTransition';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="box"></div>
  </div>
`;

document.addEventListener('click', moveBox);

function moveBox() {
  const box = document.querySelector('.box') as HTMLDivElement;

  moveWithViewTransition(box, () => toggleClasses(box));
}

function toggleClasses(box: HTMLDivElement) {
  box.classList.toggle('float-right');
  box.classList.toggle('push-down');
  box.classList.toggle('large');
}
