/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable class-methods-use-this */

import Render from './render';
import Cursor from './cursor';

const render = new Render();
const cursor = new Cursor();

class Game {
  constructor() {
    this.missedMove = 0;
    this.point = 0;
    this.area = document.querySelector('#area');
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      setInterval(() => {
        render.renderer();
        this.missedMove += 1;
        console.log(this.missedMove);
        this.gameOver();
      }, 1000);
    });
    this.area.addEventListener('mousedown', (event) => {
      const { target } = event;
      if (target.classList.contains('box_with_goblin')) {
        cursor.changeCursor(event);
        this.missedMove -= 1;
        this.point += 1;
      }
    });
  }

  gameOver() {
    if (this.missedMove === 5) {
      alert('Игра окончена!');
    }
  }
}

const game = new Game();
game.init();
