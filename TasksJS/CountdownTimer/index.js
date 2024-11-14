let timer; // переменная для хранения интервала таймера
let timeRemaining = 60; // время для отсчета (в секундах)

function startTimer() {
  clearInterval(timer); // очищаем любой существующий таймер
  timeRemaining = 60; // сброс время

  timer = setInterval(() => {
    if (timeRemaining <= 0) {
      clearInterval(timer);
      document.getElementById("time").textContent = "Время вышло";
    } else {
      const minutes = Math.floor(timeRemaining / 60);
      const seconds = timeRemaining % 60;
      document.getElementById("time").textContent = `${String(minutes).padStart(
        2,
        "0"
      )}:${String(seconds).padStart(2, "0")}`;
      timeRemaining--;
    }
  }, 1000);
}
