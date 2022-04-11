// Define a function named createDiv that takes no arguments.
// Return a <div> element.
function createDiv() {
  return document.createElement('div');
}



// Define a function named createDivWithClass that takes one argument.
//   className (string)
//
function createDivWithClass(className) {
  let el = document.createElement('div');
  el.classList.add(`${className}`)
  return el
}


// Return a <div> element with the given className.


// Define a function named updateTodoList that takes one argument.
//   todoList (<ul> DOM element)
//
// The function must iterate over its list items (<li>) and do the following:
//   * Remove items from the list if its text starts with "COMPLETED"
//   * Applies the "important" CSS class if its text starts with "URGENT".
//     TIP: Applying a CSS class means adding on top of what's already there.
//   * Make no change otherwise
//function updateTodoList(todoList) {
//let foobar = todoList.getElementsByClassName('fooStyle')
//for (var i = 0; i < foobar.length; i++) {
//let todoItem = foobar[i].innerText;
//let first9 = todoItem.slice(0, 9);
//if (first9 === 'COMPLETED') {
//foobar[i].remove()
//}
//} console.log(foobar)
//}

function updateTodoList(todoList) {
  let foobar = todoList.childNodes
  for (element of foobar) {
    if (element.textContent.startsWith('COMPLETED')) {
      element.remove()
    } else if (element.textContent.startsWith('URGENT')) {
      element.classList.add('important')
    }
  }
}


// Define a function named createList that takes one argument.
//   createList (object)
//
// The object has the following structure:
//    {
//      'TITLE': 'URL',
//      'TITLE': 'URL',
//      'TITLE': 'URL',
//      ...
//    }
//
// The function must return an <ul> element that contains <li> elements that
// each contain an <a> element. For example, given:
//    {
//      'Google': 'https://www.google.com',
//      'Facebook': 'https://www.facebook.com',
//      'GitHub': 'https://github.com',
//      'Galvanize': 'https://www.galvanize.com'
//    }
//
// It returns the following:
//    <ul>
//      <li><a href="https://www.google.com">Google</a></li>
//      <li><a href="https://www.facebook.com">Facebook</a></li>
//      <li><a href="https://github.com">GitHub</a></li>
//      <li><a href="https://www.galvanize.com">Galvanize</a></li>
//    </ul>
function createList(object) {
  let ul = document.createElement('ul')
  for (const item in object) {
    let li = document.createElement('li')
    li.innerHTML = `<a href=${object[item]}>${item}</a>`
    ul.appendChild(li)
  } return ul
}



// Write a function named extractQuote that takes in one argument.
//   article (<article> DOM element)
//
// Assume the article contains a paragraph. For example:
//
//    <article>
//      <p>Neale Donald Walsch once said, "Life begins at the end of your
//      comfort zone." This is really important.</p>
//    </article>
//
// The function must check the paragraph for double quotes ("), extract it out,
// add it to the text of a <blockquote> element, and then replace the paragraph
// with that blockquote. For example, given the  above input, it must change the
// article as following:
//
//    <article>
//      <blockquote>"Life begins at the end of your comfort zone."</blockquote>
//    </article>
//
// No changes should be made if there's no quote.
//
// TIP: Assume that if there's an opening double quote, there's a closing
// double quote as well.
function extractQuote(article) {
  const text = article.childNodes[0].innerText;
  const startIndex = text.indexOf('"');
  const endIndex = text.lastIndexOf('"');
  if (startIndex > 0 && endIndex > 0) {
    const quote = text.slice(startIndex, endIndex + 1)
    //console.log(quote)
    const blockquote = document.createElement('blockquote');
    blockquote.innerText = quote
    article.replaceChild(blockquote, article.childNodes[0])
  }
}

//function extractQuote(article) {
//const text = let
//})

// Define a function named createTable that takes one argument.
//   data (array of arrays)
//
// The function must return a <table> DOM element that matches the structure of
// the input data. The first element in the data array is the <thead> data, the
// last element is the <tfoot> data, and the remaining elements form the <tbody>
// data. For example, given the following input:
//    [
//      ['a', 'b', 'c'],
//      ['d', 'e', 'f'],
//      ['g', 'h', 'i'],
//      ['j', 'k', 'l']
//    ]
//
// the function returns
//
// <table>
//   <thead>
//     <tr>
//       <th>a</th>
//       <th>b</th>
//       <th>c</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>d</td>
//       <td>e</td>
//       <td>f</td>
//     </tr>
//     <tr>
//       <td>g</td>
//       <td>h</td>
//       <td>i</td>
//     </tr>
//   </tbody>
//   <tfoot>
//     <tr>
//       <td>j</td>
//       <td>k</td>
//       <td>l</td>
//     </tr>
//   </tfoot>
// </table>
//
// TIP: Assume that data array has at least three elements.
// TIP: Assume that the elements of the data array are equal in length.

function createTable(data) {
  let tableOuter = document.createElement('table');
  let thead = document.createElement('thead')
  let tfoot = document.createElement('tfoot')
  let tbody = document.createElement('tbody')
  for (var i = 0; i < data.length; i++) {
    let tableRow = document.createElement('tr')
    if (i === 0) {
      thead.appendChild(tableRow)
      tableOuter.appendChild(thead)
    } else if (i === data.length - 1) {
      tfoot.appendChild(tableRow)
      tableOuter.append(tfoot)
    } else {
      tbody.appendChild(tableRow)
      tableOuter.appendChild(tbody)
    } for (var j = 0; j < data[i].length; j++) {
      if (i === 0) {
        let tableH = document.createElement('th')
        tableH.innerText = data[i][j]
        tableRow.appendChild(tableH)
      } else {
        let tableData = document.createElement('td')
        tableData.innerText = data[i][j]
        tableRow.appendChild(tableData)
      }
    }
  } console.log(tableOuter)
  return tableOuter
}
