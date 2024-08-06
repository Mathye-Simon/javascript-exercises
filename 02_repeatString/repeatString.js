function repeatString (string,num) {
    
    repeatedString = [];
    // CHECK FIRST FOR NEGATIVES
    if (num < 0) {
        return 'ERROR'
    }
// pushing to an array so they can pile on each other multiple of times
    for (i = 1; i <= num; i++) {
        repeatedString.push(string)
        
    }
    return(repeatedString.join(''))
    
};

repeatString('hey',6)
// Do not edit below this line
module.exports = repeatString;
