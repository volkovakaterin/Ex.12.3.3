/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */

/* eslint-disable no-alert */

export default class Render {
  constructor() {
    this.boxes = document.querySelectorAll('.box');
  }

  renderer() {
    this.boxes.forEach((el) => {
      if (el.classList.contains('box_with_goblin')) {
        el.classList.remove('box_with_goblin');
      }
    });
    const index = Math.floor(Math.random() * 16);
    this.boxes[index].classList.add('box_with_goblin');
  }
}
