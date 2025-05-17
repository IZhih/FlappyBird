import Config from './config.js';
import Physic from './physic.js';

class Sprite {
  static sheet = new Image();
  constructor(srcX, srcY, srcW, srcH, destX, destY, destW, destH) {
    Sprite.sheet.src = './img/sprite-sheet.png';

    this.srcX = srcX;
    this.srcY = srcY;
    this.srcW = srcW;
    this.srcH = srcH;
    this.destX = destX;
    this.destY = destY;

    // Если не заданы ширина и высота назначения, то взять их как у источника
    if (!destW) {
      this.destW = this.srcW;
    } else {
      this.destW = destW;
    }
    if (!destH) {
      this.destH = this.srcH;
    } else {
      this.destH = destH;
    }
  }

  draw(destX, destY, destW, destH) {
    if (!destX) destX = this.destX;
    if (!destY) destY = this.destY;
    if (!destW) destW = this.destW;
    if (!destH) destH = this.destH;
    Canvas.context.drawImage(Sprite.sheet, this.srcX, this.srcY, this.srcW, this.srcH, destX, destY, destW, destH);
  }
}

class BackgroundSprite extends Sprite {
  constructor(context, spriteSheet, srcX, srcY, srcW, srcH, destX, destY, destW, destH) {
    super(context, spriteSheet, srcX, srcY, srcW, srcH, destX, destY, destW, destH);
    Canvas.context.fillStyle = 'skyblue';
    Canvas.context.fillRect(0, 0, Config.width, Config.height);
    // В этой переменной хранится координата границы между левой и правой половинами фона
    this.boundaryX;
  }

  draw(time, destX, destY, destW, destH) {
    this.boundaryX = Math.floor((time * Config.velocityX * 0.3) % Canvas.node.width);
    Canvas.context.fillStyle = 'skyblue';
    Canvas.context.fillRect(0, 0, Config.width, Config.height);

    // правая половина фона
    destX = Config.width - this.boundaryX;
    super.draw(destX, destY, destW, destH);

    // левая половина фона
    destX = -this.boundaryX;
    super.draw(destX, destY, destW, destH);
  }
}

class ForegroundSprite extends Sprite {
  constructor(srcX, srcY, srcW, srcH, destX, destY, destW, destH) {
    super(srcX, srcY, srcW, srcH, destX, destY, destW, destH);
    this.destW = Config.width;
    // В этой переменной хранится координата границы между левой и правой половинами фона
    this.boundaryX;
  }

  draw(time, destX, destY, destW, destH) {
    this.boundaryX = Math.floor((time * Config.velocityX) % Canvas.node.width);

    // правая половина фона
    destX = Config.width - this.boundaryX;
    super.draw(destX, destY, destW, destH);

    // левая половина фона
    destX = -this.boundaryX;
    super.draw(destX, destY, destW, destH);
  }
}

class BirdSprite extends Sprite {
  static width = Config.sprite.bird.width;
  static height = Config.sprite.bird.height;

  constructor(srcX, srcY, destX, destY, destW, destH) {
    super(srcX, srcY, BirdSprite.width, BirdSprite.height, destX, destY, destW, destH);
    this.x = Config.width / 2 - this.width / 2;
    this.y = 240;
  }

  draw(destX, destY, destW, destH) {
    super.draw(destX, destY, destW, destH);
  }
}

class Bird {
  constructor() {
    this.x = Canvas.node.width / 2 - BirdSprite.width / 2;
    this.y = 240;
    this.velocityY = 0; // вертикальная скорость птицы
    this.tangage = 0.1; // угол наклона птицы. Положительные значения наклоняют птицу вверх
    this.frame = [];
    this.frame.push(
      new BirdSprite(
        Config.sprite.bird.sprite0.srcX,
        Config.sprite.bird.sprite0.srcY,
        BirdSprite.width,
        BirdSprite.height
      )
    );
    this.frame.push(
      new BirdSprite(
        Config.sprite.bird.sprite1.srcX,
        Config.sprite.bird.sprite1.srcY,
        BirdSprite.width,
        BirdSprite.height
      )
    );
    this.frame.push(
      new BirdSprite(
        Config.sprite.bird.sprite2.srcX,
        Config.sprite.bird.sprite2.srcY,
        BirdSprite.width,
        BirdSprite.height
      )
    );
  }

  draw(index) {
    Canvas.context.save();
    // Canvas.context.translate(this.x, this.y);
    Canvas.context.translate(this.x + BirdSprite.width / 2, this.y + BirdSprite.height / 2);
    Canvas.context.rotate(this.tangage);
    this.frame[index].draw(-BirdSprite.width / 2, -BirdSprite.height / 2);
    // Canvas.context.translate(-this.x - BirdSprite.width, -this.y - BirdSprite.height);
    Canvas.context.restore();
  }

  jump() {
    // this.y -= Pipes.gap / 2;
    const jumpHeight = Pipes.gap / 2 - BirdSprite.height;
    const velocity = Math.sqrt(2 * jumpHeight * Physic.g);
    this.velocityY = velocity;
  }

  crash() {
    console.log('Птичка врезалась');
  }
}

class PipeSprite extends Sprite {
  static width = Config.sprite.pipe.width;
  static height = Config.sprite.pipe.height;

  constructor(srcX, srcY, srcW, srcH, destX, destY, destW, destH) {
    super(srcX, srcY, srcW, srcH, destX, destY, destW, destH);
  }

  draw(destX, destY, destW, destH) {
    super.draw(destX, destY, destW, destH);
  }
}

class Pipes {
  static gap = BirdSprite.height * 5;
  constructor(y, time) {
    this.timeStamp = time;
    this.x = Canvas.node.width;
    this.upper = new PipeSprite(
      Config.sprite.pipe.upper.srcX,
      Config.sprite.pipe.upper.srcY,
      PipeSprite.width,
      PipeSprite.height,
      0,
      y - PipeSprite.height
    );

    this.lower = new PipeSprite(
      Config.sprite.pipe.lower.srcX,
      Config.sprite.pipe.lower.srcY,
      PipeSprite.width,
      PipeSprite.height,
      0,
      y + Pipes.gap
    );
  }

  draw() {
    this.upper.draw(this.x);
    this.lower.draw(this.x);
  }
}

export default class Canvas {
  static node;
  static context;
  constructor(nodeId) {
    Canvas.node = document.getElementById(nodeId);
    Canvas.node.width = Config.width;
    Canvas.node.height = Config.height;
    Canvas.context = Canvas.node.getContext('2d');
    this.time = 0; // время полёта птицы
    this.physic = new Physic();

    this.background = new BackgroundSprite(
      Config.sprite.background.srcX,
      Config.sprite.background.srcY,
      Config.sprite.background.width,
      Config.sprite.background.height,
      0,
      Canvas.node.height - 228
    );

    this.foreground = new ForegroundSprite(
      Config.sprite.foreground.srcX,
      Config.sprite.foreground.srcY,
      Config.sprite.foreground.width,
      Config.sprite.foreground.height,
      0,
      Canvas.node.height - 82
    );

    this.bird = new Bird();

    this.pipes = [];
    this.pipesCounter = 0;

    // this.pipes.draw = function (time) {
    //   this.forEach((element) => {
    //     element.x = Canvas.node.width - Math.floor((time - element.timeStamp) * Config.velocityX);
    //     if (element.x >= -PipeSprite.width) {
    //       element.draw();
    //     } else {
    //       this.shift();
    //     }
    //   });
    // };

    this.pipes.draw = function (time) {
      // Удаляем старые трубы заранее (вне forEach)
      while (
        this.length > 0 &&
        Canvas.node.width - Math.floor((time - this[0].timeStamp) * Config.velocityX) < -PipeSprite.width
      ) {
        this.shift();
      }

      // Отрисовываем оставшиеся трубы
      this.forEach((pipe) => {
        pipe.x = Canvas.node.width - Math.floor((time - pipe.timeStamp) * Config.velocityX);
        pipe.draw();
      });
    };

    this.pipes.draw(this.time);

    // Запускаем отрисовку только после полной загрузки спрайтшита
    Sprite.sheet.onload = this.render(this.background);
  }

  newPipes() {
    const minY = 50;
    const maxY = 250;
    const y = Math.floor(Math.random() * (maxY - minY) + minY);
    // const y = 408 - Pipes.gap/2;
    this.pipes.push(new Pipes(y, this.time));
  }

  update() {
    // С интервалом Config.pipesInterval появляются новые трубы
    if (this.time > this.pipesCounter * Config.pipesInterval) {
      this.newPipes();
      this.pipesCounter++;
    }

    [this.bird.y, this.bird.velocityY] = Physic.gravity(this.bird.y, this.bird.velocityY);
    this.bird.tangage = -Math.atan(this.bird.velocityY / Config.velocityX);

    if (this.bird.y <= 0) {
      this.bird.y = 1;
      this.bird.velocityY = 0;
    }

    if (this.bird.y > Canvas.node.height - 112) {
      this.bird.jump();
    }
  }

  draw() {
    this.background.draw(this.time);
    this.pipes.draw(this.time);
    if (this.bird.tangage < -Math.PI / 4) {
      this.bird.draw(2);
    } else if (this.bird.tangage >= Math.PI / 4) {
      this.bird.draw(0);
    } else {
      this.bird.draw(1);
    }
    // this.bird[this.birdFrame].draw(this.bird.x, this.bird.y - this.birdFrame);
    this.foreground.draw(this.time);
  }

  render() {
    this.time += 1 / 60; // время игры
    // this.time += 0.01;
    this.update();
    this.draw();
    window.requestAnimationFrame(this.render.bind(this));
  }
}
