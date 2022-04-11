var resultsArea = $("#results");
var displayArea = $("#display");
var books = {};

$("#submit").on("click", function () {
  var searchText = $("input").val();
  performSearch(searchText);
});

// WORK NEEDED (SEE TODO)
function performSearch(searchText) {
  var URL = googleBookAPI_URL(searchText);
  resultsArea.html('<h3>Results:</h3>')
  $.get(URL, (data) => {
    resultsArea.append(addResultToDOM(data))
    $
  })

}

// DO NOT MODIFY
function googleBookAPI_URL(searchText) {
  return `https://www.googleapis.com/books/v1/volumes?q=intitle:${searchText}`;
}

// DO NOT MODIFY
function addResultToDOM(searchResults) {
  var items = searchResults.items;

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var newBook = createBookFrom(item);

    books[newBook.id] = newBook;

    resultsArea.append(newBook.html);
  }

  //Added to remove error when clicking outside result card but inside result area
  const resultOnly = document.querySelectorAll('.result')

  resultOnly.forEach(result => {
    result.addEventListener('click', (e) => expandCollapse(e))
  })
  ////


  // REQUIRED TO SUCCEED: Look at what gets logged out. Make sure you read
  // what properties are being stored.
  console.log(books);
}

// WORK NEEDED (SEE TODO)



function expandCollapse(event) {
  var isResultElement = event.target.getAttribute("class") === "result";
  var expandDetector = event.target.classList.contains('expanded')
  var bookId = event.target.id;
  var book = books[bookId];
  var pinSpot = $(`#${book.id}`)
  if (isResultElement && !expandDetector) {

    var bookHTML = htmlToDisplay(book)
    pinSpot.html(bookHTML)
    pinSpot[0].classList.add('expanded')


  } else {

    pinSpot[0].classList.remove('expanded')
    pinSpot.text(`${book.title}`)



  }
};

// This could probably be done more programatically
function htmlToDisplay(book) {
  // TODO: Add image from book.
  if (book.image && book.description) {
    return `
    <h2>${book.title}</h2>
    <img src="${book.image}" />
    <h3><span class="description">${book.description}<span></h3>
  `;
  } if (book.image && !book.description) {
    return `
    <h2>${book.title}</h2>
    <img src="${book.image}" />
    <h3>No Description Available</h3>
  `;
  }
  else {
    return `
    <h2>${book.title}</h2>
    <img style="width: 20rem" src="catPic7.png" />
    <h3><span class="description">${book.description}<span></h3>
  `;
  }
}

// DO NOT MODIFY
function createBookFrom(item) {
  return {
    id: item.id,
    title: item.volumeInfo.title,
    description: item.volumeInfo.description,
    image: item.volumeInfo.imageLinks.thumbnail,
    html: `<span id="${item.id}" class="result">${item.volumeInfo.title}</span>`,
  };
}

