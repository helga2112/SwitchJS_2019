class BookList{
    constructor(){
        this.booksRead = [];
        this.booksNotRead = [];
        this.nextBook;
        this.currentBook;
        this.lastBook;
        this.books = [];        
    }

    // add new book to the list
    add(value){
        if(value instanceof  Book)
            this.books.push(value);
            this.booksNotRead.push(value);
    }

    finishCurrentBook(){
        this.currentBook.isRead = true;
        this.currentBook.readDate = Date.now();
        this.booksRead.push(this.currentBook);
        this.lastBook = this.currentBook;
        this.currentBook = this.nextBook;
        this.nextBook = this.booksNotRead.shift();
       
    }
}

class Book{
    constructor(){
        this.title;
        this.genre;
        this.author;
        this.isRead;
        this.readDate;
    }
}