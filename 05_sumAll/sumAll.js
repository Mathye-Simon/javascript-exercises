const sumAll = function(num1,num2) {
    range = 0
    listOfNums= []

    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1)||!Number.isInteger(num2)){
        return 'ERROR'
    }

    else if (num1 >= num2){
        while (num2<=num1) {
            
            listOfNums.push(num2)
            num2+=1
        }
    }
    else if (num2 >= num1) {
        while (num1 <= num2) {
            
            listOfNums.push(num1)
            num1+=1
        }
    }
    listOfNums.forEach((item)=>{
        range+=item
    })
    return range
};

// Do not edit below this line
module.exports = sumAll;
