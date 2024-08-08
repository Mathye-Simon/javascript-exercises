function removeFromArray (array, num, num2, num3, num4) {
    if (num == '' || num2 == '') {
        return array
    }
    for (i = 0; i < array.length; i++) {
        // checks for what to remove then removes 1 from the index because the length has decreased
        if(array[i] === num || array[i] === num2 || array[i] === num3 || array[i] === num4) {
            array.splice(i,1)
            i-=1
        } 
    } 
    return array
    
};

removeFromArray([1,2,3,4,5], 3, 2)
// Do not edit below this line
module.exports = removeFromArray;
