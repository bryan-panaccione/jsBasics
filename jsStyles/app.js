// Write your code in this file
//selectors
const navContainer = document.querySelector('.mainnav');
const navDiv = document.querySelector('h1');
const bodySquares = document.querySelectorAll('.square');
const footContainer = document.querySelector('.footer');
const footDiv = document.querySelector('h3')


function styleFooter() {
    footContainer.style.bottom = '-3rem'
    footDiv.style.background = '#d1d1d1';
    footDiv.style.width = '100%';
    footDiv.style.bottom = '0';
    footDiv.style.position = 'relative';
    footDiv.style.padding = '2rem';
    footDiv.style.justifyContent = 'center'
    footDiv.style.display = 'flex'
}

//style nav
function styleNav() {
    navContainer.style.top = '-2rem'
    navContainer.style.position = 'fixed';
    navContainer.style.width = '100%';
    navDiv.style.background = 'gray';
    navDiv.style.color = 'white';
    navDiv.style.width = '100%';
    navDiv.style.top = '0';
    navDiv.style.position = 'absolute';
    navDiv.style.padding = '2rem';
    navDiv.style.justifyContent = 'center';
    navDiv.style.display = 'flex';
}

function styleSquares() {
    bodySquares[0].style.background = '#c6e2ff';
    bodySquares[0].style.width = '33.33%';
    bodySquares[0].style.height = '100vh';
    bodySquares[0].style.float = 'left';
    bodySquares[1].style.background = '#abb1cf';
    bodySquares[1].style.width = '33.33%';
    bodySquares[1].style.height = '100vh';
    bodySquares[1].style.float = 'left';
    bodySquares[2].style.background = '#2e87ba';
    bodySquares[2].style.width = '33.33%';
    bodySquares[2].style.height = '100vh';
    bodySquares[2].style.float = 'left';
}

function populate() {
    //bodySquares.style.position = 'relative'
    styleFooter()
    styleNav()
    styleSquares()
}


populate()