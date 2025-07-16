export default class Config {
  constructor() {
    this.width = 276;
    this.height = 490;
    this.velocityX = this.width; // начальная скорость полёта птицы в пикселях/сек
    this.pipesInterval = (54 * 4) / this.velocityX; // интервал между трубами, привязанный к скорости

    // координаты спрайтов в спрайтшите
    this.sprite = {
      src: './img/sprite-sheet.png',
      sky: {
        color: 'skyblue',
      },

      background: {
        srcX: 0,
        srcY: 0,
        srcW: 276,
        srcH: 228,
      },

      foreground: {
        srcX: 276,
        srcY: 0,
        srcW: 224,
        srcH: 112,
      },

      bird0: {
        srcW: 34,
        srcH: 26,
        srcX: 276,
        srcY: 112,
      },

      bird1: {
        srcW: 34,
        srcH: 26,
        srcX: 276,
        srcY: 138,
      },

      bird2: {
        srcW: 34,
        srcH: 26,
        srcX: 276,
        srcY: 164,
      },

      medal: {
        srcW: 44,
        srcH: 44,
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
        srcW: 52,
        srcH: 400,

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
          srcW: 174,
          srcH: 44,
        },

        gameOver: {
          srcX: 193,
          srcY: 228,
          srcW: 188,
          srcH: 44,
        },
      },

      guide: {
        srcX: 0,
        srcY: 227,
        srcW: 174,
        srcH: 116,
      },

      scoreWindow: {
        srcX: 174,
        srcY: 227,
        srcW: 226,
        srcH: 116,
      },

      button: {
        start: {
          srcX: 246,
          srcY: 400,
          srcW: 82,
          srcH: 28,
        },
      },
    };
  }
}
