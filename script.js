const themeButton = document.querySelector('#theme-toggle');
const html = document.documentElement;

themeButton.addEventListener('click', () => {
    const currentTheme = html.dataset.theme;

    if (currentTheme === 'dark') {
        html.dataset.theme = 'light';
        themeButton.textContent = '☾';
    } else {
        html.dataset.theme = 'dark';
        themeButton.textContent = '☀';
    }
});