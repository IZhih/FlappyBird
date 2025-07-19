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
}

class Greeting extends SceneFunctions {
  constructor(sprites, config) {
    super();
    this.sprites = sprites;
    this.content = [];
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
  }

  draw(tool) {
    tool.drawImage(this.sprites.sheet, this.content.foreground);
    tool.drawImage(this.sprites.sheet, this.content.background);
  }
}
