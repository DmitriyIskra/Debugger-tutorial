

function parseCount(value) {
    if(parseInt(value)) {
        return parseInt(value);   
    }
        throw new Error('Невалидное значение');    
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch(error) {
        return error;
    };
}


// ---------------------------------Задача 2



class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;

        if((side1 + side2) < side3){
            throw new Error('Треугольник с такими сторонами не существует');
        }
        else if((side1 + side3) < side2) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        else if((side2 + side3) < side1) {
            throw new Error('Треугольник с такими сторонами не существует');
        }          
    }

    getPerimeter() {

        if(!this.side1){
            return new Error('Ошибка! Треугольник не существует');  
        }
        else{   
            return this.side1 + this.side2 + this.side3;
        }       
    }

    getArea() {

        if(!this.side1){
            return new Error('Ошибка! Треугольник не существует');   
        }
        else{   
            let p = (this.side1 + this.side2 + this.side3) / 2;
            return +Math.sqrt( p * (p - this.side1) * (p - this.side2) * (p - this.side3) ).toFixed(3);
        }  
    }
}


function getTriangle(a, b, c) {
        try{
            return new Triangle(a, b, c);
        } catch(error) {
            return {
                    getPerimeter() {
                        return'Ошибка! Треугольник не существует';  
                    },
        
                    getArea() {
                       return 'Ошибка! Треугольник не существует';
                    }
            }
        } 
}
