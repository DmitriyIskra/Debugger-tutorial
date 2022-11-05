function compareArrays(arr1, arr2) {

  return arr1.every( (i, index, array) => array.length === arr2.length && index === arr2.indexOf(i) && i === arr2[index]);

};



function advancedFilter(arr) {

  return arr.filter( i => i > 0 && i % 3 === 0 ).map( i => i * 10 );

};

