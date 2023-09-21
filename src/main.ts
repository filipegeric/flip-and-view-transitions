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
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam ratione,
      odit saepe velit explicabo deleniti laboriosam aspernatur. Aliquam sit
      asperiores dolore corporis, debitis recusandae alias quis id officiis cum
      adipisci! Sed, quibusdam rerum. Voluptatem, placeat neque unde incidunt
      ducimus numquam deleniti recusandae ipsa? Reiciendis sunt sint velit
      laudantium? Deleniti est numquam facere repellat porro natus, velit
      molestiae dolor neque laboriosam. Vero, facilis dolore. Asperiores
      eligendi, earum velit aut magnam nesciunt quaerat eos rem, minus magni
      delectus sint, tempora iste illo quisquam nam. Dolore quaerat aut
      dignissimos numquam delectus omnis deleniti? Eligendi totam expedita
      numquam perspiciatis a exercitationem aperiam fugit optio temporibus,
      delectus adipisci culpa, sit quaerat? Corrupti quam amet fuga quas nulla,
      nesciunt soluta. Maiores consequuntur odio placeat doloribus quo.
      Molestiae, rem corporis. Praesentium suscipit quisquam quae ipsam
      doloribus delectus non nesciunt nihil laboriosam in cum iure, optio
      reiciendis commodi fuga itaque repellendus obcaecati dolorem veniam nulla.
      Alias, quis dolorum. Amet neque nam, voluptatem accusamus animi tempora
      nostrum nemo sint incidunt molestias eos architecto modi non quibusdam
      provident omnis iste eveniet aliquid, dolor ipsa sunt! Labore excepturi
      eveniet maiores pariatur. Ab nostrum libero earum odio adipisci
      dignissimos eius ut est aliquid ducimus magnam reprehenderit, iste iusto,
      quasi eum? Officia doloremque, quo consectetur eius totam libero deserunt
      saepe pariatur reiciendis nemo? Quasi enim accusantium, repellendus
      praesentium dolore, obcaecati, facilis doloremque quisquam nisi voluptatem
      impedit maiores? Exercitationem, rem voluptas veritatis nostrum odio
      delectus nobis, architecto nam quidem distinctio minima! Sequi, itaque
      voluptates! Ipsum dolorem animi earum aliquam nostrum blanditiis dolore
      assumenda eligendi suscipit distinctio unde sapiente, adipisci, amet
      architecto! Id corrupti ipsa cum iste dolor voluptatibus, minus odio
      debitis at neque consectetur! Cupiditate molestias at earum reiciendis
      omnis enim fuga voluptatum debitis libero facilis incidunt, dolorem
      deserunt, nesciunt ratione. Vitae fuga, in cupiditate necessitatibus optio
      eum sit perferendis expedita explicabo consequatur nisi.
    </p>
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
