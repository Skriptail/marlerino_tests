// Получаем элементы
const spinner = document.getElementById('spinner');
const button = document.querySelector('.wheel__button');
const popup = document.querySelector('.popup');

// Устанавливаем начальную позицию и переменные
let currentRotation = 0;
let isSpinning = false; // Флаг для контроля вращения

// Функция для вращения колеса
const spinWheel = () => {
    if (isSpinning) return; // Проверяем флаг, если вращение уже идет, ничего не делаем

    isSpinning = true; // Устанавливаем флаг в true, чтобы запретить повторное вращение

    // Удаляем анимацию (если она есть)
    spinner.classList.remove('wheel__spinner_animated');

    // Небольшая задержка для применения изменений в DOM
    setTimeout(() => {
        // Генерируем случайное количество оборотов (от 3600 до 3960 градусов)
        const additionalRotation = Math.floor(1 * 360) + 3600;
        const finalRotation = currentRotation + additionalRotation;

        // Применяем вращение с помощью CSS
        spinner.style.transition = "transform 4s ease-out";
        spinner.style.transform = `rotate(${finalRotation}deg)`;

        // Сохраняем текущую позицию
        currentRotation = finalRotation;

        // Определяем результат после завершения вращения
        setTimeout(() => {
            showResult(finalRotation % 360); // Передаём конечный угол вращения
        }, 4000); // Длительность должна совпадать с transition
    }, 50); // Небольшая задержка для корректного удаления класса
};

// Функция для определения результата
const showResult = (angle) => {
    let result = "2500 TRY + 250 FS";

    // Показываем результат в попапе
    popup.querySelector('.sum').textContent = result;
    popup.classList.add('popup__show');
};


// Обработчик события кнопки
button.addEventListener('click', () => {
    spinWheel();
});
