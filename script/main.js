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
      this.render(this.scenes.greeting);
    };
  }

  render(scene) {
    this.drawScene(scene);
    window.requestAnimationFrame(this.render.bind(this, scene));
  }

  drawScene(scene) {
    scene.draw(this.canvas);
  }
}

const game = new Game('field');
