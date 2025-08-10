class Book {
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

class Library {
  private books: Book[] = [];
  public addBook(book: Book): void {
    this.books.push(book);
  }

  public showBooks(): void {
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

