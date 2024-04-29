const myLibrary = [];


const nodeList = document.querySelectorAll(".card");
const myCards = Array.from(nodeList);

const addBook = document.querySelector(".btn-add-book");
const formDialog = document.querySelector("#form-dialog");
const submitBtn = document.querySelector(".btn-submit");
// const formTitle = formDialog.querySelector("#title");
// const formAuthor = formDialog.querySelector("#author");
// const formPages  = formDialog.querySelector("#pages")
// const formRead = formDialog.querySelector("#read");

// const overlay = document.querySelector('.overlay-container');
// function togglePopup() {
//     overlay.classList.toggle('show')
// }

addBook.addEventListener('click', () => {
    formDialog.showModal();
});

submitBtn.addEventListener('click', (event) => {
event.preventDefault();
formDialog.close();
});

const book1 = new Book("Zero To One", "Peter Thiel", "295", "Read");
myLibrary.push(book1);
const book2 = new Book("Never Split The Difference", "Chris Voss", "300", "Read");
myLibrary.push(book2);
const book3 = new Book("This Is Marketing", "Seth Godin", "350", "Not yet read");
myLibrary.push(book3);
const book4 = new Book("Can't Hurt Me", "David Goggins", "305", "Read");
myLibrary.push(book4);


function Book(title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
    this.info = function() {
        return title + ', ' + author + ', ' + numberOfPages + ', ' + read;
    }    
}


function addBookToLibrary() {
    let title = prompt("Title: ");
    let author = prompt("Author: ");
    let numberOfPages = prompt("Number of pages: ");
    let answer = prompt("Have you read this book?", "Yes");
    if (answer == "Yes") {
        read = 'Read';
    } else {
        read = 'Not yet read';
    }
    const newBook = new Book(title, author, numberOfPages, read);
    console.log(newBook.info());
    myLibrary.push(newBook);
}
// addBookToLibrary();


function displayBooks() {
    for (i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i].info());
        myCards[i].textContent = "Book: " + myLibrary[i].info();
    }
}
displayBooks();