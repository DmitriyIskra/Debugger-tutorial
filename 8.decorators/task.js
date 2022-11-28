
function cachingDecoratorNew(func) {
  let cache = {};

  return function(...args) {
    let hash = `${args}`

    if(hash in cache) {
      return "Из кэша: " + cache[hash];
    }

    let result =  func(...args);
    cache[hash] = result;
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