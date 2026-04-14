const arr = [1, 2, 3, 4, 5]
// arr.forEach((num) => console.log(num))
// arr.forEach((num, index, array) => console.log(num, index, `Array:- ${array}`))

// const arr2 = arr.filter( (nums) => nums > 2)

// const arr2 = arr.map( (nums) => nums + 10)

// const arr2 = arr.map( (nums) => nums + 10)
//                 .filter( (nums) => nums > 12)

const arr2 = arr.reduce( (acc, currValue) => {
                            console.log(acc, currValue)
                            return acc + currValue
                        })
console.log(arr2);
