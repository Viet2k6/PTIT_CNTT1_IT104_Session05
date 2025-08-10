"use strict";
class Book2 {
    constructor(id, title, author) {
        this.id = id;
        this.titleValue = title;
        this.authorValue = author;
    }
    get bookId() {
        return this.id;
    }
    get title() {
        return this.titleValue;
    }
    get author() {
        return this.authorValue;
    }
    setTitle(newTitle) {
        this.titleValue = newTitle;
    }
    setAuthor(newAuthor) {
        this.authorValue = newAuthor;
    }
}
class Library2 {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. "${book.title}" của ${book.author}`);
        });
    }
    updateBookById(id, newTitle, newAuthor) {
        const book = this.books.find(b => b.bookId === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            console.log(`Đã cập nhật sách có ID ${id}`);
        }
        else {
            console.log(`Không tìm thấy sách với ID ${id}`);
        }
    }
}
const book01 = new Book2("1", "Harry Potter and the Sorcerer's Stone", "J.K. Rowling");
const book02 = new Book2("2", "Harry Potter and the Prisoner of Azkaban", "J.K. Rowling");
const book03 = new Book2("3", "The Fellowship of the Ring", "J.R.R. Tolkien");
const book04 = new Book2("4", "A Game of Thrones", "George R.R. Martin");
const book05 = new Book2("5", "A Clash of Kings", "George R.R. Martin");
const myLibrary2 = new Library2();
myLibrary2.addBook(book01);
myLibrary2.addBook(book02);
myLibrary2.addBook(book03);
myLibrary2.addBook(book04);
myLibrary2.addBook(book05);
myLibrary2.showBooks();
myLibrary2.updateBookById("3", "Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
console.log("\nDanh sách sau khi cập nhật:");
myLibrary2.showBooks();
