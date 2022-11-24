 
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
            console.error('Ошибка');
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

    

    // start() {
    //     if(!this.timerId) {
    //         this.timerId = setInterval( () => {
    //             for( let e of this.alarmCollection){
    //                 checkClock.call(this, e);
    //             }
    //         })
    //     }
    // };

    
    stop() { // !!!!
        if(this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    };


    printAlarms() { // !!!!
        console.log(this.alarmCollection)
        // this.alarmCollection.forEach( e => console.log(e) )
        // `id - ${e.id}, time - ${e.time}`
    };


    clearAlarms() { // !!!!
        this.stop();
        this.alarmCollection.length = 0;
    };
    

 };

 function checkClock(ring) {         
                if( this.getCurrentFormattedTime() === ring.time ) {
                    ring.callback();
                }               
 }



let clock2 = new AlarmClock();
clock2.addClock('22:25', () => console.log('text'), 1)

// clock2.addClock('22:25', () => console.log('text2'), 2)
// clock2.addClock('22:25', () => console.log('text3'), 3)
// debugger;