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

let themeBtn = themeButton.addEventListener('click', (e) => {
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

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const scrollButton = document.getElementById('scrollToTop');

scrollButton.addEventListener('click', (e) => {
    scrollToTop();
});

function getMoreContent() {
    fetch('content.json')
    .then((content) => content.json())
    .then(contentResult => {
        console.log(contentResult)
        const myName = contentResult[0].name
        const age = contentResult[0].age
        const hobbies = contentResult[0].hobbies
        const favFood = contentResult[0].favFood
        const somethingCool = contentResult[0].somethingCool   
        showContent(myName, age, hobbies, favFood, somethingCool)
        // contentResult.forEach((user) => (
        //     moreContent.innerHTML = `<li>${user.name}, ${user.age}, ${user.hobbies}, ${user.favFood}, ${user.somethingCool}</li>`
        // ))
    });

}

function showContent(myName, age, hobbies, favFood, somethingCool) {
        const moreContent = document.getElementById('moreContent')
        moreContent.style.fontFamily = 'Tahoma'
        // moreContent.innerHTML = ' ';
        moreContent.innerHTML = `
        <p>My full name is ${myName} </p>
        <p>I am ${age} years old</p>
        <p>My hobbies include ${hobbies} </p>
        <p>My favourite food is ${favFood} </p>
        <p>Something cool I've done - ${somethingCool} </p>
        `; 
}

