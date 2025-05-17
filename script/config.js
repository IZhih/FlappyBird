export default class Config {
  static width = 276;
  static height = 490;
  static velocityX = this.width; // начальная скорость полёта птицы в пикселях/сек
  static pipesInterval = (54 * 4) / this.velocityX; // интервал между трубами, привязанный к скорости

  // координаты спрайтов в спрайтшите
  static sprite = {
    background: {
      srcX: 0,
      srcY: 0,
      width: 276,
      height: 228,
    },

    foreground: {
      srcX: 276,
      srcY: 0,
      width: 224,
      height: 112,
    },

    bird: {
      width: 34,
      height: 26,

      sprite0: {
        srcX: 276,
        srcY: 112,
      },

      sprite1: {
        srcX: 276,
        srcY: 138,
      },

      sprite2: {
        srcX: 276,
        srcY: 164,
      },
    },

    medal: {
      width: 44,
      height: 44,
      none: {
        srcX: 312,
        srcY: 112,
      },
      bronze: {
        srcX: 360,
        srcY: 158,
      },
      silver: {
        srcX: 360,
        srcY: 112,
      },
      gold: {
        srcX: 312,
        srcY: 158,
      },
    },

    pipe: {
      width: 52,
      height: 400,

      lower: {
        srcX: 502,
        srcY: 0,
      },

      upper: {
        srcX: 554,
        srcY: 0,
      },
    },

    label: {
      getReady: {
        srcX: 0,
        srcY: 228,
        width: 174,
        height: 44,
      },

      gameOver: {
        srcX: 193,
        srcY: 228,
        width: 188,
        height: 44,
      },
    },

    guide: {
      srcX: 0,
      srcY: 227,
      width: 174,
      height: 116,
    },

    scoreWindow: {
      srcX: 174,
      srcY: 227,
      width: 226,
      height: 116,
    },

    button: {
      start: {
        srcX: 246,
        srcY: 400,
        width: 82,
        height: 28,
      },
    },
  };
}
