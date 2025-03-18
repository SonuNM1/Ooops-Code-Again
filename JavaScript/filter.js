const arr = [5, 1, 3, 2, 6] ; 

// filter odd values 

function isOdd(x){
    return x % 2 
}

// filter array values greater than 4

function greaterThan4(x){
    return x > 4
}

const output = arr.filter(isOdd)
const output2 = arr.filter(greaterThan4)

// filter even values 

const output3 = arr.filter((x) => x % 2 ==0)

console.log(output)