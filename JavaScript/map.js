
const arr = [5, 1, 3, 2, 6] ; 

function double(x){
    return x*2 
}

function binary(x){
    return x.toString(2) ; 
}

const output = arr.map(double)
const output2 = arr.map(binary)

const output3 = arr.map(function binary(x){
    return x.toString(2)
})

const output4 = arr.map((x) => x.toString(2))

console.log(output)

