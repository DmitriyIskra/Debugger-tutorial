
class Cache {
  constructor(hash, result) {
    this[hash] = result;
  }
}

const sum = (...args) => args.reduce( (acc, e) => acc += e );

function cachingDecoratorNew(func) {
  let cache = [];

  return function(...args) {
    let hash = `${args}`

    let filteredHash = cache.find( e => hash in e );

    if(filteredHash) {
      return "Из кэша: " + filteredHash[hash];
    }

    let result =  func(...args);

    if(cache.length === 5) {
      cache.splice(0, 1);
    }
    
    cache.push(new Cache(hash, result));
    return "Вычисляем: " + result;
  }
}



function debounceDecoratorNew(func, delay) {
  let timeoutId = null;

  function wrapper(...args) { 
    if(timeoutId === null) {

      timeoutId = 1;
      wrapper.count += 1;
      wrapper.allCount += 1;
      return func(...args);

    }
    else{

      if(timeoutId) {
        clearTimeout(timeoutId);
      };

      timeoutId = setTimeout(() => {
        wrapper.count += 1;
        return func(...args);
      }, delay);
      
      wrapper.allCount += 1;  
    }
  }

  wrapper.count = 0;
  wrapper.allCount = 0;
  

  return wrapper;
}

debugger;