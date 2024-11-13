function changeBackgroundColor() {
  //генерируем случайный цвет в формате RGB
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

  //меняем цвет фона страницы
  document.body.style.backgroundColor = randomColor;
}
