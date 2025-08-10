class Book3 {
  private titleValue: string;
  private authorValue: string;
  constructor(title: string, author: string) {
    this.titleValue = title;
    this.authorValue = author;
  }
  public get title(): string {
    return this.titleValue;
  }
  public get author(): string {
    return this.authorValue;
  }
}

class Library3 {
  private books: Book3[] = [];
  public addBook(book: Book3): void {
    this.books.push(book);
  }

  public showBooks(): void {
    if (this.books.length === 0) {
      console.log("Thư viện chưa có sách");
    } else {
      console.log("Danh sách sách trong thư viện:");
      this.books.forEach((book, index) => {
        console.log(`${index + 1}. "${book.title}" của ${book.author}`);
      });
    }
  }

  public searchByTitle(title: string): void {
    const foundBooks = this.books.filter(book =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );
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
