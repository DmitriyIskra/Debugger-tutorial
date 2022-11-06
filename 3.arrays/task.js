const compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every( (e, index) => e === arr2[index]);



const advancedFilter = arr => arr.filter( e => e > 0 && e % 3 === 0 ).map( e => e * 10 );

debugger;
