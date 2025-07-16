export default class Scene {
  constructor(sprites, config) {
		this.greeting = [];
    this.greeting.push(this.placeSprite(sprites.foreground, 0, config.height - sprites.foreground.srcH, config.width));
    this.greeting.push(this.placeSprite(sprites.background, 0, 0, config.width));
  }

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
