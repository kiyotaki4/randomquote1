const jellyquote = document.getElementById("jellyquote");
const jellybutton = document.getElementById("jellybutton");

// Асинхронная функция для получения случайной цитаты
async function getQuote() {
    try {
        // Отправляем запрос к API
        const response = await fetch("https://api.quotable.io/random");
        
        // Проверяем, успешно ли получен ответ
        if (!response.ok) {
            throw new Error("Ошибка загрузки цитаты");
        }
        
        const data = await response.json();

        // Плавно скрываем текст перед заменой
        jellyquote.style.opacity = "0";

        setTimeout(() => {
            jellyquote.textContent = data.content; // Меняем текст
            jellyquote.style.opacity = "1"; // Показываем новый текст
        }, 500);
    } catch (error) {
        console.error("Ошибка:", error);
        jellyquote.textContent = "Не удалось загрузить цитату :("; // Если API недоступен
        jellyquote.style.opacity = "1";
    }
}

// Добавляем слушатель на кнопку
jellybutton.addEventListener("click", getQuote);
