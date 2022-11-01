"use strict";

function solveEquation(a, b, c) {
  
  const arr = [];
  
  const discriminant = b**2-4*a*c;

  if (discriminant === 0) {

    arr.push(-b/(2*a));

  }
  else if (discriminant > 0) {

    arr.push( (-b + Math.sqrt(discriminant) )/(2*a), (-b - Math.sqrt(discriminant) )/(2*a) );

  };

  return arr; // array
}




function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let bodyCredit;
  let amountCreditMonths;
  let payment;

  if ( Number.isNaN(+percent) ) {
    totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  else if ( Number.isNaN(+contribution) ) {
    totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  else if ( Number.isNaN(+amount) ) {
    totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }
  else {
    percent = +percent / 12 / 100;
    contribution = +contribution;
    amount = +amount;

    bodyCredit = amount - contribution;

    amountCreditMonths = Math.floor( (date.getTime() - Date.now()) / 1000/60/60/24/30 );

    payment = bodyCredit * (percent + (percent / (((1 + percent) ** amountCreditMonths) - 1)));

    totalAmount = +(payment * amountCreditMonths).toFixed(2);
  };
  
  console.log(totalAmount);

  return totalAmount;
}

debugger;