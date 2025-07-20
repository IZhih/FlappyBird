export default class Scenes {
  constructor(sprites, config) {
    this.greeting = new Greeting(sprites, config);
  }
}

class SceneFunctions {
  placeSprite(spriteName, destX, destY, destW, destH) {
    const result = spriteName;
    result.destX = destX;
    result.destY = destY;
    if (typeof destW === 'number') {
      result.destW = destW;
    } else {
      result.destW = result.srcW;
    }
    if (typeof destH === 'number') {
      result.destH = destH;
    } else {
      result.destH = result.srcH;
    }

    return result;
  }

  placeFill(color, destX, destY, destW, destH) {
    const result = [];
    result.color = color;
    result.destX = destX;
    result.destY = destY;
    result.destW = destW;
    result.destH = destH;

    return result;
  }
}

class Greeting extends SceneFunctions {
  constructor(sprites, config) {
    super();
    this.sprites = sprites;
    this.content = [];
    this.content.sky = this.placeFill(config.sprites.sky.color, 0, 0, config.width, config.height);

    this.content.foreground = this.placeSprite(
      sprites.foreground,
      0,
      config.height - sprites.foreground.srcH,
      config.width
    );

    this.content.background = this.placeSprite(
      sprites.background,
      0,
      config.height - sprites.foreground.srcH - sprites.background.srcH,
      config.width
    );

    this.content.bird = [];
    this.content.bird.push(
      this.placeSprite(
        sprites.bird[0],
        config.width / 2 - config.sprites.bird0.srcW / 2,
        config.height / 2 - config.sprites.foreground.srcH - config.sprites.bird0.srcH / 2
      )
    );

    this.content.bird.push(
      this.placeSprite(
        sprites.bird[1],
        config.width / 2 - config.sprites.bird0.srcW / 2,
        config.height / 2 - config.sprites.foreground.srcH - config.sprites.bird0.srcH / 2
      )
    );

    this.content.bird.push(
      this.placeSprite(
        sprites.bird[2],
        config.width / 2 - config.sprites.bird0.srcW / 2,
        config.height / 2 - config.sprites.foreground.srcH - config.sprites.bird0.srcH / 2
      )
    );
  }

  draw(tool) {
    tool.fillRect(this.content.sky);
    tool.drawImage(this.sprites.sheet, this.content.foreground);
    tool.drawImage(this.sprites.sheet, this.content.background);
    tool.drawImage(this.sprites.sheet, this.content.bird[0]);
  }
}
