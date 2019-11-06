const product = (a, b) => {
    return a * b
}


const result1 = product(107, 109)
console.log(result1)

//整数ｎを因数として考えると、１からｎまでの和を計算する関数　sum
const sum = (n) => {
    let result
    for(i = 1; i <= n; i = i + 1) {
        result =result + i
    }
    return result
}
const result2 = sum(500)
console.log(result2)