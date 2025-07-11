import Config from './config.js';
import Canvas from './canvas.js';

class Game {
  constructor(aNodeId) {
    this.config = new Config();
    this.canvas = new Canvas(aNodeId, this.config.width, this.config.height);
    this.spriteSheet = this.loadSpriteSheet(this.config.sprite.src);
    this.spriteSheet.onload = () => {
      this.render(this);
    };
  }

  loadSpriteSheet(src) {
    const result = new Image();
    result.src = src;

    return result;
  }

  render() {
    console.log('Запущена функция render()');
    console.log(this);
    const sprite = this.config.sprite.foreground;
    sprite.destX = 100;
    sprite.destY = 100;
    this.canvas.drawImage(this.spriteSheet, sprite);

    // window.requestAnimationFrame(this.render.bind(this));
  }
}

const game = new Game('field');
