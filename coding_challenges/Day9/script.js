'use strict';

var fact = 1;

var factorial = function(num) {
    if(num == 0) {
        return 1;
    } else {
        for(var count = 1; count <= num; count = count + 1) {
            fact = fact * count;
        }
        return fact;
    }
}

console.log(factorial(10));