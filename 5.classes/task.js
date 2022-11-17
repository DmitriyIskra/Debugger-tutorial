class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(condition) {
        if(condition <= 0) {
            this._state = 0;
        }
        else if(condition >= 100) {
            this._state = 100;
        }
        else {
            this._state = condition;
        }
    }

    get state() {
        return this._state
    }
};


class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}


class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}


class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = 'novel';
    }
}


class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = 'fantastic';
    }
}


class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = 'detective';
    }
}


// -----------------L I B R A R Y

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(key, value) {
        let findedBook = this.books.find( e => e[key] === value);

        return findedBook || null
    }
    
    giveBookByName(bookName) {
        let findedBook = this.books.find( e => e.name === bookName);

        if(findedBook) {
            this.books.splice(this.books.indexOf(findedBook), 1);
            return findedBook;    
        }
        else{
            return null;
        }
    }
}


// -------------------S T U D E N T S

class Student {
    constructor(name){
        this.name = name;
        // this.journal = [];
        this.journal = {};
    }


    addMark(mark, subject) {    // Метод внесения предметов и оценок
        
        if(mark < 1 || mark > 5) {
                console.log('Ошибка: оценка не соответствует устанвленной шкале оценок');
                return 'Ошибка: оценка не соответствует установленной шкале оценок';
            }
        else if(this?.journal?.[subject]){
            this.journal[subject].push(mark)
        }
        else{
            this.journal[subject] = [mark]
        }
        
    };


    getAverageBySubject(subject) {        
        return this.journal[subject].reduce( (acc, e) => acc += e ) / this.journal[subject].length;    
    }  


    getAverage() {
        let totalMarks = 0;
        let totalAmountMarks = 0;

        for( let e in this.journal) {
            totalMarks += this.journal[e].length;

            totalAmountMarks += this.journal[e].reduce( (acc, e) => acc += e );
        }

        return totalAmountMarks / totalMarks;
    }
      
};


const studentFirst = new Student('Svetlana');

studentFirst.addMark(4, 'algebra');
studentFirst.addMark(3, 'algebra');
studentFirst.addMark(4, 'tehnology');
studentFirst.addMark(6, 'tehnology');
studentFirst.addMark(2, 'tehnology');





