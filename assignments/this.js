/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window - If none of the below apply, 'this' will be bound to the window object. In 'strict' mode, 'this' will default to 'undefined'

* 2. Implicit - 'this' refers to whatever is left of the dot when the function is invoked

* 3. New - 'this' is bound to the new object being created

* 4. Explicit - 'this' refers to whatever is passed into .call(immediately invoked, args passed in one at a time), .apply(immmediately invoked, arguments passed in as an array), or .bind(same as .call() but returns a new function that is not immediately invoked)

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function windowBinding(){
    console.log(this);
}

console.log(windowBinding());

// Principle 2

// code example for Implicit Binding

implicitBinding = {    // <------this object is what 'this' is referring to
    name: "Len",
    speak: function(){
        return `${this.name} says hi`
    }
}

console.log(implicitBinding.speak());

// Principle 3

// code example for New Binding

function Person(name, age){
    this.name = name,
    this.age = age
}

len = new Person("Len", 33);

// len = {
//     name: "Len",  <-----this is what 'this' is referring to
//     age: 33       <-----this is what 'this' is referring to
// }

console.log(len);



// Principle 4

// code example for Explicit Binding

function sayName(){
    console.log(`${this.name} says ${this.says}`)  //<----- The 'this' keywords in this function will refer to  (down below)
}

let steve = {
    name: "Steve",      //<---------- these values  (down below)
    says: "hello!"
}

sayName.call(steve);

let newSteve = sayName.bind(steve);

console.log(newSteve());  //<------- the new function created by .bind() is not immediately invoked so I did it manually here