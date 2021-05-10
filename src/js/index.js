
import marckupMake from '../templates/markup.hbs';
import content from '../menu.json';

const menu = document.querySelector(".js-menu");
menu.insertAdjacentHTML('afterbegin', marckupMake(content));

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');


if(localStorage.getItem('theme') === Theme.DARK) {
    body.classList.add(Theme.DARK);
    themeSwitchToggle.checked = true;
}
else {
    body.classList.add(Theme.LIGHT);
    themeSwitchToggle.checked = false;
};

themeSwitchToggle.addEventListener('input', checkedToggel);
console.log(themeSwitchToggle);
function checkedToggel (event) {
    if (event.target.checked) {
        localStorage.setItem('theme', Theme.DARK);
        body.classList.remove(...body.classList);
        body.classList.add(localStorage.getItem('theme'))

    }
    else {
        localStorage.setItem('theme', Theme.LIGHT);
        body.classList.remove(...body.classList);
        body.classList.add(localStorage.getItem('theme'))  
    }
}