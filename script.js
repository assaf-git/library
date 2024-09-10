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
class Book {
    constructor(title, author, numberOfPages, read) {
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.read = read;
    }
}

// assigns values from form to respective variables
// creates a new book object from those values
// pushes that new book object into myLibrary array
class AddBookToLibrary {
    constructor() {
        title = formTitle.value;
        author = formAuthor.value;
        numberOfPages = formPages.value;
        answer = formRead.value;
    }
    
    readNotRead() {
        if (this.answer == "yes") {
            read = 'Read';
        } else {
            read = 'Not yet read';
        }
    }
    
    newBook = new Book(title, author, numberOfPages, read);
    
    addNewBook() {
        myLibrary.push(newBook);
    }

    makeCardMethod() {
        makeCard();
    }
}

// makes new card and displays book
// toggles book's read status
// changes color of read status button
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
        cardTitle.textContent = `'${book.title}'`;
        cardAuthor.textContent = "Written by: " + book.author;
        cardNoOfPages.textContent = "Pages: " + book.numberOfPages;
        readBtn.innerHTML = book.read;
        if (book.read == "Read") {
            readBtn.style.background = '#94ff93';
        } else if (book.read == "Not yet read") {
            readBtn.style.background = '#fd9090';
        }
    }

    readBtn.addEventListener('click', () => {
        for (let book of myLibrary) {
            if (book.read == "Read") {
                readBtn.style.background = '#fd9090';
                readBtn.innerHTML = "Not yet read";
                book.read = "Not yet read";
            } else if (book.read == "Not yet read") {
                readBtn.style.background = '#94ff93';
                readBtn.innerHTML = "Read";
                book.read = "Read";
            }
        }
    })

    removeBtn.addEventListener('click', () => {
        cardContainer.removeChild(newCard);
    })

    newCard.appendChild(cardTitle).className = "card-title card-elements";
    newCard.appendChild(cardAuthor).className = "card-author card-elements";
    newCard.appendChild(cardNoOfPages).className = "card-nop card-elements";
    newCard.appendChild(readBtn).className = "read-button card-buttons";
    newCard.appendChild(removeBtn).className = "remove-button card-buttons";
    cardContainer.appendChild(newCard).className = "card";
}