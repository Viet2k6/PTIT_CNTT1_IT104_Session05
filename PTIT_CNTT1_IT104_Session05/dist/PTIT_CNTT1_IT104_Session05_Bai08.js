"use strict";
class Book3 {
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
class Library3 {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách");
        }
        else {
            console.log("Danh sách sách trong thư viện:");
            this.books.forEach((book, index) => {
                console.log(`${index + 1}. "${book.title}" của ${book.author}`);
            });
        }
    }
    searchByTitle(title) {
        const foundBooks = this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
        foundBooks.forEach((book, index) => {
            console.log(`${index + 1}. "${book.title}" của ${book.author}`);
        });
    }
}
const myLibrary3 = new Library3();
myLibrary3.addBook(new Book3("Dế Mèn Phiêu Lưu Ký", "Tô Hoài"));
myLibrary3.addBook(new Book3("Harry Potter và Hòn Đá Phù Thủy", "J.K. Rowling"));
myLibrary3.addBook(new Book3("Không Gia Đình", "Hector Malot"));
myLibrary3.addBook(new Book3("Lão Hạc", "Nam Cao"));
myLibrary3.addBook(new Book3("Chí Phèo", "Nam Cao"));
myLibrary3.searchByTitle("Chí Phèo");
