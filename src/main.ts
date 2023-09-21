import { moveWithFlip } from './moveWithFlip';
import { moveWithViewTransition } from './moveWithViewTransition';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <label id="toggle-label" onclick="e => e.stopPropagation()">
      Use View Transitions API
      <input type="checkbox" />
    </label>
    <div class="box"></div>
  </div>
`;

document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (
    target.id === 'toggle-label' ||
    target.parentElement!.id === 'toggle-label'
  ) {
    e.stopPropagation();
    return;
  }
  moveBox();
});

function moveBox() {
  const box = document.querySelector('.box') as HTMLDivElement;
  const useViewTransitionsApi = (
    document.querySelector('input')! as HTMLInputElement
  ).checked;

  if (useViewTransitionsApi) {
    moveWithViewTransition(box, () => toggleClasses(box));
  } else {
    moveWithFlip(box, () => toggleClasses(box));
  }
}

function toggleClasses(box: HTMLDivElement) {
  box.classList.toggle('float-right');
  box.classList.toggle('push-down');
  box.classList.toggle('large');
}
