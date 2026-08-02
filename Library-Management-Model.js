class Book {
    constructor(name, author) {
        this.book_name = name;
        this.book_author = author;
        this.isAvailable = true;
    }
    showBook() {
        console.log(`Book Name: ${this.book_name}`);
        console.log(`Book Author: ${this.book_author}`);
    }
}
class Person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    showPerson() {
        console.log(`Name: ${this.name}`);
        console.log(`Author: ${this.id}`);
    }
}
class Member extends Person {
    constructor(name, id) {
        super(name, id);
        this.borrowed_books = [];
    }
    borrowBook(book) {
        this.borrowed_books.push(book);
        console.log(`borrowed book: ${book.book_name}`)
        console.log("By :");
        this.showPerson();
    }
}
class Librarian extends Person {
    constructor(name, id) {
        super(name, id);
    }
    issueBook(member, book) {
        if (book.isAvailable) {
            book.isAvailable = false;
            member.borrowBook(book);
        }
        else {
            console.log("!!  The required Book is Not available  !!")
        }
    }
}
class Library {
    constructor(name) {
        this.name = name;
        this.books = []
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Added Book : ${book.book_name}`)
    }
    showAllBooks() {
        console.log("-----------------------------------");
        console.log(`All Available Books:`);

        this.books.forEach((book) => {
            if (book.isAvailable){
                console.log(`${book.book_name} -- ${book.book_author}`)
            }
        })
    }
}

let library=new Library("Oxford");

let book1=new Book("ABC","A")
let book2=new Book("XYZ","X")

library.addBook(book1)
library.addBook(book2)

let member=new Member("Anuj",101);
let librarian=new Librarian("ME",100);

librarian.issueBook(member,book2)

library.showAllBooks();