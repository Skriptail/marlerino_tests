const baseURL = "https://mytrackertest.com/x35hRP";

const queryParams = [
    `se_referrer=${encodeURIComponent(document.referrer)}`, // Откуда пришел пользователь
    `default_keyword=${encodeURIComponent(document.title)}`, // Заголовок текущей страницы
    window.location.search.substring(1) // Параметры из URL
].join('&');

// Обработчик клика на ракету
const rocket = document.querySelector('.rocket'); // Найти элемент "ракета"
rocket.addEventListener('click', () => {
    // Добавляем класс анимации полёта
    rocket.classList.add('rocket__fly');

    // Устанавливаем таймер для перенаправления
    setTimeout(() => {
        // Формируем URL с параметрами
        const offerURL = `${baseURL}?${queryParams}`;
        // Перенаправляем пользователя на оффер
        window.location.href = offerURL;
    }, 2000); // Задержка 2 секунды (время, соответствующее анимации)
});
