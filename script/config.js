export default class Config {
  static width = 276;
  static height = 490;
  static velocityX = this.width; // начальная скорость полёта птицы в пикселях/сек
  static pipesInterval = (54 * 4) / this.velocityX; // интервал между трубами, привязанный к корости

  static sprite = {
    background: {
      width: this.width,
      height: this.height,
    },

    foreground: {
      width: this.width,
      hieght: 112,
    },

    bird: {
      width: 34,
      height: 26,
    },

    pipe: {
      width: 40,
      gap: 50,
    },
  };
}
