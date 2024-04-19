const myLibrary = [];

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


// let answer = prompt("Have you read this book?", "Yes");
// if (answer == "Yes") {
//     read = 'Read';
// } else {
//     read = 'Not yet read';
// }

// const book1 = new Book('The Hobbit', 'JRR Tolkien', '295 pages', read);
// console.log(book1.info());