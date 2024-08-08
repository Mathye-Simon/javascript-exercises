const sumAll = function(num1,num2) {
    range = 0
    let i = 0
    listOfNums= []
    if (num1 >= num2){
        while (i<=num1) {
            i+=1
            listOfNums.push(i)
        }
    }
    else if (num2 >= num1) {
        while (i < num2) {
            i+=1
            listOfNums.push(i)
        }
    }
    listOfNums.forEach((item)=>{
        range+=item
    })
    return range
};

// Do not edit below this line
module.exports = sumAll;
