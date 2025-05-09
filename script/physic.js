export default class Physic {
  // функция вычиляет новую координату и значение вертикальной скорости под действием силы тяжести
  static gravity(posY, velocityY) {
    const g = 1500; // ускорение свободного падения
    const dt = 1 / 60; // единица времени, за которую происходит изменение скорости
		posY -= velocityY * dt + Math.sqrt(g * dt * dt); // Новое значение координаты
    velocityY -= g * dt; // новое значение скорости
    return [posY, velocityY];
  }
}
