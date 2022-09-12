let myLibrary = []
const tableBody = document.querySelector('.books-tbody')
const table = document.querySelector('#books-table')
const title = document.querySelector('#title')
const author = document.querySelector('#author')
const pages = document.querySelector('#pages')
const read = document.querySelector('#read')
const form = document.querySelector('#panel-form')


form.addEventListener('submit', (e) => {
    e.preventDefault()
})

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addToLibrary(title, author, pages, read){
    myLibrary.push(new Book(title, author, pages, read))
}

let submitBtn = document.querySelector('#submitBtn')
submitBtn.addEventListener('click', () => {
            if(!isNaN(pages.value)){
                if(read.value == 'Yes' || read.value == 'yes' || read.value == 'No' || read.value == 'no'){
                    addToLibrary(title.value, author.value, pages.value, read.value)
                    showBooks()
                    clearLibrary()
                } else {
                    alert('Read slot must be either yes or no!')
                }
                
            }  else {
                alert('Pages slot must contain a number!')
            }             
})

let resetBtn = document.querySelector('#resetBtn')
resetBtn.addEventListener('click', () => {
    tableBody.innerHTML = ''
})


function showBooks(){
    for(let i = 0; i < myLibrary.length; i++){
        //Adds book row
        let bookRow = document.createElement('tr')
        tableBody.appendChild(bookRow)
        //Adds title cell
        let title = document.createElement('td')
        title.innerHTML = myLibrary[i].title
        bookRow.appendChild(title)
        //Adds author cell
        let author = document.createElement('td')
        author.innerHTML = myLibrary[i].author
        bookRow.appendChild(author)
        //Adds pages cell
        let pages = document.createElement('td')
        pages.innerHTML = myLibrary[i].pages
        bookRow.appendChild(pages)
        //Adds read cell
        let readCell = document.createElement('td')
        let readButton = document.createElement('button')
        if(read.value == 'yes' || read.value == 'Yes'){
            readButton.textContent = 'Read';
            readButton.classList.add('positive')
        } else if(read.value == 'no' || read.value == 'No'){
            readButton.textContent = 'Not read'
            readButton.classList.add('negative')
        } 
        readCell.appendChild(readButton)
        bookRow.appendChild(readCell)
        bookRow.classList.add('row')
        title.classList.add('cell')
        author.classList.add('cell')
        pages.classList.add('cell')
    }
}

function clearLibrary(){
    myLibrary = []
}






showBooks()