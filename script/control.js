export default class Control {
  constructor(callback) {
    window.addEventListener('gamepadconnected', function (event) {
      const rAF = window.requestAnimationFrame(this.gamepadListener);
      // Делаем, что-то на подключение
      console.log('Подключен геймпад ' + event.gamepad.id);
    });

    window.addEventListener('gamepaddisconnected', function (event) {
      // Делаем, что-то на отключение
    });

    window.addEventListener('keydown', (key) => {
      if (key.code == 'Space') {
        return callback('jump');
      }
    });

    window.addEventListener('click', () => {
      return callback('jump');
    } )
  }

  gamepadListener() {}
}
