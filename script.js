async function changeLanguage(lang) {
    try {
        const response = await fetch('./translations.json');
        if (!response.ok) throw new Error('Не удалось загрузить переводы');
        const translations = await response.json();
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    } catch (error) {
        console.error('Ошибка при загрузке переводов:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('ru');
});