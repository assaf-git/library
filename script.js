const myLibrary = [];

const cardContainer = document.querySelector(".card-container")
const addBook = document.querySelector(".btn-add-book");
const formDialog = document.querySelector("#form-dialog");
const formContainer = document.querySelector(".form-container");
const submitBtn = document.querySelector(".btn-submit");
const formTitle = document.querySelector("#title");
const formAuthor = document.querySelector("#author");
const formPages  = document.querySelector("#pages");
const formRead = document.querySelector("#read");

addBook.addEventListener('click', () => {
    formContainer.reset();
    formDialog.showModal();
});

submitBtn.addEventListener('click', (event) => {
    addBookToLibrary();
    event.preventDefault();
    formDialog.close();
});

formDialog.addEventListener('click', () => formDialog.close());

formContainer.addEventListener('click', (event) => event.stopPropagation());

// new book object constructor
function Book(title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
    // this.info = function() {
    //     return title + ', ' + author + ', ' + numberOfPages + ', ' + read;
    // }    
}

// assigns values from form to respective variables
// creates a new book object from those values
// pushes that new book object into myLibrary array
function addBookToLibrary() {
    let title = formTitle.value;
    let author = formAuthor.value;
    let numberOfPages = formPages.value;
    let answer = formRead.value;
    if (answer == "yes") {
        read = 'Read';
    } else {
        read = 'Not yet read';
    }
    newBook = new Book(title, author, numberOfPages, read);
    // console.log(newBook.info());
    myLibrary.push(newBook);
    makeCard();
}

// makes new card and displays book
// toggles book read status
// enables book card to be removed
function makeCard() {
    const newCard = document.createElement("div");
    const cardTitle = document.createElement("h2");
    const cardAuthor = document.createElement("p");
    const cardNoOfPages = document.createElement("p");
    const readBtn = document.createElement("button");
    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    
    for (let book of myLibrary) {
        cardTitle.textContent = book.title;
        cardAuthor.textContent = book.author;
        cardNoOfPages.textContent = book.numberOfPages;
        readBtn.innerHTML = book.read;
    }

    readBtn.addEventListener('click', () => {
        for (let book of myLibrary) {
            if (book.read == "Read") {
                readBtn.innerHTML = "Not yet read";
                book.read = "Not yet read";
            } else if (book.read == "Not yet read") {
                readBtn.innerHTML = "Read";
                book.read = "Read";
            }
        }
    })

    removeBtn.addEventListener('click', () => {
        cardContainer.removeChild(newCard);
    })

    newCard.appendChild(cardTitle).className = "card-title";
    newCard.appendChild(cardAuthor).className = "card-author";
    newCard.appendChild(cardNoOfPages).className = "card-nop";
    newCard.appendChild(readBtn).className = "read-button";
    newCard.appendChild(removeBtn).className = "remove-button";
    cardContainer.appendChild(newCard).className = "card";
}