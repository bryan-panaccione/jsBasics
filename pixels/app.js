


const pixelBox = document.querySelector('.pixelContainer');
const controlsBox = document.querySelector('.controlsContainer')
const fancy = document.querySelector('.c137')


let drawColor = 'white'



var colorWheel;
//var defaultColor = "#0000ff";
window.addEventListener("load", setWheel);

function setWheel() {
    console.log('hello')
    colorWheel = document.querySelector('#colorWheel');
    colorWheel.value = drawColor;
    colorWheel.addEventListener('input', (event) => drawColor = event.target.value)
    colorWheel.addEventListener('input', updateCurrentDisplay)
    colorWheel.select();
}



//detect if mouse is up or down
let isDrawing = false;
document.body.addEventListener('mousedown', () => isDrawing = true)
document.body.addEventListener('mouseup', () => isDrawing = false)
controlsBox.addEventListener('click', deleteHighlight)



function pallette() {
    let color0 = document.createElement('div');
    color0.classList.add('red')
    color0.classList.add('pallette')
    color0.style.background = 'red';
    let color1 = document.createElement('div');
    color1.classList.add('orange')
    color1.classList.add('pallette')
    color1.style.background = 'orange';
    let color2 = document.createElement('div');
    color2.classList.add('yellow')
    color2.classList.add('pallette')
    color2.style.background = 'yellow';
    let color3 = document.createElement('div');
    color3.classList.add('green')
    color3.style.background = 'green';
    color3.classList.add('pallette')
    let color4 = document.createElement('div');
    color4.classList.add('blue')
    color4.style.background = 'blue';
    color4.classList.add('pallette')
    let color5 = document.createElement('div');
    color5.classList.add('black')
    color5.classList.add('pallette')
    color5.style.background = 'black';
    let color6 = document.createElement('div');
    color6.classList.add('white')
    color6.classList.add('pallette')
    color6.style.background = '#FFFFFF';
    let current = document.createElement('div');
    current.classList.add('pallette2')
    current.style.background = drawColor;
    controlsBox.appendChild(color0)
    controlsBox.appendChild(color1)
    controlsBox.appendChild(color2)
    controlsBox.appendChild(color3)
    controlsBox.appendChild(color4)
    controlsBox.appendChild(color5)
    controlsBox.appendChild(color6)
    fancy.appendChild(current)

}

function makePixel() {
    let pixel = document.createElement('div')
    pixel.classList.add('pixel')
    pixelBox.appendChild(pixel)
}

function allPixelsSelect() {
    let allPixel = document.querySelectorAll('.pixel')
    allPixel.forEach(pix => {
        pix.addEventListener('mouseenter', () => changeColorPixel(pix, drawColor));
    })
}

function deleteHighlight() {
    let colorOptions = controlsBox.childNodes;
    for (var el of colorOptions) {
        if (el.classList.contains('palSelect'))
            el.classList.remove('palSelect')
    }
}

function getColor() {
    let colorChoices = controlsBox.childNodes;
    colorChoices.forEach(colorSelect => {
        colorSelect.addEventListener('click', () => {
            drawColor = colorSelect.style.background;
            updateCurrentDisplay()
            colorSelect.classList.add('palSelect');
        }
        )
    });
}


function changeColorPixel(pix, drawColor) {
    if (isDrawing === true) {
        pix.style.background = drawColor
    }
}

function updateCurrentDisplay() {
    let display = document.querySelector('.pallette2')
    display.style.background = drawColor
}
//let allPixel = document.querySelectorAll('.pixel')
//allPixel.forEach(pix => {
//  pix.addEventListener('click', () => console.log(`Clicked a pixel`))
//})


function flood() {
    let allPixel = document.querySelectorAll('.pixel')
    for (var i = 0; i < allPixel.length; i++) {
        allPixel[i].style.background = drawColor
    }
}

//let saveButton = document.querySelector('.save')
//saveButton.addEventListener('click', saveLocal)

//let previousButton = document.querySelector('.previous')
//previousButton.addEventListener('click', getPreviousList)

//function saveLocal() {
//dont clear, use removeItem for list key specifically in case localstorage is used somewhere else
//  localStorage.removeItem('savedArt')
//var saveArtWork = document.querySelector('.pixelContainer')
//localStorage.setItem('savedArt', saveArtWork.outerHTML)

//}
//pull previous list from local storage and append it to the identified saveSection, probably the ul, but it can go wherever
//function getPreviousList() {
//pull the list item from local storage
//  removeOldBoard(document.querySelector('.pixelContainer'))
//var testedStore = localStorage.getItem('savedArt')
//create a new div 
//var divTag = document.createElement('div')
//innerHTML is tested score, the item coming from storage
//divTag.innerHTML = testedStore
//document.querySelector(".pixelContainer").appendChild(divTag)
//}

//function removeOldBoard(parent) {
//  while (parent.firstChild) {
//    parent.removeChild(parent.firstChild);
// }
//}


for (var i = 0; i < 4500; i++) {
    makePixel()
}

pallette();
allPixelsSelect();
getColor();
//flood();
let filler = document.querySelector('.pallette2')
filler.addEventListener('click', flood)

