export default class Sprites {
  constructor(config) {
    this.sheet = this.loadSpriteSheet(config.sprite.src);
    this.foreground = this.loadSprite(config.sprite.foreground);
    this.background = this.loadSprite(config.sprite.background);
    this.bird = [];
    this.bird.push(this.loadSprite(config.sprite.bird0));
    this.bird.push(this.loadSprite(config.sprite.bird1));
    this.bird.push(this.loadSprite(config.sprite.bird2));
    this.pipeLower = this.loadSprite(config.sprite.pipe.lower);
    this.pipeHigher = this.loadSprite(config.sprite.pipe.higher);
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
