import Config from './config.js';
import Canvas from './canvas.js';
import Sprites from './sprites.js';
import Scenes from './scenes.js';

class Game {
  constructor(aNodeId) {
    this.config = new Config();
    this.canvas = new Canvas(aNodeId, this.config.width, this.config.height);
    this.sprites = new Sprites(this.config);
    this.scenes = new Scenes(this.sprites, this.config);

    this.sprites.sheet.onload = () => {
      this.render(this.scenes.greeting[0]);
    };
  }

  render(scene) {
    this.canvas.drawImage(this.sprites.sheet, scene);

    window.requestAnimationFrame(this.render.bind(this, scene));
  }
}

const game = new Game('field');
