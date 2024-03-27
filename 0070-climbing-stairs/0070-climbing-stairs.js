/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dit = new Array(n+2).fill(-1);
    return helperfunction(0+1, n, dit) + helperfunction(0+2, n, dit);
};

var helperfunction = function(currentValue, n, dit){
    if(currentValue === n){
        return 1;
    }
    if(currentValue > n){
        return 0;
    }
    else{
        if(dit[currentValue+1] === -1){
            dit[currentValue+1] = helperfunction(currentValue+1, n, dit);
        }
        if(dit[currentValue+2] === -1){
            dit[currentValue+2] = helperfunction(currentValue+2, n, dit);
        }
        return dit[currentValue+1] + dit[currentValue+2];
    }
}