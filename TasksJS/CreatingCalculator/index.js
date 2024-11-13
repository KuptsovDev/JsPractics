function calculateSum() {
  // получаем значение из полей ввода
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  //проверяем, является ли введеное значение числом
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").textContent =
      "Пожалуйста, введите валидные числа.";
    return;
  }

  //вычисляем сумму
  const sum = num1 + num2;

  //отображаем результат
  document.getElementById("result").textContent = "Сумма: " + sum;
}
