const myLibrary = [];
const myCards = [];


// const nodeList = document.querySelectorAll(".card");
// const myCards = Array.from(nodeList);

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

// const book1 = new Book("Zero To One", "Peter Thiel", "295", "Read");
// myLibrary.push(book1);
// const book2 = new Book("Never Split The Difference", "Chris Voss", "300", "Read");
// myLibrary.push(book2);
// const book3 = new Book("This Is Marketing", "Seth Godin", "350", "Not yet read");
// myLibrary.push(book3);
// const book4 = new Book("Can't Hurt Me", "David Goggins", "305", "Read");
// myLibrary.push(book4);


// new book object constructor
function Book(title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
    this.info = function() {
        return title + ', ' + author + ', ' + numberOfPages + ', ' + read;
    }    
}

// assigns values from form to respective variables
// creates a new book object from those values
// pushes that new book object into library array
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
    console.log(newBook.info());
    myLibrary.push(newBook);
    makeCard();
}

// might not be relevant??
function displayBooks() {
    for (i = 0; i < myLibrary.length + 1; i++) {
        console.log(myLibrary[i].info());
        newCard.textContent = "Book: " + myLibrary[i].info();
    }
}

// makes new card and displays book
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