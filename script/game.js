import Canvas from './canvas.js';
import Controls from './control.js';

export default class Game {
  constructor(node) {
    this.canvas = new Canvas(node);
    this.controls = new Controls(this.control.bind(this));
  }

  control(action) {
    if (action == 'jump') {
			this.canvas.bird.jump();
    }
  }
}
 