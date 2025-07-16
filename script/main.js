import Config from './config.js';
import Canvas from './canvas.js';

class Game {
  constructor(aNodeId) {
    this.config = new Config();
    this.canvas = new Canvas(aNodeId, this.config.width, this.config.height);
    this.spriteSheet = this.loadSpriteSheet(this.config.sprite.src);

    // для отладки функции drawImage()
    const sprite = this.config.sprite.foreground;
    sprite.destX = 0;
    sprite.destY = this.config.height - sprite.height;
    sprite.destW = this.config.width;
    sprite.destH = sprite.height;
    sprite.srcW = sprite.width;
    sprite.srcH = sprite.height;

    this.screen = [];
    this.screen.push(sprite);
    this.spriteSheet.onload = () => {
      this.render(this.screen[0]);
    };
  }

  loadSpriteSheet(src) {
    const result = new Image();
    result.src = src;

    return result;
  }

  render(scene) {
    this.canvas.drawImage(this.spriteSheet, scene);

    window.requestAnimationFrame(this.render.bind(this, scene));
  }
}

const game = new Game('field');
