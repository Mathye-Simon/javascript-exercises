function removeFromArray (array,...args) {
    let newArray = []

    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item)
        }
    })
    return newArray
};

removeFromArray([1,2,3,4,5], 3, 2)
// Do not edit below this line
module.exports = removeFromArray;
