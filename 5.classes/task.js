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

        if(findedBook) {
            return findedBook;
        }
        else {
            return null;
        }
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

class Subject {
    constructor(subject, mark) {
        this[subject] = [mark];
    }
}

class Student {
    constructor(name){
        this.name = name;
        this.journal = [];
    }


    addMark(mark, subject) {
        
        if(this.journal.length === 0){
            this.journal.push(new Subject([subject], mark));
        }
        else{
            this.journal.forEach( e => {
                if(e?.[subject]){
                    e[subject].push(mark);
                }
                else{
                    this.journal.push(new Subject([subject], mark));
                }
            })
        }


            // if(mark < 1 || mark > 5) {
            //     console.log('Ошибка: оценка не соответствует устанвленной шкале оценок')
            //     return 'Ошибка: оценка не соответствует установленной шкале оценок'
            // }
            // else if(this.journal?.[subject]) {
                
            // }
            
          
    }
        
};


const studentFirst = new Student('Svetlana');

studentFirst.addMark(4, 'Algebra');
studentFirst.addMark(3, 'Algebra');
studentFirst.addMark(5, 'Tehnology')
// const studentSecond = new Student('Igor', 'man', 23);
// const studentThird = new Student('Oleg', 'man', 27);
// const studentFourth = new Student('Irina', 'woman', 22);


// debugger;