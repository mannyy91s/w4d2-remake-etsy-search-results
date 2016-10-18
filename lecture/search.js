var container = document.createElement('div') // this stores the div inside the container . createElement made that div object
// console.dir(container)
container.classList.add('container')
var row = document.createElement('div')
row.classList.add('row')
container.appendChild(row) //we are putting this row inside of the container

//have to make the col 3 times
// var col = document.createElement('div')
// col.classList.add('col-sm-4')
// col.innerHTML='column A'
// row.appendChild(col)
// var col = document.createElement('div')
// col.classList.add('col-sm-4')
// col.innerHTML='column B'
// row.appendChild(col)
// var col = document.createElement('div')
// col.classList.add('col-sm-4')
// col.innerHTML='column C'
// row.appendChild(col)


// another way of doing this by using clone
var col = document.createElement('div')
col.classList.add('col-sm-4')
col.setAttribute('title', 'A fancy column')
var col2 = col.cloneNode(true)
var col3 = col.cloneNode(true)

col.innerHTML='column A'
col2.innerHTML='column B'
col3.innerHTML='column C'

row.appendChild(col)
row.appendChild(col2)
row.appendChild(col3)

/*
<div class="input-group">
      <input type="text" class="form-control" placeholder="Search for...">
      <span class="input-group-btn">
        <button class="btn btn-default" type="button">Go!</button>
      </span>
    </div>*/
// <input type='text' id='search' placeholder="Search...">
var searchDiv = document.createElement('div')
searchDiv.classList.add('input-group')

var span = document.createElement('span')
span.classList.add('input-group-btn')

var button = document.createElement('button')
button.type = 'button'
button.className = 'btn btn-default' //we used className because we are making it ourselves and we dont need to add it twice
button.innerHTML = 'Search!'

var searchInput= document.createElement('input')
searchInput.type = 'text'
searchInput.placeholder = 'Search...'
searchInput.id = 'search'
searchInput.className = 'form-control'  //className sets the class attribute or you can use classlist.add  if you use setAttribute it will replace all the classes

searchDiv.appendChild(searchInput)
span.appendChild(button)
searchDiv.appendChild(span)

container.insertBefore(searchDiv, row) //another dom method that is used to insert it before the row.
container.insertBefore(document.createElement('br'), searchDiv)
// container.insertBefore(document.createElement('br'), searchDiv.nextSibling) // add br to 2nd sibling
container.insertBefore(document.createElement('br'), row)

button.addEventListener('click', search) // the first thing in () is what to look for (action) and the 2nd is function
searchInput.addEventListener('keypress', searchEnter)

function searchEnter(event){ //using event in here passes the information from above the eventListener
    if (event.key === 'Enter'){
        search()  // we are pulling the function from below
    }
}
function search(){
    var searchTerm = document.querySelector('#search').value  // it took the search id from the search id we gave to the button up above
    var searchResult = {
        term: searchTerm,
        image: 'http://unsplash.it/400?random',
    }
    createSearchResult(searchResult)

    document.querySelector('#search').value = ''
}
function createSearchResult(result){
    var card = document.createElement('div')
    card.className = 'well'
    card.innerHTML = result.term  //we are using the term object from up above
    document.querySelector('.col-sm-4:first-child').appendChild(card)
}
document.getElementById('searchResults').appendChild(container) // so we are going to the document and then body.appendChild is method that takes any valid thing and stick it inside at the bottom of the list kinda like push. we changed body to getElementbyId because we made a div in the html to place this content inside that div instead of pushing it at the bottom of body below the script tags
