/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
// import Render from './render';

export default class Cursor {
  constructor() {
    this.area = document.querySelector('#area');
    this.point = 0;
  }

  changeCursor(event) {
    const { target } = event;
    this.area.classList.add('hammer');
    target.classList.remove('box_with_goblin');
    target.addEventListener('mouseup', () => {
      this.area.classList.remove('hammer');
    });
  }
}
