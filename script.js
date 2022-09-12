let navbarElement = document.getElementById('navbar');
// let currentColourIndex = 0;
// let buttons = document.getElementsByClassName('buttons');

const themeButton = document.getElementById('changeThemeButton');
const bodyStyle = document.getElementById('body');
function changeColour() {
    if (bodyStyle.style.background === 'white') {
        bodyStyle.style.background = 'gray';
    } else {
        bodyStyle.style.background = 'white';
    }
}

let themeBtn = themeButton.addEventListener('click', (event) => {
    console.log(`button has been clicked`);
    changeColour();
    changeBodyTextColour();
})

function changeBodyTextColour() {
    if (bodyStyle.style.color === 'black') {
        bodyStyle.style.color = 'blanchedalmond';
    } else {
        bodyStyle.style.color = 'black';
    }
}

function changeThemeText() {
    if (document.getElementById('theme-txt').innerText === 'Light Theme') {
        document.getElementById('theme-txt').innerText = 'Light Theme';
    } else {
        document.getElementById('theme-txt').innerText = 'Dark Theme';
    }
}

