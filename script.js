const myLibrary = [];

// let card = {};
// const card1 = document.querySelector(".card1");
// const card2 = document.querySelector(".card2");
// const card3 = document.querySelector(".card3");
// const card4 = document.querySelector(".card4");
// const card5 = document.querySelector(".card5");

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

// card.forEach(function(newCard) {
//     card.push(newCard);
//     console.log(newCard);
//     newCard.textContent = "Book: " + myLibrary[0].info();
// })
// card1.textContent = "Book: " + myLibrary[0].info();
// card2.textContent = "Book: " + myLibrary[1].info();
// card3.textContent = "Book: " + myLibrary[2].info();
// card4.textContent = "Book: " + myLibrary[3].info();
// card5.textContent = "Book: " + book5.info();

// card.push(card1);
// console.log(card);


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