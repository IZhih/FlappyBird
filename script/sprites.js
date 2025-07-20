export default class Sprites {
  constructor(config) {
    this.sheet = this.loadSpriteSheet(config.sprites.src);
    this.foreground = this.loadSprite(config.sprites.foreground);
    this.background = this.loadSprite(config.sprites.background);
    this.bird = [];
    this.bird.push(this.loadSprite(config.sprites.bird0));
    this.bird.push(this.loadSprite(config.sprites.bird1));
    this.bird.push(this.loadSprite(config.sprites.bird2));
    this.pipeLower = this.loadSprite(config.sprites.pipe.lower);
    this.pipeHigher = this.loadSprite(config.sprites.pipe.higher);
  }

  loadSpriteSheet(src) {
    const result = new Image();
    result.src = src;

    return result;
  }

  loadSprite(sprite) {
    let result = sprite;

    return result;
  }
}
