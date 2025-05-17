export default class Physic {
  static g = 2000; // ускорение свободного падения в px/s
  // функция вычисляет новую координату и значение вертикальной скорости под действием силы тяжести
  static gravity(posY, velocityY) {
    const dt = 1 / 60; // единица времени, за которую происходит изменение скорости
    posY -= velocityY * dt + Math.sqrt(this.g * dt * dt); // Новое значение координаты
    velocityY -= this.g * dt; // новое значение скорости
    return [posY, velocityY];
  }
}
 