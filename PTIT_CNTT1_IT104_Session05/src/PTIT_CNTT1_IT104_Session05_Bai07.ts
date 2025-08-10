class Book2 {
  private id: string;
  private titleValue: string;
  private authorValue: string;
  constructor(id: string, title: string, author: string) {
    this.id = id;
    this.titleValue = title;
    this.authorValue = author;
  }
  public get bookId(): string {
    return this.id;
  }
  public get title(): string {
    return this.titleValue;
  }
  public get author(): string {
    return this.authorValue;
  }
  public setTitle(newTitle: string): void {
    this.titleValue = newTitle;
  }
  public setAuthor(newAuthor: string): void {
    this.authorValue = newAuthor;
  }
}

class Library2 {
  private books: Book2[] = [];
  public addBook(book: Book2): void {
    this.books.push(book);
  }

  public showBooks(): void {
    console.log("Danh sách sách trong thư viện:");
    this.books.forEach((book, index) => {
      console.log(`${index + 1}. "${book.title}" của ${book.author}`);
    });
  }

  public updateBookById(id: string, newTitle: string, newAuthor: string): void {
    const book = this.books.find(b => b.bookId === id);
    if (book) {
      book.setTitle(newTitle);
      book.setAuthor(newAuthor);
      console.log(`Đã cập nhật sách có ID ${id}`);
    } else {
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
