import './style.css';
import './box-styles.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="box"></div>
  </div>
`;

document.addEventListener('click', () => {
  const box = document.querySelector('.box') as HTMLDivElement;

  box.classList.toggle('right');
});
