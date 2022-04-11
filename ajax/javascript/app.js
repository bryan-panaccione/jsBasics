// What do you have?
//   - jQuery to make AJAX requests to an API
//   - jQuery to work with the DOM
//   - Some existing HTML with placeholder information (.result-card)
//   - An API endpoint that has data for me "https://api.tvmaze.com/search/shows?q="
//   - A reference to how to use that API: "https://www.tvmaze.com/api#show-search"

// What do you need?
// When the user clicks the search button, the following needs to happen afterwards:
//     1. I need to take the text they typed in the input box
//     2. I need to get the TV show information based on what the user typed in: "https://api.tvmaze.com/search/shows?q=[SEARCH_STRING]"
//     2. I need to display that information using the .result-card html as a template

// How do you get there?
// I need to use this API endpoint: "https://api.tvmaze.com/search/shows?q="
// I can use the URL bar in my web browser to see what comes back when I visit an end point, e.g."https://api.tvmaze.com/search/shows?q=lost"
// I need to handle a click event on the search button
// I need to get the user information from the input box
// I need to use $.get to make an AJAX request to the endpoint with the user search info, e.g. "https://api.tvmaze.com/search/shows?q=lost"
// I need to use jQuery to recreate the .result-card html and all of it's nested elements
// I need to go through the data sent from the AJAX request and create a result card for each TV show
// I need to add each result card to the #results element.
// const $resultArea = $('#results')
// let $cardSpan = $('<span>fdasdfas</span>')
// let $title = $('<h3></h3>')
// const $userText = $('#userInput')
//$resultArea.append($cardSpan)
// $('#submit').click(() => {

//   $.get(`https://api.tvmaze.com/search/shows?q=${document.querySelector('.userInput').value}`, (data) => {
//     $('.card-title').html(`${data[0]['show']['name']}`)
//     $('.card-image').attr("src", `${data[0]['show']['image']['medium']}`)
//     $('.card-genres').html(`${data[0]['show']['genres']}`)
//     $('.card-summary').html(`${data[0]['show']['summary']}`)
//     $('.show-link').attr('href', `${data[0]['show']['link']}`)
//   });
// })

$('#submit').click(() => {
  $('#results').html('')

  $.get(`https://api.tvmaze.com/search/shows?q=${document.querySelector('.userInput').value}`, (data) => {
    console.log(data)
    for (var i = 0; i < data.length; i++) {
      console.log(i)
      $('#results').append(`
      <span class="result-card">
        <h3 class="card-title">${data[i]['show']['name']}</h3>
        <img class="card-image" src=${data[i]['show']['image']['medium']}>
        <h2 class="card-genres">${data[i]['show']['genres']}</h2>
        <div class="card-summary">${data[i]['show']['summary']}</div>
        <a class="show-link" target="_blank" href=${data[i]['show']['url']}>${data[i]['show']['name']}</a>
      </span>`
      )
    }
  });
})