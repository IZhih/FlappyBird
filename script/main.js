import Config from './config.js';
import Canvas from './canvas.js';

class Game {
  constructor(aNodeId) {
    this.config = new Config();
    this.canvas = new Canvas(aNodeId, this.config.width, this.config.height);
    this.spriteSheet = this.loadSpriteSheet(this.config.sprite.src);
    this.spriteSheet.onload = () => {
      this.render();
    };
  }

  loadSpriteSheet(src) {
    const result = new Image();
    result.src = src;

    return result;
  }

  render(scene) {
    console.log('Запущена функция render()');
    console.log(this);
    const sprite = this.config.sprite.foreground;
    sprite.destX = 0;
    sprite.destY = this.config.height - sprite.height;
    sprite.destW = this.config.width;
    sprite.destH = sprite.height;
    sprite.srcW = sprite.width;
    sprite.srcH = sprite.height;
    this.canvas.drawImage(this.spriteSheet, sprite);

    // window.requestAnimationFrame(this.render.bind(this, scene));
  }
}

const game = new Game('field');
