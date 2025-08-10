"use strict";
class Book4 {
    constructor(id, title, author, year) {
        this.id = id;
        this.titleValue = title;
        this.authorValue = author;
        this.yearValue = year;
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
    get year() {
        return this.yearValue;
    }
    setTitle(newTitle) {
        this.titleValue = newTitle;
    }
    setAuthor(newAuthor) {
        this.authorValue = newAuthor;
    }
    setYear(newYear) {
        this.yearValue = newYear;
    }
}
class Library4 {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách.");
        }
        else {
            console.log("Danh sách sách trong thư viện:");
            this.books.forEach((book, index) => {
                console.log(`${index + 1}. "${book.title}" của ${book.author} (${book.year}) [ID: ${book.bookId}]`);
            });
        }
    }
    updateBookById(id, newTitle, newAuthor, newYear) {
        const book = this.books.find(b => b.bookId === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            book.setYear(newYear);
            console.log(`Đã cập nhật sách có ID ${id}`);
        }
        else {
            console.log(`Không tìm thấy sách với ID ${id}`);
        }
    }
    deleteBookById(id) {
        const index = this.books.findIndex(b => b.bookId === id);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`Đã xóa sách có ID ${id}`);
        }
        else {
            console.log(`Không tìm thấy sách với ID ${id}`);
        }
    }
}
const myLibrary4 = new Library4();
myLibrary4.addBook(new Book4(1, "Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 1997));
myLibrary4.addBook(new Book4(2, "Harry Potter and the Prisoner of Azkaban", "J.K. Rowling", 1999));
myLibrary4.addBook(new Book4(3, "The Fellowship of the Ring", "J.R.R. Tolkien", 1954));
myLibrary4.addBook(new Book4(4, "A Game of Thrones", "George R.R. Martin", 1996));
myLibrary4.addBook(new Book4(5, "A Clash of Kings", "George R.R. Martin", 1998));
myLibrary4.showBooks();
myLibrary4.updateBookById(3, "Dế Mèn Phiêu Lưu Ký", "Tô Hoài", 1941);
myLibrary4.deleteBookById(2);
console.log("\nDanh sách sau khi cập nhật:");
myLibrary4.showBooks();
