/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const toBe =  (n)=>{
            if(n===val)
                return true
            throw "Not Equal"
        }
    
     const notToBe =  (n)=>{
            if(n!==val)
                return true
            throw "Equal"
        }
        return {toBe,notToBe}
    
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */