//scope
//Nested function scope
// let a =10
// function outer(){
//     let b =20
//     function inner(){
//         let c =30
//         console.log(a,b,c)
//     }
//     inner()
// }
// outer()
//closure
// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   return inner
// }
// const fn = outer();
// fn()
// fn()
// function currying
// function sum(a, b, c) {
//   return a + b + c;
// }
// console.log(sum(2, 3, 5));

// function curry(fn){
//     return function(a){
//         return function(b){
//             return function(c){
//                 return fn(a, b, c)
//             }
//         }
//     }
// }
// const curriedSum = curry(sum)
// console.log(curriedSum(2)(3)(5))

// const add2 = curriedSum(2)
// const add3 = add2(3)
// const add5 = add3(5)
// console.log(add5)
// this
// function sayMyName(name){
//     console.log(`My name is ${name}`)
// }
// sayMyName('Walter White')
// sayMyName('Heisenberg')
// Implicit binding
// Explicit binding
// New binding
// Default binding
// const person = {
// name:'Vishwas',
// sayMyName: function(name){
//         console.log(`My name is ${this.name}`)
//     },
// }
// person.sayMyName()
// const name = 'super man'
// globalThis.name = 'superman'
// function sayMyName(){
//         console.log(`My name is ${this.name}`)
//     }
// 
// function person(name){
//     this is {}
//     this.name = name
// }
// const p1 = new person('avinash')
// console.log(p1.name)
// Prototype
function person(fname, lname) {
    this.firstname = fname
    this.lastname = lname
}
person.prototype.getFullName = function () {
    return this.firstname + this.lastname
}
// const person1 = new person('bruce','node')
// const person2 = new person('avi','nash')
// console.log(person1.getFullName())
// console.log(person2.getFullName())
function superhero(fname, lname){
    person.call(this, fname, lname)
    this.issuperhero = true
}
superhero.prototype.fightcrime = function(){
    console.log('fighting crime')
}
superhero.prototype = Object.create(person.prototype)
const batman = new superhero('bruce','wayne')
console.log(batman.getFullName())
// superhero.prototype.constructor = superhero