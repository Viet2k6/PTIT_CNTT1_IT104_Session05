class Book4 {
  private id: number;
  private titleValue: string;
  private authorValue: string;
  private yearValue: number;

  constructor(id: number, title: string, author: string, year: number) {
    this.id = id;
    this.titleValue = title;
    this.authorValue = author;
    this.yearValue = year;
  }

  public get bookId(): number {
    return this.id;
  }

  public get title(): string {
    return this.titleValue;
  }

  public get author(): string {
    return this.authorValue;
  }

  public get year(): number {
    return this.yearValue;
  }

  public setTitle(newTitle: string): void {
    this.titleValue = newTitle;
  }

  public setAuthor(newAuthor: string): void {
    this.authorValue = newAuthor;
  }

  public setYear(newYear: number): void {
    this.yearValue = newYear;
  }
}

class Library4 {
  private books: Book4[] = [];

  public addBook(book: Book4): void {
    this.books.push(book);
  }

  public showBooks(): void {
    if (this.books.length === 0) {
      console.log("Thư viện chưa có sách.");
    } else {
      console.log("Danh sách sách trong thư viện:");
      this.books.forEach((book, index) => {
        console.log(`${index + 1}. "${book.title}" của ${book.author} (${book.year}) [ID: ${book.bookId}]`);
      });
    }
  }

  public updateBookById(id: number, newTitle: string, newAuthor: string, newYear: number): void {
    const book = this.books.find(b => b.bookId === id);
    if (book) {
      book.setTitle(newTitle);
      book.setAuthor(newAuthor);
      book.setYear(newYear);
      console.log(`Đã cập nhật sách có ID ${id}`);
    } else {
      console.log(`Không tìm thấy sách với ID ${id}`);
    }
  }

  public deleteBookById(id: number): void {
    const index = this.books.findIndex(b => b.bookId === id);
    if (index !== -1) {
      this.books.splice(index, 1);
      console.log(`Đã xóa sách có ID ${id}`);
    } else {
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
