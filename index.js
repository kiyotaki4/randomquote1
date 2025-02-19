const jellyquote = document.getElementById("jellyquote");
const jellybutton = document.getElementById("jellybutton");

// Асинхронная функция для получения случайной цитаты
async function getQuote() {
    try {
        const response = await fetch("https://api.adviceslip.com/advice"); // Пробуем получить данные
        if (!response.ok) throw new Error("Ошибка загрузки");

        const data = await response.json();
        console.log(data); // Посмотреть, что возвращает API

        jellyquote.style.opacity = "0";
        setTimeout(() => {
            jellyquote.textContent = data.slip.advice; // Тут исправлено
            jellyquote.style.opacity = "1";
        }, 500);
    } catch (error) {
        jellyquote.textContent = "Не удалось загрузить цитату 😔";
    }
}

// Добавляем слушатель на кнопку
jellybutton.addEventListener("click", getQuote);
