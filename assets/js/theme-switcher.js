document.addEventListener('DOMContentLoaded', function () {
    const themeToggleButton = document.getElementById('theme-toggle-button');
    const htmlElement = document.documentElement; // Or document.body
    const sunIconClass = 'fas fa-sun'; // Icon for dark mode (meaning button will switch to light)
    const moonIconClass = 'fas fa-moon'; // Icon for light mode (meaning button will switch to dark)

    // Function to apply theme and update button
    function applyTheme(theme) {
        if (theme === 'light') {
            htmlElement.classList.add('light-mode');
            if (themeToggleButton) {
                themeToggleButton.innerHTML = `<i class="${moonIconClass}"></i>`;
            }
            localStorage.setItem('theme', 'light');
        } else {
            htmlElement.classList.remove('light-mode');
            if (themeToggleButton) {
                themeToggleButton.innerHTML = `<i class="${sunIconClass}"></i>`;
            }
            localStorage.setItem('theme', 'dark');
        }
    }

    // Initial theme setup
    let currentTheme = localStorage.getItem('theme');
    if (!currentTheme) {
        // No theme in localStorage, check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            currentTheme = 'light';
        } else {
            currentTheme = 'dark'; // Default to dark
        }
    }
    applyTheme(currentTheme);


    // Event listener for the toggle button
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', function () {
            if (htmlElement.classList.contains('light-mode')) {
                applyTheme('dark');
            } else {
                applyTheme('light');
            }
        });
    }
});
