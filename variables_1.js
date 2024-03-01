/* Variables: 
    1. Variables are case sensitive.
    2. variable names include/can include a-z/A-Z/0-9/_/$
*/
a = 7
console.log(a)

var b = "Hello World!"
console.log(b)

let c = 1.2
console.log(c)

// Datatypes
/* They are of 2 types: Primitives & Non-primitives
Primitives include - numbers, strings, etc. 
                    * they are simple and immutable (non-changeable)
Non-primitives include- Objects, arrays
                    * they are complex and mutable (changeable)
*/

// Using typeof() to check the type of data i.e. datatype of values/variables

var age = 12, dec = 9.5, big_num = 123n, bool = true, n = null, val = NaN, abc
var str = "Greetings!!!"

console.log(typeof(age)) 
console.log(typeof(dec))
console.log(typeof(big_num))
console.log(typeof(bool))
console.log(typeof(n))
console.log(typeof(val))
console.log(typeof(abc))

console.log(big_num)
console.log(n)
console.log(val)

console.log("integer: ", age, " their type:", typeof(age))
console.log("String: ", str, " Type: ", typeof(str), str[1], str[-2])
var s1 = Symbol()
console.log(s1, typeof(s1))

//NON-PRIMITIVES:
var dog= {
    name: "Jerry",
    breed: "American Bully",
    age : 4,
    food: {
        morning: "bread and egg",
        evening: "Chapati + curd + eggs",
        snacks : "busicts + vegetables"
    },
    color : "Greyish black"
}

console.log(dog)
console.log("dog here is a type of - " + typeof(dog) + " His name is: " + dog['name'])

//Arrays
var arr = [1,2,3]
arr1 = ['a', 1, 'sunny', true, 2, 3, 'happy']

console.log("First Array: ", arr, " It's type is - ", typeof(arr))
console.log('Second array :', arr1, "It's type is - ", typeof(arr1))
console.log(arr1[2], typeof(arr1[2]))
