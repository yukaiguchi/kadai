const obj1 = "abc"
const obj2 = 123
const obj3 = false
const obj4 = {a: 123}
const obj5 = { func: () => console.log('hi!')}
const obj6 = { property: undefined }
 
console.log(JSON.stringify(obj1))
console.log(JSON.stringify(obj6))
console.log(JSON.stringify(obj3))
