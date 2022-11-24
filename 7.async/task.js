 
 //////// ----------------- Конструктор звонка
 class RingAlarmClock {
    constructor(id, time, callback) {
        this.id = id;
        this.time = time;
        this.callback = callback;
    }
 }


//////// ---------------- Конструктор будильника 
 class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    };


    addClock(time, callback, id) {
        if(!id) {                    // Проверка передан ли id
            throw new Error('error text');
        }

        if( this.alarmCollection.some( e => e.id === id) ) {  // Проверка на существование id, в массиве звонков
            console.error('Ошибка звонок с таким идентификатором уже существует');
            return;
        }
        else {                      // Добавление звонка
            this.alarmCollection.push( new RingAlarmClock(id, time, callback) );
        }
    };


    removeClock(id) {                    // Удаление звонка
        const indexToDelete = this.alarmCollection.findIndex( e => e === id);
        this.alarmCollection.splice(indexToDelete, 1);
    };


    getCurrentFormattedTime() {                      // Возвращает текущее время в формате HH:MM
        let hours = new Date().getHours() < 10 ? `0${new Date().getHours()}` : `${new Date().getHours()}`;
        let minutes = new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : `${new Date().getMinutes()}`;
        return `${hours}:${minutes}`;
    };

    

    start() {   //   Запуск таймера
        if(!this.timerId) {
            this.timerId = setInterval( () => {
                for( let e of this.alarmCollection){
                    checkClock.call(this, e);
                }
            }, 2000)
        }
    };

    
    stop() {  //   остановка таймера и очистка идентификатора
        if(this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    };


    printAlarms() {    //    Распечатка набора звонков
        this.alarmCollection.forEach( e => console.log(`id - ${e.id}, time - ${e.time}`) )
    };


    clearAlarms() {   //   Остановка таймера и очистка набора звонков
        this.stop();
        this.alarmCollection.length = 0;
    };
    

 };

 function checkClock(ring) {  //  Проверка  соотношения текщего времени и времени в звонке       
                if( this.getCurrentFormattedTime() === ring.time ) {
                    ring.callback();
                }               
 }



let clock1 = new AlarmClock();
clock2.addClock('22:25', () => console.log('text'), 1);


// clock2.addClock('22:25', () => console.log('text2'), 2)
// clock2.addClock('22:25', () => console.log('text3'), 3)
// debugger;