let $studentContainer = $('.studentContainer')
//$studentObject and container is a testing tool, it allows me to call up and look at data easily in the devTools
let $studentObject;


//for calculating average test score
function averageArray(array) {
    let count = 0;
    for (var i = 0; i < array.length; i++) {
        count += parseInt(array[i])
    } return count / array.length
}

//for creating hidden div that will expand on icon click
function testScoreString(testArray) {
    let expansion = ``
    for (var i = 0; i < testArray.length; i++) {
        expansion = expansion + `<div class="scoreBox"><p>Test ${i + 1}:</p><p>${testArray[i]}</p></div>`
    } return expansion
}

//Initial get request, append a student card for each student in the data returned by the API
function initStudents() {
    $.get(`https://api.hatchways.io/assessment/students`, (data) => {
        $studentObject = data;
        for (var i = 0; i < data['students'].length; i++) {
            let fullName = `${data['students'][i]['firstName']} ${data['students'][i]['lastName']}`;


            $studentContainer.append(`
      <div class="studentCard ${i}">
        <div class="wrapperForExpand">
            <div class="picAndInfo">
                <div class="profileWrapper"><img class="studentPic" src=${data['students'][i]['pic']}></div>
            <div class="infoWrapper">
                <h3 class="studentName">${fullName}</h3>
                <div class="bodyText studentCompany">Email: ${data['students'][i]['email']}</div>
                <div class="bodyText studentCompany">Company: ${data['students'][i]['company']}</div>
                <div class="bodyText studentSkill">Skill: ${data['students'][i]['skill']}</div>
                <div class="bodyText studentScore">Average: ${averageArray(data['students'][i]['grades'])} </div>
            </div>
       </div>
        <div> 
             <button class="expand ${i}"><i class="fa-solid fa-plus"></i></button></div>
        </div>
      <div class="hideMe2">
      ${testScoreString(data['students'][i]['grades'])}
      </div>
      <div class="tagInputContainer">
        <div class="createdTags"></div>
        <form>
            <input class="makeTag" placeholder="add tag" type="text">
            <button class="hiddenSubmit"></button>
        </form>
      </div>
        </div>
    </div>`
            )

        }
        const allExpands = document.querySelectorAll('.expand')

        allExpands.forEach(expandIcon => {
            expandIcon.addEventListener('click', (e) => expandData(e))
        })
        const tagInput = document.querySelectorAll('.hiddenSubmit')

        tagInput.forEach(hiddenButton => {
            hiddenButton.addEventListener('click', (e) => tagOn(e))
        })

    })
}

//expand Information onIcon, Event listeners added to each button in init function

function expandData(e) {
    let selectedCard = e.target.parentNode.parentNode.parentNode.parentNode;
    let iconAlter = e.target.parentNode.parentNode.parentNode;
    let iconPath = iconAlter.childNodes[3].childNodes[1].childNodes[0]
    console.log(iconAlter.childNodes[3].childNodes[1].childNodes)
    selectedCard.childNodes[3].classList.toggle('expandedData')
    if (iconPath.classList[1] === 'fa-plus') {
        iconPath.classList.remove("fa-plus")
        iconPath.classList.add('fa-minus')
    } else {
        iconPath.classList.remove("fa-minus")
        iconPath.classList.add('fa-plus')
    }
}

//ADD A TAG 

function tagOn(e) {
    e.preventDefault();
    let selectedCard = e.target.parentNode.parentNode.parentNode;
    let tagPlacement = selectedCard.childNodes[5].childNodes[1]
    console.log(selectedCard.childNodes[5].childNodes[1])
    let newTagName = e['path'][1][0].value
    let tagDiv = document.createElement('div')
    tagDiv.innerText = newTagName
    tagDiv.classList.add('tagAppearance')
    tagPlacement.appendChild(tagDiv)
    e['path'][1][0].value = ''
}


//FILTER FUNCTIONS
//filter by name
function filters() {
    let input = document.querySelector('#search').value
    let allStudents = document.querySelectorAll('.studentCard')
    for (var i = 0; i < allStudents.length; i++) {
        if (!allStudents[i].childNodes[1].childNodes[1].childNodes[3].childNodes[1].innerText.toUpperCase().includes(input.toUpperCase())) {
            allStudents[i].classList.add('hideMe')
        }
    }
}

//filter by tags
function filtersTags() {
    let input = document.querySelector('#searchTag').value
    let allStudents = document.querySelectorAll('.studentCard')
    for (var i = 0; i < allStudents.length; i++) {
        if (!allStudents[i].childNodes[5].childNodes[1].innerText.toUpperCase().includes(input.toUpperCase())) {
            allStudents[i].classList.add('hideMe')
        }
    }
}

//refresh list by unhiding all
function replacer2() {
    let allStudents = document.querySelectorAll('.hideMe')
    for (var i = 0; i < allStudents.length; i++) {
        allStudents[i].classList.remove('hideMe')
    }

}



//parent filter function, called on key up
function filterParent(e) {
    if (e.key === 'Backspace') {
        replacer2()
    }
    let inputName = document.querySelector('#search').value
    let inputTag = document.querySelector('#searchTag').value
    if (inputName) filters();
    if (inputTag) filtersTags();
}

//clear button input and refresh list
$('.clear').click((e) => {
    e['currentTarget']['previousSibling'].value = ''
})
const clearSearch = document.querySelectorAll('.clear')
clearSearch.forEach(wipe => {
    wipe.addEventListener('click', replacer2)
})
//On keyup filters function runs
//document.addEventListener('keyup', filters)
document.addEventListener('keyup', (e) => filterParent(e))


//document.addEventListener('keyup', filters)
//get students on page on pageload
initStudents()