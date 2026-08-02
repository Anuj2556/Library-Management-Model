# Library Management System

A simple library management system built using JavaScript and object-oriented programming (OOP) concepts.

## Features

* Add books to the library.
* Display all available books.
* Borrow books from the library.
* Check whether a book is available.
* Manage members and librarians.

## OOP Concepts Used

### Classes

* `Book`
* `Person`
* `Member`
* `Librarian`
* `Library`

### Inheritance

* `Member` inherits from `Person`.
* `Librarian` inherits from `Person`.

### Composition

* The `Library` class contains multiple `Book` objects.

### Encapsulation

* Data and methods are organized inside classes.

## Project Structure

```text
Library Management System
│
├── Book
├── Person
├── Member
├── Librarian
└── Library
```

## Example Output

```text
Added Book : ABC
Added Book : XYZ
borrowed book: XYZ
By :
Name: Anuj
Author: 101
-----------------------------------
All Available Books:
ABC -- A
```

## Author

Anuj Prajapati
