const myLibrary = [];


const nodeList = document.querySelectorAll(".card");
const myCards = Array.from(nodeList);


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
    let read = prompt("Have you read this book? ", "Yes");
    const newBook = new Book(title, author, numberOfPages, read);
    console.log(newBook.info());
    myLibrary.push(newBook);
}
addBookToLibrary();

function displayBooks() {
    for (i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i].info());
        myCards[i].textContent = "Book: " + myLibrary[i].info();
    }
}
displayBooks();

console.log(myLibrary);

myLibrary.forEach(function(book){
    console.log(book.info());

    // let i = 1;
    // card[i].textContent = "Book: " + book.info();
    // do {

    // }
});


// let answer = prompt("Have you read this book?", "Yes");
// if (answer == "Yes") {
//     read = 'Read';
// } else {
//     read = 'Not yet read';
// }