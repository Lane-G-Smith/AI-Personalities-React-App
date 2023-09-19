// DARK MODE

// attach event listener to theme toggle button / icon
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {themeSwitch()
});

// use the prefered user theme if set
const userTheme = localStorage.getItem('theme');

// use the system theme if a default is set
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

// function to check for current theme settings
const themeCheck = () => {
    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
        document.documentElement.classList.add('dark');
        themeToggle.classList.add('display-none');
        return;
    }
    themeToggle.classList.add('display-none');
}

// manual theme toggle switch
const themeSwitch = () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        return
    }
    else
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    themeToggle();
};

