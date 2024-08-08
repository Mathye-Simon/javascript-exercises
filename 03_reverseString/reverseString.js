
function reverseString (string) {
    // turn string to array allowing every charater to be accessed through loop
    let splitstring = string.split('')
    let reversedString = []
    
    if (string == '') {
        return reversedString = ''
    }
    else {
        for (i = splitstring.length -1; i >= 0;) {
        
        reversedString.push(splitstring[i])       
        i -= 1         
        }
        reversedString = reversedString.join('')
        return reversedString
    }
    
};
reverseString('hello there')

// Do not edit below this line
module.exports = reverseString;
