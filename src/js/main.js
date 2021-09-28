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
    this.missedMove = Number(document.querySelector('.missed-move').textContent);
    this.point = Number(document.querySelector('.point').textContent);
    this.area = document.querySelector('#area');
    this.timer = 0;
  }

  init() {
    // document.addEventListener('DOMContentLoaded', () => {
    this.timer = setInterval(() => {
      render.renderer();
      this.missedMove += 1;
      document.querySelector('.missed-move').textContent = this.missedMove;
      console.log(this.missedMove);
      this.gameOver();
    }, 1000);
    // });
    this.area.addEventListener('mousedown', (event) => {
      const { target } = event;
      if (target.classList.contains('box_with_goblin')) {
        cursor.changeCursor(event);
        this.missedMove -= 1;
        this.point += 1;
        document.querySelector('.point').textContent = this.point;
      }
    });
    document.querySelector('.new-game').addEventListener('click', () => {
      this.newGame();
    });
  }

  gameOver() {
    if (this.missedMove === 5) {
      alert('Игра окончена!');
      clearInterval(this.timer);
    }
  }

  newGame() {
    clearInterval(this.timer);
    document.querySelector('.missed-move').textContent = 0;
    document.querySelector('.point').textContent = 0;
    this.missedMove = 0;
    this.point = 0;
    this.init();
  }
}

const game = new Game();
game.init();
