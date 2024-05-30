/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let n = init
    const increment = ()=>{
        n = n + 1
        return n
    }
    const decrement = ()=>{
        n = n - 1
        return n
    }
    const reset = ()=>{
        n = init
        return n
    }
    return {increment,decrement,reset}
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */