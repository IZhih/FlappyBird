export default class Canvas {
  constructor(aNodeId, width, height) {
    this.node = this.createCanvas(aNodeId, width, height);
    this.context = this.getContext(this.node);
  }

  createCanvas(aNodeId, width, height) {
    const result = document.getElementById(aNodeId);
    result.width = width;
    result.height = height;

    return result;
  }

  getContext(aNode) {
    const result = aNode.getContext('2d');
    return result;
  }

  drawImage(img, coords) {
    this.context.drawImage(
      img,
      coords.srcX,
      coords.srcY,
      coords.srcW,
      coords.srcH,
      coords.destX,
      coords.destY,
      coords.destW,
      coords.destH
    );
  }
}
