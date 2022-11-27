
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
debugger;

function debounceDecoratorNew(func) {
  // Ваш код
}

// debugger;