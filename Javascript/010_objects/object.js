// const mySym = Symbol("key1")

// const obj = {
//     userName: "kuch bhi",
//     email: "kuchbhi@email.com",
//     isLoggedIn: false,
//     [mySym]: 123,
// }

// console.log(obj.email);

// console.log(obj['userName']);

// console.log(typeof mySym);

// obj.email = 'kuchbhi@goggle.com'
// console.log(obj);

// Object.freeze(obj)

// obj.email = 'kuchbhi@msoft.com'
// console.log(obj);

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign(obj1, obj2)
const obj3 = Object.assign({}, obj1, obj2)

console.log(obj3);