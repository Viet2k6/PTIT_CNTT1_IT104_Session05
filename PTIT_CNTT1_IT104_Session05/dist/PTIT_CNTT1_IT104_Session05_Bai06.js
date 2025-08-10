"use strict";
class Book {
    constructor(title, author) {
        this.titleValue = title;
        this.authorValue = author;
    }
    get title() {
        return this.titleValue;
    }
    get author() {
        return this.authorValue;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. "${book.title}" của ${book.author}`);
        });
    }
}
const book1 = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling");
const book2 = new Book("Harry Potter and the Prisoner of Azkaban", "J.K. Rowling");
const book3 = new Book("The Fellowship of the Ring", "J.R.R. Tolkien");
const book4 = new Book("A Game of Thrones", "George R.R. Martin");
const book5 = new Book("A Clash of Kings", "George R.R. Martin");
const myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
myLibrary.addBook(book5);
myLibrary.showBooks();
