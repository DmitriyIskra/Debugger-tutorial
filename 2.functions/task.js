// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  
  min = arr[0];
  max = arr[0];
  sum = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    
    sum += arr[i];

    if (min > arr[i]) {
      min = arr[i];
    };

    if (max < arr[i]) {
      max = arr[i];
    };
    
  };

  avg = +(sum / arr.length).toFixed(2);
  

  return { min: min, max: max, avg: avg };
} 

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  };

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);

  for ( let i = 0; i < arrOfArr.length; i += 1 ) {

    if ( max < func(arrOfArr[i]) ) {
      max = func(arrOfArr[i]);
    };
    
  }; 
  
  return max;
}

// Задание 3
function worker2(arr) {
  let min, max, difference;

  min = arr[0];
  max = arr[0];

  for (let i = 1; i < arr.length; i += 1) {

    if (min > arr[i]) {
      min = arr[i];
    };
    
    if (max < arr[i]) {
      max = arr[i];
    };
  }

  difference = Math.abs(max - min);

  return difference;

};


function makeWork(arrOfArr, worker2) {

  const arr = [];

  for (let i = 0; i < arrOfArr.length; i += 1) {
    arr[i] = worker2(arrOfArr[i])
  }

  return arr[0] > arr[1] ? arr[0] : arr[1]

};

debugger;